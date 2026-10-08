import { afterEach, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import handler from "../api/contact";

const validBody = {
  name: "Jane Builder",
  company: "Acme Homes",
  email: "jane@example.com",
  phone: "7045550100",
  subject: "New site in Huntersville",
  message: "We have 40 acres <b>near</b> Davidson.\nCan we talk?",
};

type SentEmail = Record<string, unknown>;

function fakeRes() {
  const out = { statusCode: 0, body: undefined as unknown, headers: {} as Record<string, string> };
  const res = {
    status(code: number) {
      out.statusCode = code;
      return res;
    },
    json(body: unknown) {
      out.body = body;
      return res;
    },
    setHeader(name: string, value: string) {
      out.headers[name] = value;
      return res;
    },
  };
  return { res: res as unknown as VercelResponse, out };
}

async function call(method: string, body?: unknown) {
  const { res, out } = fakeRes();
  await handler({ method, body } as VercelRequest, res);
  return out;
}

describe("POST /api/contact", () => {
  const realFetch = globalThis.fetch;
  const realKey = process.env.RESEND_API_KEY;
  const realConsoleError = console.error;
  let sent: SentEmail[];
  let resendStatus: number;

  beforeEach(() => {
    sent = [];
    resendStatus = 200;
    process.env.RESEND_API_KEY = "re_test_key";
    console.error = () => {};
    globalThis.fetch = (async (url: string | URL, init?: RequestInit) => {
      assert.equal(String(url), "https://api.resend.com/emails");
      sent.push(JSON.parse(String(init?.body)));
      const payload =
        resendStatus === 200
          ? { id: "email_123" }
          : { statusCode: resendStatus, name: "validation_error", message: "Domain not verified" };
      return new Response(JSON.stringify(payload), {
        status: resendStatus,
        headers: { "content-type": "application/json" },
      });
    }) as typeof fetch;
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
    console.error = realConsoleError;
    if (realKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = realKey;
  });

  it("emails the submission to info@themontroseteam.com and reports success", async () => {
    const out = await call("POST", validBody);

    assert.equal(out.statusCode, 200);
    assert.deepEqual(out.body, { success: true });
    assert.equal(sent.length, 1);
    const email = sent[0];
    assert.equal(email.to, "info@themontroseteam.com");
    assert.equal(email.from, "Montrose Website <no-reply@themontroseteam.com>");
    assert.equal(email.reply_to, "jane@example.com");
    assert.equal(email.subject, "New Contact Form: New site in Huntersville");
    for (const value of ["Jane Builder", "Acme Homes", "jane@example.com", "7045550100"]) {
      assert.match(String(email.html), new RegExp(value));
      assert.match(String(email.text), new RegExp(value));
    }
  });

  it("escapes HTML the visitor typed so it cannot alter the email", async () => {
    await call("POST", validBody);

    const html = String(sent[0].html);
    assert.match(html, /&lt;b&gt;near&lt;\/b&gt;/);
    assert.doesNotMatch(html, /<b>near<\/b>/);
    assert.match(html, /Davidson\.<br>Can we talk\?/);
  });

  it("reports failure when Resend rejects the email", async () => {
    resendStatus = 403;
    const out = await call("POST", validBody);

    assert.equal(out.statusCode, 502);
    assert.equal((out.body as { success: boolean }).success, false);
  });

  it("reports failure without calling Resend when the API key is missing", async () => {
    delete process.env.RESEND_API_KEY;
    const out = await call("POST", validBody);

    assert.equal(out.statusCode, 500);
    assert.equal(sent.length, 0);
  });

  it("rejects an incomplete form without sending anything", async () => {
    const out = await call("POST", { ...validBody, email: "not-an-email" });

    assert.equal(out.statusCode, 400);
    assert.equal(sent.length, 0);
  });

  it("rejects other methods", async () => {
    const out = await call("GET");

    assert.equal(out.statusCode, 405);
    assert.equal(out.headers.Allow, "POST");
    assert.equal(sent.length, 0);
  });
});

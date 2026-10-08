import type { Express } from "express";
import { createServer, type Server } from "http";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import contactHandler from "../api/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // Same handler Vercel serves in production, so local dev cannot drift from it.
  app.post("/api/contact", (req, res) =>
    contactHandler(req as unknown as VercelRequest, res as unknown as VercelResponse),
  );

  const httpServer = createServer(app);

  return httpServer;
}

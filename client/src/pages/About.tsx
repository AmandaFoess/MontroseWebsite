import { Link } from "wouter";
import PageHeader from "@/components/PageHeader";
import ValueCard from "@/components/ValueCard";
import { Button } from "@/components/ui/button";
import { Award, Leaf, Lightbulb, Shield, Users, Handshake, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We minimize environmental impact and promote long term value.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace technologies to create forward-thinking development solutions.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold transparency and ethical behavior in all we do.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Our projects enhance and integrate with the surrounding communities.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We value collaboration with clients, contractors, and community members.",
    },
  ];

  return (
    <div>
      <PageHeader
        title={`About ${COMPANY.name}`}
        subtitle="Building Tomorrow's Communities Today"
      />

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Mission Statement</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            To deliver innovative and expertly managed real estate development solutions that create
            lasting value for our clients, communities, and stakeholders.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who We Are</h2>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              At Montrose, we partner with our clients to turn vision into lasting impact. We provide
              comprehensive acquisition, entitlement and development expertise, delivering thoughtful,
              results-driven solutions tailored to each project's unique goals. Our work is grounded
              in the core pillars of project management—planning, execution, accountability, and
              performance, ensuring every initiative is delivered efficiently, transparently, and with
              measurable results.
            </p>
            <p>
              Founded in 2013, Montrose began as a local land development consultant and has grown
              intentionally into a trusted regional partner. Our growth reflects more than expansion,
              it reflects our commitment to excellence, integrity, and building strong foundations
              within the communities we serve. Deeply rooted in our region, we maintain long-standing
              relationships with local organizations, stakeholders, and partners who share our
              commitment to responsible, sustainable growth.
            </p>
            <p>
              We combine deep industry expertise with innovative, data-driven strategies to help our
              clients navigate complexity, reduce risk, and maximize value. Through disciplined project
              management and collaborative partnership, we support our clients in driving revenue,
              improving profitability, reducing risk, and achieving long-term financial performance,
              without compromising quality, sustainability, or community impact.
            </p>
            <p>
              Our work is guided by core values that shape every decision we make: excellence in
              execution, sustainability in planning, innovation in approach, integrity in relationships,
              and a genuine commitment to community and partnerships. These principles allow us to
              deliver solutions that are not only effective today, but resilient for the future.
            </p>
            <p>
              What truly sets Montrose apart is our ability to align vision, execution, and outcomes.
              We believe the strongest results are achieved when strategic insight, rigorous project
              management, and trusted partnerships come together. We measure our performance by the
              success of all the stakeholders involved.
            </p>
            <p>
              At Montrose, we don't simply manage projects, we create momentum, build trust, and help
              our clients move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-topo">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">
            Ready to Discuss Your Next Project?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            We'd love to learn about your development goals and explore how Montrose can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

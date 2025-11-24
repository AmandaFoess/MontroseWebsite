import Hero from "@/components/Hero";
import ValueCard from "@/components/ValueCard";
import { Award, Leaf, Lightbulb, Shield, Users, Handshake } from "lucide-react";

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
      <Hero
        title="About Montrose LLC"
        subtitle="Building Tomorrow's Communities Today"
        variant="compact"
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
              At Montrose, we offer a comprehensive range of development expertise, delivering
              results that are precisely tailored to each client's unique vision. By leveraging deep
              industry knowledge alongside innovative, data-driven solutions, we approach every
              project with a focus on precision, efficiency, and maximizing value. Our collaborative
              mindset and commitment to quality enable us to design custom strategies that produce
              meaningful outcomes and enduring success.
            </p>
            <p>
              Founded in 2013, Montrose has grown thoughtfully and strategically—from a small local
              land development consultant to a respected regional partner. This steady evolution
              reflects our dedication to building strong foundations, both in the communities we
              serve and in our professional relationships. Our history is rooted in consistent growth
              guided by expertise, trust, and proven results.
            </p>
            <p>
              We have cultivated deep connections with local organizations and community stakeholders,
              which underpin our reputation for delivering high-quality, innovative projects. Central
              to our success is a disciplined project management process that drives efficiency and
              exceptional stakeholder satisfaction. Our unwavering commitment to excellence,
              collaboration, and precise execution continues to be the foundation of our lasting
              impact.
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
    </div>
  );
}

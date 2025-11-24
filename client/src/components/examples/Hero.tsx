import Hero from "../Hero";
import heroImage from "@assets/generated_images/landing_page_hero_development_aerial.png";

export default function HeroExample() {
  return (
    <Hero
      title="Transforming Land Into Lasting Value"
      subtitle="We lead with data, innovation, and stakeholder alignment to deliver high-performing real estate development projects."
      imageSrc={heroImage}
      showCTA={true}
      variant="full"
    />
  );
}

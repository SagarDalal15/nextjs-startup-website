import FeaturesSection from "../components/features-section";
import HomeSection from "../components/home-section";
import ServicesSection from "../components/services-section";
import TeamSection from "../components/team-section";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div>
      <section id="home">
        <HomeSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <Footer />
    </div>
  );
}

import FeaturesSection from "../feature-card";
import SecuritySection from "../security-section";
import TechSection from "../tech-section";

export default function Features() {
  return (
    <>
      <section className="py-20 px-12 mt-0 bg-gradient-to-r from-primary-700 to-secondary-700 shadow-xl">
        <div className="text-center  max-w-4xl mx-auto">
          <h2 className="secondary-heading !text-secondary-300">
            Alle Features unserer KI-Suite
          </h2>
          <h3 className="text-4xl text-white">
            tbd
          </h3>
          <p className="my-16 text-2xl text-white font-light">
            tbd
          </p>
        </div>
      </section>
      <FeaturesSection />
      <TechSection />
      <SecuritySection />
    </>
  );
}

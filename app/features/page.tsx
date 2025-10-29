import FeaturesSection from "../feature-card";
import SecuritySection from "../security-section";
import TechSection from "../tech-section";
import PersonaAgents from "../persona-agents";

export default function Features() {
  return (
    <>
      <section className="py-20 px-12 mt-0 bg-gradient-to-r from-primary-700 to-secondary-700 shadow-xl">
        <div className="text-center  max-w-4xl mx-auto">
          <h2 className="secondary-heading !text-secondary-300">
            Ihre digitale Teamverstärkung im Praxisalltag
          </h2>
          <h3 className="text-4xl text-white">
            KI, die mitdenkt und entlastet.
          </h3>
          <p className="my-16 text-2xl text-white font-light">
            Ob Arztpraxis, Geburtshaus oder Pflege: Mit Ebliq schreiben sich Dokumente fast von selbst. Unsere Agenten hören zu, strukturieren Inhalte automatisch und sorgen für sichere, vollständige Protokolle - ganz ohne Mehraufwand.
          </p>
        </div>
      </section>

      <PersonaAgents onlyCards className="bg-transparent shadow-none" />

      <FeaturesSection />

      <TechSection />
      <SecuritySection />
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const agentsData = [
  {
    href: "/for-you/doctos",
    image: "/agent1.png",
    headline: "Sie behandeln, er erledigt den Rest.",
    text: "Der Anamnese-Agent hört live mit, strukturiert Inhalte, legt verwertbare Protokolle an und stößt Folgeaufgaben (Rezepte, Überweisungen) an.",
    persona: "Ärzt:innen",
    agent: "Anamnese-Agent",
  },
  {
    href: "/for-you/midwifes",
    image: "/agent3.png",
    headline: "Dokumentieren unterwegs - sicher und mobil",
    text: "Sprache wird zu rechtssicheren Protokollen, Zeiten & Ereignisse werden erkannt, Einträge korrekt zugeordnet. Ideal auf Tablet & Smartphone.",
    persona: "Hebammen",
    agent: "Hebammen-Agent",
  },
  {
    href: "/for-you/officeteam",
    image: "/agent2.png",
    headline: "Den Rückruf erledigt jetzt KI",
    text: "Nimmt Anrufe entgegen, dokumentiert Anliegen strukturiert und ruft aktiv zurück - Terminmanagement ohne Nachtelefonieren.",
    persona: "Praxis-Teams",
    agent: "Tele-Agent",
  },
];

export default function PersonaAgents() {
  return (
    <section className="py-20 px-12 mt-0 mb-12 bg-primary-700 text-center shadow-xl">
      <div className=" max-w-4xl mx-auto">
        <h2 className="secondary-heading !text-primary-200">
          Von Antworten zu echter Unterstützung - unsere KI-Agenten
        </h2>
        <h3 className="text-4xl text-white">
          Spezialisierte KI-Helfer, die Ihren Praxisalltag erleichtern
        </h3>
        <p className="my-16 text-2xl text-white font-light">
          Ebliq geht über Chatbots hinaus: Spezialisierte Agenten übernehmen Anamnese, Dokumentation und Patient:innen-Kommunikation - und entlasten so spürbar den Praxisalltag.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {agentsData.map((agent, index) => (
          <Link href={agent.href}>
            <div className="relative flex flex-col items-center p-4 rounded-sm shadow-md min-h-[600px] text-white overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group">
              <div className="flex justify-between mb-2 z-20 w-full">
                <Badge variant="secondary" size="lg" className="flex-none">{agent.agent}</Badge>
                <Badge variant="transparent" className="flex-none">für {agent.persona}</Badge>
              </div>
              <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={agent.image}
                  alt={agent.headline}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                  priority={false}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center p-4 rounded-sm bg-primary-50 bg-opacity-80 mt-auto w-full transition-all duration-300 group-hover:bg-opacity-90">
                <h3 className="">
                  {agent.headline}
                </h3>
                <p className="text-md text-black transition-colors duration-300 group-hover:text-gray-700">
                  {agent.text}
                </p>
                <Button asChild variant="default" className="my-4 place-self">
                  <a href={agent.href} >
                    alle Vorteile für {agent.persona} 
                    <ArrowRight className="ml-2"/>
                  </a>
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Button asChild size="xxl" variant="outlineinvers" className="mt-20">
        <a href="/features" >
          alle Funktionen entdecken
          <ArrowRight className="ml-8" size="40" />
        </a>
      </Button>

    </section>
  );
}

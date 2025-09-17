import {
  RefreshCw,
  Stethoscope,
  Search,
  Calendar,
  FileText,
  Mic,
  ClipboardCheck,
  Activity,
  Mail,
  Link,
  MessageSquare,
  ShieldCheck,
  Bell,
  BookOpen,
  BarChart3,
} from "lucide-react";
import {
  AgentCard,
  AgentCardWithBackground,
  AgentGrid,
} from "@/components/agent-cards/agent-cards";

const agentsWithIcon = [
  {
    href: "/features/anamnese-bot",
    image: "/agent1.png",
    headline: "Anamnese-Agent",
    text: "Der Anamnese-Agent unterstütz den Arzt bei der optimalen Patientenaufnahme – vollständig, effizient und dokumentationssicher. Ideal bei der Patientenaufnahme.",
  },
  {
    href: "/features/arztbrief-generator",
    image: "/agent2.png",
    headline: "Arztbrief-Generator",
    text: "Mit Ebliq schreiben sich Arztbriefe fast von selbst. Der Generator übernimmt wichtige Inhalte automatisch – strukturiert, korrekt und zeitsparend.",
  },
  {
    href: "/features/ai-assistant",
    image: "/agent3.png",
    headline: "AI-Assistent",
    text: "Mit dem integrierten AI-Assistenten sprechen Sie wie mit einem echten Teammitglied. Er beantwortet Fragen, sucht Informationen und leitet Anfragen weiter.",
  },
];

const agents = [
  {
    icon: Stethoscope,
    headline: "AnamnesaBot",
    text: "Unser AnamnesaBot stellt die richtigen Fragen zur optimalen Patientenaufnahme – vollständig, effizient und dokumentationssicher. Ideal zur Vorbereitung auf den Arztbesuch.",
  },
  {
    icon: Search,
    headline: "SymptomChecker Agent",
    text: "Nie wieder wichtige Hinweise übersehen: Der SymptomChecker analysiert Patientenangaben intelligent und liefert eine strukturierte Ersteinschätzung – schnell und präzise.",
  },
  {
    icon: Calendar,
    headline: "Terminvorbereitungs-Agent",
    text: "Optimal vorbereitet zum Termin: Unser Agent integriert Informationen direkt in die Patientenakte – für effiziente Abläufe und informierte Entscheidungen.",
  },
  {
    icon: FileText,
    headline: "Arztbrief Generator",
    text: "Mit eBiq schreiben sich Arztbriefe fast von selbst. Der Generator übernimmt wichtige Inhalte automatisch – strukturiert, korrekt und zeitsparend.",
  },
  {
    icon: Mic,
    headline: "DiktierAssistent",
    text: "Sprechen statt tippen: Unser DiktierAssistent unterstützt medizinisches Fachpersonal mit Spracherkennung in Echtzeit – inklusive strukturierter Weiterverarbeitung.",
  },
  {
    icon: ClipboardCheck,
    headline: "Dokumentenprüfer",
    text: "Mit dem Dokumentenprüfer behalten Sie alle Formulare im Griff. Vollautomatische Prüfung auf Vollständigkeit und Plausibilität – direkt am Patienten.",
  },
  {
    icon: Activity,
    headline: "Chroniker-Coach",
    text: "Der digitale Begleiter für chronisch Erkrankte: Unser Coach unterstützt strukturierte Versorgung und leitet durch alle Schritte – für mehr Sicherheit im Alltag.",
  },
  {
    icon: Mail,
    headline: "E-Mail/Fax-Parser",
    text: "Abrechnungsagent eBiq erkennt Dokumente aus E-Mails und Faxen automatisch – extrahiert Daten und stellt sie strukturiert bereit. Sparen Sie Zeit bei der Dokumentation.",
  },
  {
    icon: Link,
    headline: "HL7/FHIR Connector",
    text: "Vernetzung leicht gemacht: Unser HL7/FHIR Connector sorgt für sichere, standardisierte Schnittstellenkommunikation – ideal für Nachsorge und Datenintegration.",
  },
  {
    icon: MessageSquare,
    headline: "Arzt-zu-Arzt-Agent",
    text: "Kommunikation ohne Medienbrüche: Unser Arzt-zu-Arzt-Agent standardisiert die Übermittlung medizinischer Informationen – schnell, sicher und datenschutzkonform.",
  },
  {
    icon: RefreshCw,
    headline: "Patienten-Aktualisierer",
    text: "Immer auf dem neuesten Stand: Der Patienten-Aktualisierer hält Stammdaten automatisch aktuell – direkt im System, ohne Mehraufwand.",
  },
  {
    icon: ShieldCheck,
    headline: "Audit Vorbereitungs-Agent",
    text: "Sicher durch jedes Audit: Unser Agent prüft Ihre Datenschutz- und OM-Richtlinien – auf Wunsch automatisiert inklusive Zertifizierungs-Check.",
  },
  {
    icon: Bell,
    headline: "Nachsorge-Reminder",
    text: "Nie wieder Nachsorge vergessen: Unser Reminder benachrichtigt Patienten rechtzeitig und hilft bei der Einhaltung medizinischer Kontrolltermine – für bessere Versorgung.",
  },
  {
    icon: BookOpen,
    headline: "Patientenverständnis-Agent",
    text: "Medizin verständlich erklärt: Unser Agent wandelt Fachsprache in patientengerechte Informationen um – für mehr Verständnis und Therapietreue.",
  },
  {
    icon: BarChart3,
    headline: "Praxis-KPI-Agent",
    text: "Praxisziele erreichen leicht gemacht: Unser KPI-Agent analysiert Ihre Daten und zeigt Potenziale auf – visuell und verständlich.",
  },
];

export default function FeaturesSection() {
  // const features = [
  //   {
  //     icon: AppWindow,
  //     title: "Automatisierte Patienten-Anamnese",
  //     description:
  //       "Erfasse Anamnesen schnell und strukturiert – unsere KI führt Ärzte Schritt für Schritt durch alle relevanten Fragen.",
  //   },
  //   {
  //     icon: Paintbrush,
  //     title: "Smarte Arztbrief-Erstellung",
  //     description:
  //       "Reduziere den Aufwand beim Schreiben von Arztbriefen: Einfache Vorlagen und automatische Textvorschläge für präzise Dokumentation.",
  //   },
  //   {
  //     icon: Package,
  //     title: "Dokumentenmanagement",
  //     description:
  //       "Importiere Arztbriefe, Laborwerte und andere Befunde mühelos in die App und behalte alle wichtigen Informationen im Blick.",
  //   },
  //   {
  //     icon: Settings,
  //     title: "Nahtlose Systemintegrationen",
  //     description:
  //       "Verbinde deine Praxissoftware oder Krankenhaus-IT über standardisierte Schnittstellen – so läuft der Datenaustausch reibungslos.",
  //   },
  //   {
  //     icon: Layers,
  //     title: "Individuell anpassbar",
  //     description:
  //       "Passe die App an die Bedürfnisse deiner Praxis an: Von Benutzerrollen bis hin zu Formularfeldern – volle Flexibilität für dein Team.",
  //   },
  //   {
  //     icon: RefreshCw,
  //     title: "Regelmäßige Updates",
  //     description:
  //       "Profitiere von kontinuierlichen Verbesserungen und neuen Funktionen, damit deine App immer auf dem neuesten Stand bleibt.",
  //   },
  // ];
  return (
    <section className="py-0 px-4 relative overflow-hidden" id="features">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center my-10 md:my-20">
          <h2 className="">
            KI-gestützte Gesundheits-App für Ärztinnen und Ärzte
          </h2>
          <p className="max-w-3xl mx-auto">
            Entlaste deinen Praxisalltag: Unsere Lösung kombiniert
            automatisierte Anamnese, effizientes Dokumentenmanagement und smarte
            Arztbrief-Erstellung in einer benutzerfreundlichen App. Mit
            zahlreichen KI-Agents, die speziell auf medizinische Aufgaben
            trainiert sind, unterstützen wir dich bei der täglichen Arbeit - von
            Routineaufgaben bis zur komplexen Diagnostik. Individuell anpassbar
            und immer auf dem neuesten Stand.
          </p>
        </div>

        <AgentGrid cols={"3"} className="mb-16">
          {agentsWithIcon.map((agent, index) => (
            <AgentCardWithBackground
              key={index}
              imageUrl={agent.image}
              headline={agent.headline}
              text={agent.text}
              href={agent.href}
            ></AgentCardWithBackground>
          ))}
        </AgentGrid>

        <AgentGrid cols={"4"} className="mb-16">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              icon={agent.icon}
              headline={agent.headline}
              text={agent.text}
            ></AgentCard>
          ))}
        </AgentGrid>
      </div>
    </section>
  );
}

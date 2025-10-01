import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import TechSection from "@/app/tech-section";
import Link from "next/link";

import {
  Stethoscope,
  ClipboardPenLine,
  ClockArrowUp,
  Smile,
  PlayCircleIcon, 
  Rocket,
  Check,
  ArrowRight,
  BotMessageSquare,
  FileSearch,
  Languages,
  Cable,
  TabletSmartphone,
  Phone,
} from "lucide-react";

import { List, ListItem } from "@/components/typography/typography";

const benefits = [
  {
    headline: "Zeit gewinnen",
    text: "Bis zu 2 Std./Tag weniger Schreibarbeit.",
    icon: ClockArrowUp,
  },
  {
    headline: "Bessere Behandlungen",
    text: "Mehr Fokus & der Agent prüft parallel die Akte.",
    icon: Stethoscope,
  },
  {
    headline: "Zufriedenere Patient:innen",
    text: "Mehr Wertschätzung, mehr Aufmerksamkeit, weniger Fehler.",
    icon: Smile,
  },
  {
    headline: "Automatisch konform dokumentiert",
    text: "KV-, DSGVO- und G-BA-konform - lückenlos.",
    icon: ClipboardPenLine,
  },
];

const featureHighlights = [
  {
    headline: "Praxis-KI-Chat & Wissenssuche",
    text: "Antworten statt Akten wälzen: Praxisdaten, Leitlinien und Quellen direkt während der Behandlung abrufen.",
    icon: BotMessageSquare,
  },
  {
    headline: "Dokumenten-Analyse & Abgleich",
    text: "Befunde automatisch prüfen, Informationen abgleichen und Ergebnisse strukturiert anzeigen.",
    icon: FileSearch,
  },
  {
    headline: "Mehrsprachigkeit & Übersetzer",
    text: "Versteht und übersetzt mehrere Sprachen - bessere Betreuung unabhängig von der Muttersprache.",
    icon: Languages,
  },
  {
    headline: "Integration & Schnittstellen (z. B. FHIR)",
    text: "Export ins KIS, per E-Mail oder Speicherung in Ebliq - ohne Brüche im Workflow.",
    icon: Cable,
  },
  {
    headline: "Flexible Hardware & einfache Nutzung",
    text: "Tablet oder PC, freihändig arbeiten, sofort einsatzbereit - kein IT-Projekt nötig.",
    icon: TabletSmartphone,
  },
];

const agentHighlights = [
  {
    title: "Echtzeit-Sprachdokumentation",
    text: "Hört live mit und strukturiert automatisch.",
  },
  {
    title: "Automatische Extraktion relevanter Informationen",
    text: "Allergien, Medikation, Impfungen und Termine - zuverlässig erkannt und dokumentiert.",
  },
  {
    title: "Gesprächsvorlagen für Fachbereiche & Situationen",
    text: "Pädiatrie, Chirurgie, Urologie u. a. - individuelle Templates reduzieren Nacharbeit und sichern Standards.",
  },
  {
    title: "Visuelle Unterstützung & Nachfragen",
    text: "Der Agent weist auf fehlende Angaben hin, fragt aktiv nach, fasst zusammen und visualisiert.",
  },
];

const ctaButtonStart = (
  <Button
    variant={"default"}
    size={"lg"}
    asChild
  >
    {<a href="https://app.Ebliq.de/sign-up?redirect_url=https%3A%2F%2Fapp.Ebliq.de%2F">
      <Rocket className="h-5 w-5 mr-3" />
      Kostenlos ausprobieren
    </a>}
  </Button>
);
const ctaButtonDemo = (
  <Button
    variant="ghost"
    size="lg"
    asChild
  >
    <a
      href="https://www.loom.com/share/40697f79eb1340d686eec6638283ba03?sid=82f9a33c-ca62-489d-bfdd-71fecd220b5d"
      className="flex items-center"
    >
      <PlayCircleIcon className="h-8 w-8 mr-3" />
      <div className="flex flex-col items-start">
        <span className="font-semibold">Demo ansehen</span>
      </div>
    </a>
  </Button>
);

export default function Page() {
  return (
    <>
      <section className="w-full shadow-xl">
        <div className="z-10 bg-gray-300 bg-[url(/agent1.png)] flex items-center md:py-12 bg-blend-overlay bg-top bg-cover">
          <div className="max-w-4xl mx-6 md:mx-auto md:px-6 lg:px-0 py-12 lg:py-0 z-10">
            <Badge variant="secondary" size="lg" className="mr-2 mb-2">KI-Diagnostik-Agent</Badge>
            <Badge variant="outline" size="lg"  className="">für Ärzt:innen</Badge>
            <h1 className="text-3xl leading-[1.1] md:text-4xl sm:leading-[1.1] xl:text-5xl xl:leading-[1.1] mt-12">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 
                Mehr Zeit für Patienten.
              </span>
              <br/>Weniger Stress mit Dokumentation. 
              <br/>Mehr Sicherheit in der Behandlung.
            </h1>
            <p className="text-lg md:text-2xl my-10">
            Ebliq entlastet Ärzt:innen mit dem Diagnostik-Agenten: Ihre Gespräche werden automatisch erfasst, 
            strukturiert dokumentiert und direkt in die Patientenakte übertragen. So behalten Ärzt:innen Kopf und Hände frei.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 md:mt-4">
              {ctaButtonStart}
              {ctaButtonDemo}
            </div>
            <div className="hidden sm:block text-base my-2">Kein IT-Projekt. Start in 2 Minuten.</div>
          </div>
        </div>
      </section>


      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2>Vorteile für Ärzt:innen auf einen Blick.</h2>
            <p>Ebliq entlastet dort, wo es zählt: Dokumentation, Kommunikation und Behandlungsqualität.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2 content-center my-4">
            {benefits.map((benefit, index) => (
              <Card className="bg-primary-50 border-none px-4 py-2 ">
                <CardContent className="flex justify-start gap-4 items-top p-0">
                  <benefit.icon size="60" strokeWidth={1} className="text-primary-600 basis-2/10 w-[60px] shrink-0" />
                  <div className="basis-8/10">
                    <h3 className="m-0 text-lg md:text-xl text-primary-600">{benefit.headline}</h3>
                    <span className="text-base md:text-lg text-muted">{benefit.text}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> 


      <section className="py-6 md:py-20 px-6 md:px-12 mt-0 bg-primary-700 shadow-xl">
        <div className="max-w-4xl mx-auto ">
          <h2 className="secondary-heading !text-primary-200">
              Diagnostik-Agent: Das Herzstück für Ihre Behandlungen
            </h2>
            <h3 className="text-2xl md:text-4xl text-white">
              Vom ersten Wort bis zur fertigen Akte - zuverlässig, vollständig, sicher.
            </h3>
          <div className="flex justify-between items-center gap-3">
            <div className="">
              <List className="my-4">
                {agentHighlights.map((item, index) => (
                  <ListItem className="text-background flex items-top gap-2">
                    <Check size="30" strokeWidth={5} className="mt-1 text-green basis-2/10 w-[50px] shrink-0" />
                    <div className="basis-8/10">
                      <div className="font-bold">{item.title}</div>
                      <div className="font-light">{item.text}</div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="hidden sm:block bg-white h-[300px] w-[300px]  shrink-0">TBD bild</div>
          </div>
          <div className="mt-6 md:mt-12">{ctaButtonStart}</div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2>Mehr als Diagnostik: Ebliq-Funktionen, die Sie und Ihre Praxis entlasten.</h2>
            <p>Grundfunktionen, die Recherche, Dokumente, Übersetzung und Integration erleichtern - nahtlos in Ihren Workflow.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 content-center my-4">
            {featureHighlights.map((feature, index) => (
              <Card className="bg-primary-50 border-none px-4 py-2 shadow-md hover:shadow-lg">
                <CardContent className="flex justify-start gap-4 items-center p-0">
                  <feature.icon size="60" strokeWidth={1} className="text-primary-600 basis-2/10 w-[60px] shrink-0" />
                  <div className="basis-8/10">
                    <h3 className="m-0 text-lg md:text-xl text-primary-600">{feature.headline}</h3>
                  </div>
                </CardContent>
                <CardDescription className="text-base md:text-lg text-muted mt-2">{feature.text}</CardDescription>
              </Card>
            ))}
            <div className="shrink-0 grow-0 px-4 py-2 text-center content-center">
              <h3 className="m-0 mb-4 text-lg md:text-xl text-primary-600">Noch mehr?</h3>
              <Button asChild variant="secondary" className="">
                <a href="/features" >
                  zu allen Features
                  <ArrowRight className="ml-2"/>
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section> 

      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-lg bg-gradient-to-br from-secondary-400 via-primary-600 via-40% to-85% to-secondary-900 text-primary-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl text-white mt-0">Jetzt selbst erleben</h2>
            <p className="text-2xl md:text-3xl">Starten Sie in 2 Minuten - oder lassen Sie sich den Diagnostik-Agenten unverbindlich vorführen.</p>
          </div>
          <div className="flex flex-wrap gap-2 content-center my-4 md:my-8 justify-left">
            {ctaButtonStart}
            <Button
              variant="ghost"
              className="text-white "
              size="lg"
            >
              <Link href="https://calendly.com/max-oseven/30min" target="_blank" className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                Termin vereinbaren
              </Link>
            </Button>
          </div>
          <div className="text-primary-200 text-base">Kein Abo. Jederzeit kündbar. DSGVO & KV konform. Keine Patientendaten fürs Training.</div>
        </div>
      </section> 

      <TechSection />

    </>
  );
}

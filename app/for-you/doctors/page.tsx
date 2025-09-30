import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import {
  Stethoscope,
  ClipboardPenLine,
  ClockArrowUp,
  Smile,
  PlayCircleIcon, 
  Rocket,
  Check,
} from "lucide-react";
import { List, ListItem } from "@/components/typography/typography";

const benefits = [
  {
    headline: "Zeit gewinnen",
    text: "Bis zu 2 Std./Tag weniger Schreibarbeit.",
    icon: ClockArrowUp<LucideProps>
  },
  {
    headline: "Bessere Behandlungen",
    text: "Mehr Fokus & der Agent prüft parallel die Akte.",
    icon: Stethoscope<LucideProps>,
  },
  {
    headline: "Zufriedenere Patient:innen",
    text: "Mehr Wertschätzung, mehr Aufmerksamkeit, weniger Fehler.",
    icon: Smile<LucideProps>,
  },
  {
    headline: "Automatisch konform dokumentiert",
    text: "KV-, DSGVO- und G-BA-konform - lückenlos.",
    icon: ClipboardPenLine<LucideProps>,
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
    text: "Pädiatrie, Chirurgie, Urologie u. a. - Templates reduzieren Nacharbeit und sichern Standards.",
  },
  {
    title: "Visuelle Unterstützung & Nachfragen",
    text: "Der Agent weist auf fehlende Angaben hin, fragt nach und visualisiert.",
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

export default function Page() {
  return (
    <>
      <section className="w-full shadow-xl">
        <div className="z-10 bg-gray-300 bg-[url(/agent1.png)] flex items-center md:py-12 bg-blend-overlay bg-top bg-cover">
          <div className="max-w-4xl mx-6 md:mx-auto md:px-6 py-12 lg:py-0 z-10">
            <Badge variant="secondary" size="lg" className="mr-2 mb-2">KI-Anamnese-Agent</Badge>
            <Badge variant="outline" size="lg"  className="">für Ärzt:innen</Badge>
            <h1 className="text-3xl leading-[1.1] md:text-4xl sm:leading-[1.1] xl:text-5xl xl:leading-[1.1] mt-12">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 
                Mehr Zeit für Patienten.
              </span>
              <br/>Weniger Stress mit Dokumentation. 
              <br/>Mehr Sicherheit in der Behandlung.
            </h1>
            <p className="text-lg md:text-2xl my-10">
            Ebliq entlastet Ärzt:innen mit dem Anamnese-Agenten: Ihre Gespräche werden automatisch erfasst, 
            strukturiert dokumentiert und direkt in die Patientenakte übertragen. So behalten Ärzt:innen Kopf und Hände frei.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 md:mt-4">
              {ctaButtonStart}
              <Button
                variant="ghost"
                size={"lg"}
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
            </div>
            <div className="hidden sm:block text-base my-2">Kein IT-Projekt. Start in 2 Minuten.</div>
          </div>
        </div>
      </section>


      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-lg text-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2>Vorteile für Ärzt:innen auf einen Blick</h2>
            <p>Ebliq entlastet dort, wo es zählt: Dokumentation, Kommunikation und Behandlungsqualität.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2 content-center my-4">
            {benefits.map((benefit, index) => (
              <Card className="bg-primary-50 border-none px-4 py-2">
                <CardContent className="flex justify-start gap-4 items-top p-0">
                  <benefit.icon size="50" strokeWidth={1} className="basis-2/10 w-[50px] shrink-0" />
                  <div className="basis-8/10">
                    <h3 className="m-0 text-lg md:text-xl">{benefit.headline}</h3>
                    <span className="text-base md:text-lg">{benefit.text}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {ctaButtonStart}
        </div>
      </section> 


      <section className="py-6 md:py-20 px-6 md:px-12 mt-0 bg-primary-700 shadow-xl">
        <div className="max-w-4xl mx-auto ">
          <h2 className="secondary-heading !text-primary-200">
              Anamnese-Agent: Das Herzstück für Ihre Behandlungen
            </h2>
            <h3 className="text-2xl md:text-4xl text-white">
              Vom ersten Wort bis zur fertigen Akte - zuverlässig, vollständig, sicher.
            </h3>
          <div className="flex justify-between items-center">
            <div className="">
              <List className="my-4">
                {agentHighlights.map((item, index) => (
                  <ListItem className="text-background flex items-top gap-2">
                    <Check size="30" strokeWidth={3} className="mt-1 text-green basis-2/10 w-[50px] shrink-0" />
                    <div className="basis-8/10">
                      <div className="font-bold">{item.title}</div>
                      <div className="font-light">{item.text}</div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="hidden sm:block">bild</div>
          </div>
          <div className="mt-6 md:mt-12">{ctaButtonStart}</div>
        </div>
      </section>
    </>
  );
}

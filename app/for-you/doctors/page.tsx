import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TechSection from "@/app/tech-section";
import CalculatorSection from "./calculator-section";
import { Item, ItemContent, ItemTitle, ItemActions } from "@/components/ui/item";
import Link from "next/link";

import {
  Stethoscope,
  ClipboardPenLine,
  ClockArrowUp,
  Smile,
  PlayCircleIcon, 
  Rocket,
  ArrowRight,
  BotMessageSquare,
  FileSearch,
  Languages,
  Cable,
  TabletSmartphone,
  Phone,
} from "lucide-react";

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
    text: "Export ins PVS/KIS, per E-Mail oder Speicherung in Ebliq - ohne Brüche im Workflow.",
    icon: Cable,
  },
  {
    headline: "Flexible Hardware & einfache Nutzung",
    text: "Tablet oder PC, freihändig arbeiten, sofort einsatzbereit - kein IT-Projekt nötig.",
    icon: TabletSmartphone,
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
        <div className="z-10 bg-gray-300 bg-[url(/header_anamnese.png)] flex items-center md:py-12 bg-blend-overlay bg-top bg-cover">
          <div className="max-w-4xl mx-6 md:mx-auto md:px-6 lg:px-0 py-12 lg:py-0 z-10">
            <Badge variant="secondary" size="lg" className="mr-2 mb-2">Anamnese-Agent</Badge>
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
            {benefits.map((benefit) => (
              <Card key={benefit.headline} className="bg-primary-50 border-none px-4 py-2 ">
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

      <CalculatorSection />

      <section className="py-6 md:py-20 px-6 md:px-12 mt-0 bg-primary-700 shadow-xl">
        <div className="max-w-4xl mx-auto ">
          <h2 className="secondary-heading mt-0 !text-primary-200">
            Der Ebliq Anamnese-Agent: 
          </h2>
          <h3 className="text-2xl md:text-4xl text-white">
            Vom Gespräch zur fertigen Dokumentation.
          </h3>
          <p className="text-xl md:text-2xl text-white">
            Ihr digitaler Assistent hört mit, erkennt relevante Aussagen und erstellt daraus strukturierte Protokolle - ganz automatisch, während Sie behandeln.
          </p>
          <div className="grid sm:grid-cols-12 justify-start items-start gap-4 mt-12">
            <div className="text-[24rem]/[100%] overflow-hidden basis-1/10 text-secondary text-right col-span-2 hidden sm:block">1</div>
            <div className="w-full basis-1/10 sm:col-span-10">
                <Card className="border-0 border-t-2 border-secondary">
                  <CardHeader>
                    <CardDescription className="uppercase text-base">
                      während Anamnese & Behandlung
                    </CardDescription>
                    <CardTitle className="text-primary-700 text-3xl font-bold">Zuhören, Verstehen, Merken</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Der Agent hört mit, unterscheidet Sprecher:innen und erstellt ein Live-Transkript.</p>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full">
                      <video
                        className="h-full w-full object-cover rounded-none border-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                      >
                        <source src="/assets/video/live-transcription.webm" type="video/webm" />
                        <source src="/assets/video/live-transcription.mp4" type="video/mp4" />
                        Ebliq erstellt ein Live-Transcript eines Patienten-Gesprächs.
                      </video>
                    </div>
                  </CardFooter>
                </Card>
            </div>

            <div className="text-[24rem]/[100%] overflow-hidden basis-1/10 text-secondary text-right col-span-2 hidden sm:block">2</div>
            <div className="w-full basis-1/10 sm:col-span-10">
                <Card className="border-0 border-t-2 border-secondary">
                  <CardHeader>
                    <CardDescription className="uppercase text-base">
                      Zusammenfassung
                    </CardDescription>
                    <CardTitle className="text-primary-700 text-3xl font-bold">Wissen extrahieren & strukturieren</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Aus Sprache wird Wissen: Allergien, Termine, Befunde, Medikationen oder auch und Therapiepläne werden automatisch aus dem Gesprochenen extrahiert und aufbereitet in das Protokoll übernommen. Mit anpassbaren Gesprächsvorlagen bringt der Agent die Dokumentation genau in die von Ihnen gewünschte Form.</p>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full">
                      <video
                        className="h-full w-full object-cover rounded-none border-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                      >
                        <source src="/assets/video/result-extract.mp4" type="video/mp4" />
                        <source src="/assets/video/result-extract.webm" type="video/webm" />
                        Der Anamnese-Agent erstellt das Protokoll strukturiert entlang individueller Vorgaben.
                      </video>
                    </div>
                  </CardFooter>
                </Card>
            </div>

            <div className="text-[24rem]/[100%] overflow-hidden basis-1/10 text-secondary text-right col-span-2  hidden sm:block">3</div>
            <div className="w-full basis-1/10 sm:col-span-10">
                <Card className="border-0 border-t-2 border-secondary">
                  <CardHeader>
                    <CardDescription className="uppercase text-base">
                      Abschluss
                    </CardDescription>
                    <CardTitle className="text-primary-700 text-3xl font-bold">Dokumentieren, Prüfen & Freigeben</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Der Anamnese-Agent erstellt automatisch ein nach FIHR-strukturiertes Protokoll - inklusive Gesprächsverlauf & relevanter Extrakte. Sie behalten jederzeit die Kontrolle: Manuelle Prüfung, Ergänzungen & Korrekturen und anschließend die Ein-Klick-Freigabe. Erst dann wird es in Ihren bevorzugten Workflow überführt - etwa automatisch ins PVS/KIS, als sichere E-Mail an Ihr Team und zukünftig auch an die ePA.</p>
                  </CardContent>
                  <CardFooter>
                      <video
                        className="h-full w-full object-cover rounded-none border-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                      >
                        <source src="/assets/video/approve-anamnese.mp4" type="video/mp4" />
                        <source src="/assets/video/approve-anamnese.webm" type="video/webm" />
                        Die strukturierte Dokumentation wird korrigiert und bspw. per E-Mail oder Schnittstelle nach der Freigabe versendet.
                      </video>
                  </CardFooter>
                </Card>
            </div>

            <div className="text-[20rem]/[80%] overflow-hidden basis-1/10 text-secondary text-right col-span-2  hidden sm:block">+</div>
            <div className="w-full basis-1/10 sm:col-span-10">
                <Card className="border-0 border-t-2 border-secondary">
                  <CardHeader>
                    <CardDescription className="uppercase text-base">
                      Ausblick
                    </CardDescription>
                    <CardTitle className="text-primary-700 text-3xl font-bold">...bald noch mehr Unterstützung für Ihre Behandlungen!</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Freuen Sie sich in Kürze auf weitere Funktionen: <strong>automatischer Leitlinien-Check, intelligente Nachfragen & Alarme oder die Behandlungs-Fortführung in Folgeterminen</strong>. So entwickelt sich Ebliq Schritt für Schritt weiter - immer an Ihrer Seite.</p>
                  </CardContent>
                </Card>
            </div>
          </div>

          <Item className="bg-secondary mt-16">
            <ItemContent className="">
              <ItemTitle className="text-secondary-100 text-lg">Mehr Zeit für das Wesentliche:
                <span className="text-secondary-50">Ihre Patient:innen.</span></ItemTitle>
            </ItemContent>
            <ItemActions>
              {ctaButtonStart}
            </ItemActions>
          </Item>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2>Mehr als Anamnese: weitere Ebliq-Funktionen, die Sie und Ihre Praxis entlasten.</h2>
            <p>Grundfunktionen, die Recherche, Dokumente, Übersetzung und Integration erleichtern - nahtlos in Ihren Workflow.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 content-center my-4">
            {featureHighlights.map((feature) => (
              <Card
                key={feature.headline}
                className="bg-primary-50 border-none px-4 py-2 shadow-md hover:shadow-lg"
              >
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
            <p className="text-2xl md:text-3xl">Starten Sie in 2 Minuten - oder lassen Sie sich den Anamnese-Agenten unverbindlich vorführen.</p>
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
          <div className="text-primary-200 text-base">Kein Abo. Jederzeit kündbar. Gesetzeskonform. Keine Patientendaten fürs Training.</div>
        </div>
      </section> 

      <TechSection />

    </>
  );
}

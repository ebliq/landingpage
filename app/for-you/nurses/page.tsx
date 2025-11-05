import { Fragment } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import Link from "next/link";

import {
  Handshake,
  ArrowRight,
  Mic,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  BotMessageSquare,
  FileSearch,
  Languages,
  TabletSmartphone,
} from "lucide-react";
import ConformityHighlightsSection from "@/components/for-you/conformity-section";

const introBenefits = [
  {
    headline: "Sprache statt Tippen",
    text: "Dokumentation läuft mit - Ebliq versteht, strukturiert und ergänzt automatisch.",
    icon: Mic,
  },
  {
    headline: "Sicher & konform",
    text: "DSGVO-konform, nachvollziehbar, bereit für jeden Prüfprozess.",
    icon: ShieldCheck,
  },
  {
    headline: "Sofort spürbare Entlastung",
    text: "Weniger Schreibarbeit, mehr Zeit für Pflege und Koordination.",
    icon: Sparkles,
  },
  {
    headline: "Übergaben ohne Lücken",
    text: "Alle Informationen stehen teamübergreifend bereit - ohne Nacharbeit.",
    icon: Users,
  },
];

const journeySteps = [
  {
    number: "1",
    phase: "Während der Pflege",
    title: "Sprechen.",
    description:
      "Pflegekräfte dokumentieren mündlich - natürlich und parallel zur Versorgung. Ebliq hört mit, setzt Zeitmarken und erkennt Fachsprache.",
    videoSources: [
      { src: "/assets/video/doku-start.mp4", type: "video/mp4" },
      { src: "/assets/video/doku-start.webm", type: "video/webm" },
    ],
  },
  {
    number: "2",
    phase: "Automatisch strukturieren",
    title: "Erkennen & strukturieren.",
    description:
      "Ebliq ordnet Inhalte automatisch den richtigen Feldern, Patient:innen und Maßnahmen zu - ganz ohne Nacharbeit.",
    videoSources: [
      { src: "/assets/video/doku-result.mp4", type: "video/mp4" },
      { src: "/assets/video/doku-result.webm", type: "video/webm" },
    ],
  },
  {
    number: "3",
    phase: "Überprüfen & sicher abschließen",
    title: "Speichern & Übergabe.",
    description:
      "Der fertige Bericht steht dem gesamten Team bereit - als PDF, FHIR-Note oder Übergabe an das Bestandssystem.",
    videoSources: [
      { src: "/assets/video/doku-finish.mp4", type: "video/mp4" },
      { src: "/assets/video/doku-finish.webm", type: "video/webm" },
    ],
  },
];

const featureHighlights = [
  {
    headline: "KI-Chat & Wissensdatenbank",
    text: "Antworten statt Suchen: Pflegestandards, Leitlinien oder interne Informationen direkt abrufen und automatisch in die Dokumentation einbinden.",
    icon: BotMessageSquare,
  },
  {
    headline: "Dokumentenanalyse & Abgleich",
    text: "Pflegeberichte, Arztanordnungen oder Verlaufsdokumente intelligent verknüpfen - Ebliq erkennt Zusammenhänge und erstellt übersichtliche Zusammenfassungen.",
    icon: FileSearch,
  },
  {
    headline: "Mehrsprachigkeit & Übersetzer",
    text: "Unterstützung bei der Kommunikation mit Bewohner:innen, Angehörigen oder internationalen Teams - Fachbegriffe erklären, Inhalte übersetzen, Informationen vereinfachen.",
    icon: Languages,
  },
  {
    headline: "Kommunikation & Übergabe",
    text: "Sprachbasierte Übergaben zwischen Schichten oder Einrichtungen - vollständig, sicher und sofort für alle im Team verfügbar.",
    icon: Handshake,
  },
  {
    headline: "Flexible Hardware & einfache Nutzung",
    text: "Ebliq läuft auf Smartphone, Tablet oder Laptop - ideal für den Stationsalltag, Hausbesuche oder mobile Pflegedienste.",
    icon: TabletSmartphone,
  },
];

const miniStories = [
  {
    headline: "Übergabebericht per Sprache",
    text: "Ein kurzer Satz genügt - Ebliq erstellt automatisch eine strukturierte Übergabedokumentation.",
  },
  {
    headline: "Wunddokumentation am Bett",
    text: "Fotos, Maße, Beobachtungen: alles wird direkt erfasst und ins richtige Format übertragen.",
  },
  {
    headline: "Ereignis- oder Unfallprotokoll",
    text: "Einfach aussprechen, statt später nachtragen - Ebliq sichert jede Information ab dem ersten Moment.",
  },
];

const conformityHighlights = [
  {
    title: "Konformität ohne Zusatzaufwand",
    text: "Ebliq erfüllt höchste Anforderungen an Datenschutz, Sicherheit und Nachvollziehbarkeit.",
  },
  {
    title: "Verarbeitung in Europa",
    text: "Alle Daten werden verschlüsselt in zertifizierten europäischen Rechenzentren verarbeitet.",
  },
  {
    title: "Keine Trainingsdaten",
    text: "Ihre Dokumentationen fließen nie ins Training von KI-Modellen ein.",
  },
  {
    title: "FHIR & DSGVO im Kern",
    text: "Unsere Architektur folgt FHIR-Standards und ist vollständig DSGVO-konform.",
  },
];

const ctaButtonStart = (
  <Button variant="default" size="lg" asChild>
    <a href="https://app.Ebliq.de/sign-up?redirect_url=https%3A%2F%2Fapp.Ebliq.de%2F">
      <Rocket className="mr-3 h-5 w-5" />
      Jetzt ausprobieren
    </a>
  </Button>
);

const ctaButtonLearn = (
  <Button variant="outline" size="lg" asChild>
    <a href="#everyday">
      Jetzt mehr erfahren
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </Button>
);

export default function Page() {
  return (
    <>
      <section className="w-full shadow-lg">
        <div className="z-10 flex items-center bg-gray-300 bg-[url(/header-nurses.png)] bg-cover bg-center bg-blend-overlay md:py-12">
          <div className="z-10 mx-6 max-w-4xl py-12 md:mx-auto md:px-6 lg:px-0 lg:py-0">
            <Badge variant="secondary" size="lg" className="mr-2 mb-2">
              Pflege-Agent
            </Badge>
            <Badge variant="outline" size="lg">
              für Pflegekräfte
            </Badge>
            <h1 className="mt-12 text-3xl leading-[1.1] md:text-4xl xl:text-5xl xl:leading-[1.1]">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pflege, die entlastet.
              </span>
              <br />
              Weniger Schreibarbeit.
              <br />
              Mehr Sicherheit im Alltag.
            </h1>
            <p className="my-10 text-lg md:text-2xl">
              Pflege heißt Verantwortung - für Menschen, Abläufe und Dokumentation.
              Ebliq begleitet Sie dabei: als digitaler Agent, der mitdenkt, mitschreibt
              und entlastet. Damit jedes Protokoll vollständig ist - und Ihr Team sich
              auf das Wesentliche konzentrieren kann.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 md:mt-4">
              {ctaButtonLearn}
              {ctaButtonStart}
            </div>
            <div className="my-2 hidden text-base sm:block">
              Kein IT-Projekt. Start in 2 Minuten.
            </div>
          </div>
        </div>
      </section>

      <section id="everyday" className="shadow-lg">
        <div className="mx-auto max-w-4xl px-6 py-10 md:px-0 md:py-20">
          <div className="mb-6">
            <h2>Pflege, die entlastet - jeden Tag.</h2>
            <p>
              Mit Ebliq dokumentieren Pflegekräfte schnell, sicher und ohne Zusatzaufwand.
              Der Pflege-Agent versteht Sprache, strukturiert Inhalte automatisch und sorgt dafür, dass jede Eintragung vollständig und nachvollziehbar bleibt - damit mehr Zeit für Betreuung bleibt, statt für Papierarbeit.
            </p>
          </div>
          <div className="my-4 grid content-center gap-2 sm:grid-cols-2">
            {introBenefits.map((benefit) => (
              <Card key={benefit.headline} className="border-none bg-primary-50 px-4 py-2">
                <CardContent className="flex items-start justify-start gap-4 p-0">
                  <benefit.icon
                    size="48"
                    strokeWidth={1}
                    className="w-[48px] shrink-0 basis-2/10 text-primary-600"
                  />
                  <div className="basis-8/10">
                    <h3 className="m-0 text-lg text-primary-600 md:text-xl">{benefit.headline}</h3>
                    <span className="text-base text-muted md:text-lg">{benefit.text}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-700 shadow-lg">
        <div className="mx-auto mt-0 max-w-4xl px-6 py-6 md:px-6 md:py-20">
          <h2 className="secondary-heading mt-0 !text-primary-200">
            Der Ebliq Pflege-Agent - entwickelt für Ihren Pflegealltag.
          </h2>
          <h3 className="text-2xl text-white md:text-4xl">
            Von Pflegehandlung zum fertigen Protokoll.
          </h3>
          <p className="text-xl text-white md:text-2xl">
            Ebliq verwandelt Dokumentation in einen fließenden Prozess - direkt dort, wo Pflege passiert.
            Aus Sprache wird automatisch ein vollständiger Bericht.
          </p>
          <div className="mt-12 grid items-start gap-4 sm:grid-cols-12">
            {journeySteps.map((step) => (
              <Fragment key={step.title}>
                <div
                  className="col-span-2 hidden basis-1/10 overflow-hidden text-right text-secondary text-[24rem]/[100%] sm:block"
                >
                  {step.number}
                </div>
                <div
                  className="w-full basis-1/10 sm:col-span-10"
                >
                  <Card className="border-0 border-t-2 border-secondary">
                    <CardHeader>
                      <CardDescription className="text-base uppercase">
                        {step.phase}
                      </CardDescription>
                      <CardTitle className="text-3xl font-bold text-primary-700">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{step.description}</p>
                    </CardContent>
                    {step.videoSources && (
                      <CardFooter>
                        <div className="w-full">
                          <video
                            className="h-full w-full rounded-none border-none object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                          >
                            {step.videoSources.map((source) => (
                              <source key={source.src} src={source.src} type={source.type} />
                            ))}
                          </video>
                        </div>
                      </CardFooter>
                    )}
                  </Card>
                </div>
              </Fragment>
            ))}

            <div className="text-[20rem]/[80%] overflow-hidden basis-1/10 text-secondary text-right col-span-2  hidden sm:block">+</div>
            <div className="w-full basis-1/10 sm:col-span-10">
                <Card className="border-0 border-t-2 border-secondary">
                  <CardHeader>
                    <CardDescription className="uppercase text-base">
                      Ausblick
                    </CardDescription>
                    <CardTitle className="text-primary-700 text-3xl font-bold">...bald noch mehr Unterstützung für Ihre Pflegearbeit!</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Ebliq erweitert Schritt für Schritt die Funktionen des Pflege-Agenten.
                      Künftig unterstützt Sie Ebliq auch bei Übergabeprotokollen, Dienstplanung und interdisziplinärer Kommunikation.
                      So entsteht ein digitaler Begleiter, der Ihre Pflegearbeit nachhaltig vereinfacht - Tag für Tag.
                    </p>
                  </CardContent>
                </Card>
            </div>
          </div>

          <Item className="mt-16 bg-secondary">
            <ItemContent>
              <ItemTitle className="text-lg text-secondary-200">
                Mehr Zeit für das Wesentliche:
                <span className="text-secondary-50"> Ihr Team und Ihre Bewohner:innen.</span>
              </ItemTitle>
            </ItemContent>
            <ItemActions>{ctaButtonStart}</ItemActions>
          </Item>
        </div>
      </section>

      <section className="bg-primary-50 py-10 shadow-lg md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-0">
          <h2>Ein Agent, viele Einsatzorte.</h2>
          <p className="mb-6">
            Ebliq passt sich Ihren Abläufen an - in der ambulanten Pflege ebenso wie im stationären Betrieb.
            Von spontanen Notizen bis zu kompletten Pflegeberichten.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {miniStories.map((story) => (
              <Card
                key={story.headline}
                className="border-none bg-white px-4 py-6 shadow-md"
              >
                <CardTitle className="text-lg text-primary-700">
                  {story.headline}
                </CardTitle>
                <CardDescription className="mt-4 text-base text-muted-foreground">
                  {story.text}
                </CardDescription>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-base text-primary-700">
            Ebliq ist Ihr stiller Dokumentations-Agent - da, wo Pflege passiert.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-xl ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2>Mehr als Dokumentation: intelligente Unterstützung im Pflegealltag</h2>
            <p className="mb-4">Ebliq entlastet Pflegekräfte weit über die Dokumentation hinaus - passgenau für Ihren Pflegealltag.</p>
            <p>Ebliq ist mehr als ein digitales Doku-Tool - der Pflege-Agent denkt mit, unterstützt Teams in Routineaufgaben und hilft, Abläufe sicher zu koordinieren.</p>
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
                  Alle Features ansehen
                  <ArrowRight className="ml-2"/>
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <ConformityHighlightsSection
        title="Konformität ohne Zusatzaufwand"
        subtitle="Verlässlich dokumentiert - für Sie und Ihre Bewohner:innen."
        items={conformityHighlights}
        footerText="Erfüllt die Anforderungen an Pflegedokumentation und Datenschutz nach DSGVO - ohne Mehraufwand."
      />

      <section className="bg-gradient-to-br from-secondary-400 via-primary-600 via-40% to-secondary-900 px-6 py-10 text-primary-100 shadow-lg md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <h2 className="text-4xl text-white md:text-6xl">Pflege mit weniger Schreibstress.</h2>
            <p className="text-2xl md:text-3xl">
              Ebliq begleitet Pflegekräfte vom ersten Gespräch bis zur fertigen Dokumentation - zuverlässig, konform und alltagstauglich.
            </p>
          </div>
          <div className="my-4 flex flex-wrap gap-2 md:my-8 md:gap-4">
            {ctaButtonStart}
            <Button
              variant="ghost"
              className="text-white"
              size="lg"
              asChild
            >
              <Link
                href="https://calendly.com/max-oseven/30min"
                target="_blank"
                className="flex items-center"
              >
                Mehr erfahren über den Pflege-Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="text-base text-primary-200">
            Kein Abo. Jederzeit kündbar. Keine Bewohner:innendaten fürs Training.
          </div>
        </div>
      </section>
    </>
  );
}

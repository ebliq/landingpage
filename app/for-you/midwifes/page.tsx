import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemTitle, ItemActions } from "@/components/ui/item";
import Link from "next/link";

import {
  ClockArrowUp,
  Rocket,
  ArrowRight,
  BotMessageSquare,
  FileSearch,
  Languages,
  Cable,
  TabletSmartphone,
  Phone,
  FolderCheck,
  Handshake,
  Check,
} from "lucide-react";

import { List, ListItem } from "@/components/typography/typography";

const benefits = [
  {
    headline: "Zeit gewinnen",
    text: "Dokumentieren Sie während der Betreuung, nicht abends.",
    icon: ClockArrowUp,
  },
  {
    headline: "Gesetzeskonform protokollieren",
    text: "Vollständig, nachvollziehbar, HebG- & DSGVO-konform.",
    icon: FolderCheck,
  },
  {
    headline: "Mobil dokumentieren",
    text: "Unterwegs, im Geburtshaus oder zu Hause, mit Tablet oder Smartphone.",
    icon: TabletSmartphone,
  },
  {
    headline: "Bessere Zusammenarbeit",
    text: "Einfache Übergabe an Ärzt:innen, Kliniken und Kassen.",
    icon: Handshake,
  },
];

const featureHighlights = [
  {
    headline: "KI-Chat & Wissenssuche",
    text: "Antworten statt Akten wälzen: Fragen beantworten, Inhalte aus Ihren Unterlagen abrufen und Formulierungen vorschlagen.",
    icon: BotMessageSquare,
  },
  {
    headline: "Dokumenten-Analyse & Abgleich",
    text: "Arztbriefe, Befunde, Protokolle oder Leitlinien einbinden: Ebliq hebt das Wesentliche hervor, erstellt Zusammenfassungen und verknüpft Inhalte.",
    icon: FileSearch,
  },
  {
    headline: "Mehrsprachigkeit & Übersetzer",
    text: "Unterstützung für Familien mit unterschiedlichen Sprachen: Erklärungen übersetzen, Fachbegriffe erläutern und Inhalte bei Bedarf in einfacher Sprache ausgeben.",
    icon: Languages,
  },
  {
    headline: "Integration & Schnittstellen (z. B. FHIR)",
    text: "Anbindungen an gängige Systeme - z. B. für Abrechnung, Kliniken und Praxen. Export als PDF oder FHIR-Note für reibungslose Übergaben.",
    icon: Cable,
  },
  {
    headline: "Flexible Hardware & einfache Nutzung",
    text: "Ebliq läuft auf Tablet, Smartphone oder Laptop - ideal für Hausbesuche, Geburtshaus und unterwegs.",
    icon: TabletSmartphone,
  },
];

const conformityHighlights = [
  {
    title: "Pflichtfelder vollständig",
    text: "Sofort erkennen, wenn Angaben fehlen.",
  },
  {
    title: "Zeit- & Datumsmarke automatisch",
    text: "Nachvollziehbarkeit sichergestellt.",
  },
  {
    title: "Sichere Speicherung",
    text: "Zertifizierte Cloud-Infrastruktur, Ende-zu-Ende-verschlüsselt.",
  },
  {
    title: "Export & Übergabe",
    text: "Vollständige, konforme PDFs und FHIR-Notes, einfacher Datenaustausch.Der Agent weist auf fehlende Angaben hin, fragt aktiv nach, fasst zusammen und visualisiert.",
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
      <section className="w-full shadow-lg">
        <div className="z-10 bg-gray-300 bg-[url(/header_midwife.png)] flex items-center md:py-12 bg-blend-overlay bg-top bg-cover">
          <div className="max-w-4xl mx-6 md:mx-auto md:px-6 lg:px-0 py-12 lg:py-0 z-10">
            <Badge variant="secondary" size="lg" className="mr-2 mb-2">Doku-Agent</Badge>
            <Badge variant="outline" size="lg"  className="">für Hebammen</Badge>
            <h1 className="text-3xl leading-[1.1] md:text-4xl sm:leading-[1.1] xl:text-5xl xl:leading-[1.1] mt-12">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 
                Mehr Zeit für Familien.
              </span>
              <br/>Weniger Papierkram.
              <br/>Mehr Sicherheit bei jeder Betreuung.
            </h1>
            <p className="text-lg md:text-2xl my-10">
              Ebliq unterstützt Hebammen bei der Dokumentation - einfach, konform und mobil. Damit Sie sich auf das Wesentliche konzentrieren können: Ihre Arbeit mit Mutter und Kind.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 md:mt-4">
              {ctaButtonStart}
              { /* ctaButtonDemo */ }
            </div>
            <div className="hidden sm:block text-base my-2">Kein IT-Projekt. Start in 2 Minuten.</div>
          </div>
        </div>
      </section>


      <section className="shadow-lg ">
        <div className="px-6 lg:px-0 py-10 md:py-20 max-w-4xl mx-auto">
          <div className="mb-6">
            <h2>Vorteile für Hebammen auf einen Blick.</h2>
            <p>Ebliq entlastet Hebammen bei Dokumentation, Kommunikation und Organisation.</p>
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

      <section className="bg-primary-700 shadow-lg ">
        <div className="py-6 md:py-20 px-6 md:px-6 mt-0 max-w-4xl mx-auto ">
          <h2 className="secondary-heading mt-0 !text-primary-200">
            Der Ebliq Doku-Agent für Hebammen: 
          </h2>
          <h3 className="text-2xl md:text-4xl text-white">
            Von Fürsorge zum fertigen Protokoll
          </h3>
          <p className="text-xl md:text-2xl text-white">
            Ebliq hört mit, erkennt relevante Aussagen und strukturiert daraus Ihre Dokumentation - automatisch, konsistent und gesetzeskonform.
          </p>
          <div className="grid sm:grid-cols-12 justify-start items-start gap-4 mt-12">
            <div className="text-[24rem]/[100%] overflow-hidden basis-1/10 text-secondary text-right col-span-2 hidden sm:block">1</div>
            <div className="w-full basis-1/10 sm:col-span-10">
                <Card className="border-0 border-t-2 border-secondary">
                  <CardHeader>
                    <CardDescription className="uppercase text-base">
                      während der Betreuung
                    </CardDescription>
                    <CardTitle className="text-primary-700 text-3xl font-bold">Zuhören, Erfassen, Zeitmarken setzen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>So einfach wie nur möglich: Mit einem Klick auf <strong>„Aufnahme starten“</strong> geht es los - ohne Menü-Geklicke.  Der Doku-Agent protokolliert dann live mit - inklusive automatischer Zeit- und Ereigniserkennung (z.-B. „vor 30 Minuten“) sowie Spracherkennung optimiert für Fachbegriffe.</p>
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
                        <source src="/assets/video/doku-start.mp4" type="video/mp4" />
                        <source src="/assets/video/doku-start.webm" type="video/webm" />
                        
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
                      automatische Zusammenfassung
                    </CardDescription>
                    <CardTitle className="text-primary-700 text-3xl font-bold">Wissen extrahieren & strukturieren</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Betreuungsgespräch, Befunde, Maßnahmen, Verlauf - alles wird aus der Sprache extrahiert und in eine klare Form gebracht. Ergebnis: <strong>Ihr digitales Geburts- und Wochenbettprotokoll</strong>.</p>
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
                        <source src="/assets/video/doku-result.mp4" type="video/mp4" />
                        <source src="/assets/video/doku-result.webm" type="video/webm" />
                        
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
                    <CardTitle className="text-primary-700 text-3xl font-bold">Dokumentieren, Zuordnen & Freigeben</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Der Doku-Agent schlägt automatisch passende Zuordnungen zu Mutter oder Bettenbelegung vor. Sie prüfen, bestätigen oder ändern mit einem Klick - ergänzen falls nötig und geben das Protokoll frei. Die Übergabe erfolgt automatisch in Ihrem Wunsch-Workflow, etwa an KIS, PSV oder per E-Mail.</p>
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
                        <source src="/assets/video/doku-finish.mp4" type="video/mp4" />
                        <source src="/assets/video/doku-finish.webm" type="video/webm" />
                        
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
                    <CardTitle className="text-primary-700 text-3xl font-bold">...bald noch mehr Unterstützung für Ihre Fürsorge!</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Freuen Sie sich in Kürze auf weitere Funktionen: <strong>automatischer Leitlinien-Check, intelligente Nachfragen & Alarme für Nachsorgetermine</strong>. So entwickelt sich Ebliq Schritt für Schritt weiter - immer an Ihrer Seite.</p>
                  </CardContent>
                </Card>
            </div>
          </div>

          <Item className="bg-secondary mt-16">
            <ItemContent className="">
              <ItemTitle className="text-secondary-200 text-lg">Mehr Zeit für das Wesentliche:
                <span className="text-secondary-50">Ihre Familien.</span></ItemTitle>
            </ItemContent>
            <ItemActions>
              {ctaButtonStart}
            </ItemActions>
          </Item>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-xl ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2>Mehr als Dokumentation: weitere Ebliq-Funktionen für Hebammen.</h2>
            <p className="mb-4">Ebliq kann mehr - passgenau für den Hebammen-Alltag.</p>
            <p>Der Doku-Agent ist das Herzstück, aber nicht alles. Ebliq bietet zusätzliche Funktionen, die sich nahtlos in Ihren Alltag einfügen und Abläufe konform, übersichtlich und effizient machen.</p>
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

      <section className="py-6 md:py-20 px-6 md:px-12 mt-0 bg-green-50 shadow-lg ">
        <div className="max-w-4xl mx-auto ">
          <h2 className="secondary-heading mt-0 !2text-primary-900">
              Konformität ohne Zusatzaufwand
            </h2>
            <h3 className="text-2xl md:text-4xl">
              Verlässlich dokumentiert - für Sie und Ihre Klientinnen.
            </h3>
          <div className="flex justify-between items-center gap-3">
            <div className="">
              <List className="my-4">
                {conformityHighlights.map((item) => (
                  <ListItem key={item.title} className="flex items-top gap-2">
                    <Check size="30" strokeWidth={5} className="mt-1 text-green basis-2/10 w-[50px] shrink-0" />
                    <div className="basis-8/10">
                      <div className="font-bold">{item.title}</div>
                      <div className="font-light">{item.text}</div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
          <div className="mt-6 text-muted text-sm">Erfüllt die Anforderungen des Hebammengesetzes (HebG) und der DSGVO - ohne Mehraufwand.</div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-10 md:py-20 shadow-lg bg-gradient-to-br from-secondary-400 via-primary-600 via-40% to-85% to-secondary-900 text-primary-100 ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl text-white mt-0">Jetzt selbst erleben</h2>
            <p className="text-2xl md:text-3xl">Starten Sie in 2 Minuten - oder lassen Sie sich den Doku-Agenten unverbindlich vorführen.</p>
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

    </>
  );
}

import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Rocket } from "lucide-react";

const ctaButtonStart = (
  <Button variant="default" size="lg" asChild>
    <a href="https://app.Ebliq.de/sign-up?redirect_url=https%3A%2F%2Fapp.Ebliq.de%2F" className="flex items-center">
      <Rocket className="mr-3 h-5 w-5" />
      Kostenlos ausprobieren
    </a>
  </Button>
);

const ctaButtonMeeting = (
  <Button variant="ghost" size="lg" asChild>
    <a
      href="https://calendly.com/max-oseven/30min"
      className="flex items-center"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Phone className="mr-3 h-5 w-5" />
      Termin vereinbaren
    </a>
  </Button>
);

export default function Page() {
  return (
    <>
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="secondary-heading">Early Access</h1>
          <h2 className="mb-8 text-3xl md:text-4xl">
            Werden Sie Teil des Early Access-Programms von Ebliq
          </h2>
          <p className="mb-4 text-lg">
            Nutzen Sie die Möglichkeit, Ebliq schon heute in Ihrer Praxis, Ihrem Arbeitsalltag oder Ihrem Netzwerk zu testen. In unserem Early
            Access-Programm arbeiten wir eng mit ausgewählten Interessenten zusammen, um reale Workflows abzubilden, Rückmeldungen direkt
            umzusetzen und gemeinsam die Zukunft der medizinischen Dokumentation zu gestalten.
          </p>
          <p className="mb-6 text-lg">
            Sie erhalten persönliche Begleitung durch unser Team, exklusive Produktupdates und unmittelbaren Einfluss auf neue
            Funktionen. Gleichzeitig sichern Sie sich einen Vorsprung, weil Ihre Prozesse bereits heute von den innovativen Ebliq-Funktionen profitieren.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {ctaButtonStart}
            {ctaButtonMeeting}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Kostenlos testen, jederzeit kündbar und selbstverständlich datenschutzkonform.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-50% from-primary-900 to-secondary-900 px-4 py-12 text-white shadow-md">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-white text-3xl font-bold">Was Early Access für Sie bedeutet</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full rounded-sm bg-primary/10 p-8 text-center text-white shadow-md sm:w-1/2 lg:w-1/3">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green" />
              <h3 className="mb-2 text-primary-200">Direktes Feedback, echte Wirkung</h3>
              <p>
                Wir binden Ihre Erfahrungen in unseren Entwicklungsprozess ein. Jede Rückmeldung fließt in die nächsten Releases
                ein, damit Ebliq genau zu Ihren Abläufen passt.
              </p>
            </div>
            <div className="w-full rounded-sm bg-primary/10 p-8 text-center text-white shadow-md sm:w-1/2 lg:w-1/3">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green" />
              <h3 className="mb-2 text-primary-200">Persönliche Einführung & Support</h3>
              <p>
                Unser Team begleitet Sie mit individuellen Onboardings, Schulungen und wöchentlichen Check-ins. So stellen wir
                sicher, dass Ihr Team schnell produktiv arbeiten kann.
              </p>
            </div>
            <div className="w-full rounded-sm bg-primary/10 p-8 text-center text-white shadow-md sm:w-1/2 lg:w-1/3">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green" />
              <h3 className="mb-2 text-primary-200">Exklusive Vorteile für Pionier:innen</h3>
              <p>
                Early Access-Partner:innen erhalten bevorzugten Zugang zu neuen KI-Agenten, spezielle Konditionen und eine
                direkte Produkt-Roadmap für zukünftige Funktionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-900">So läuft der Early Access ab</h2>
          <div className="space-y-4">
            <details className="group rounded-md border border-blue-200 bg-white p-4 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-blue-900">
                1. Kick-off & Zieldefinition
                <span className="text-blue-900 transition-transform duration-300 group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 space-y-2 text-base text-gray-700">
                <p>
                  Wir lernen Ihr Team kennen, vermitteln einen strukturierten Überblick über Ebliq und seine Funktionsweise und definieren gemeinsam die Ziele der Early-Access-Phase - einschließlich der Use Cases, die im Mittelpunkt stehen sollen.
                </p>
              </div>
            </details>
            <details className="group rounded-md border border-blue-200 bg-white p-4 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-blue-900">
                2. Einsatz im Arbeitsalltag
                <span className="text-blue-900 transition-transform duration-300 group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 space-y-2 text-base text-gray-700">
                <p>
                  Wir begleiten Ihr Team bei der Einführung von Ebliq in den täglichen Arbeitsablauf, schulen die Mitarbeitenden und unterstützen die ersten praktischen Anwendungen. So stellen wir sicher, dass alle Beteiligten sicher und souverän mit den KI-Agenten arbeiten.
                </p>
              </div>
            </details>
            <details className="group rounded-md border border-blue-200 bg-white p-4 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-blue-900">
                3. Iteration & Abschluss
                <span className="text-blue-900 transition-transform duration-300 group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 space-y-2 text-base text-gray-700">
                <p>
                  Wir erfassen kontinuierlich Ihr Feedback, priorisieren und setzen Verbesserungen um, die anschließend direkt nutzbar sind. Im anschließenden Abschlussgespräch reflektieren wir die Ergebnisse der Early-Access-Phase und vereinbaren, wie die Zusammenarbeit im weiteren Verlauf fortgeführt werden soll.
                </p>
              </div>
            </details>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-center">
            {ctaButtonStart}
            {ctaButtonMeeting}
          </div>
        </div>
      </section>
    </>
  );
}

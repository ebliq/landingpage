import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="py-20 px-4 rounded-lg text-center">
        <div className=" max-w-2xl mx-auto">
          <h1 className="secondary-heading">Über uns</h1>
          <h2 className="mb-12">
            Lernen Sie unser Team und unsere Vision kennen
          </h2>
          <p className="mb-4">
            Wir sind ein engagiertes Team von Experten, das sich der
            Revolutionierung des Gesundheitswesens durch innovative
            Technologielösungen verschrieben hat. Unsere Mission ist es, die
            Patientenversorgung zu verbessern und die Arbeitsabläufe für
            medizinisches Fachpersonal zu optimieren.
          </p>
          <p className="">
            Bei Ebliq glauben wir an die Kraft der Zusammenarbeit und des
            kontinuierlichen Lernens, um zukunftssichere und benutzerfreundliche
            Produkte zu entwickeln, die den höchsten Standards an Sicherheit und
            Compliance entsprechen.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-br from-50% from-primary-900 to-secondary-900 py-12 px-4 shadow-md mt-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Unsere Gründer
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-primary/10 text-white rounded-sm shadow-md p-8 w-full sm:w-1/2 lg:w-1/3 text-center">
              <Link
                href="https://www.linkedin.com/in/maximilianhaensel/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/maxh.jpg" // Replace with actual path
                  alt="Max Hänsel"
                  width={240}
                  height={240}
                  className="rounded-full mx-auto mb-4"
                />
              </Link>
              <h3 className="text-xl font-semibold mb-2">
                <Link
                  href="https://www.linkedin.com/in/maximilianhaensel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  Max Hänsel
                </Link>
              </h3>
              <p className="text-muted-foreground">Mitgründer</p>
            </div>

            <div className="bg-primary/10 text-white rounded-sm shadow-md p-8 w-full sm:w-1/2 lg:w-1/3 text-center">
              <Link
                href="https://www.linkedin.com/in/ddppham/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/phillipp.jpg" // Replace with actual path
                  alt="Phillip Pham"
                  width={240}
                  height={240}
                  className="rounded-full mx-auto mb-4"
                />
              </Link>
              <h3 className="text-xl font-semibold mb-2">
                <Link
                  href="https://www.linkedin.com/in/ddppham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  Phillip Pham
                </Link>
              </h3>
              <p className="text-muted-foreground">Mitgründer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 mt-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Karrieremöglichkeiten bei Ebliq
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Job 1: Software Engineer */}
            <details className="group">
              <summary className="">
                Software Engineer
                <span className="text-blue-900 group-open:rotate-180 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pb-4 space-y-3">
                <h4 className="">Über die Rolle</h4>
                <p>
                  Als Software Engineer bei Ebliq bist Du maßgeblich an der
                  Entwicklung und Wartung unserer innovativen
                  Gesundheitsplattform beteiligt. Du arbeitest in einem agilen
                  Team an der Konzeption, Implementierung und Optimierung von
                  Softwarelösungen, die einen echten Unterschied im Leben von
                  Patienten und medizinischem Fachpersonal machen.
                </p>
                <h4 className="">Unser Ansatz</h4>
                <p>
                  Wir setzen auf moderne Technologien und agile
                  Entwicklungsmethoden. Clean Code, Test-Driven Development und
                  Continuous Integration/Continuous Deployment (CI/CD) sind für
                  uns selbstverständlich. Du hast die Möglichkeit, mit
                  Technologien wie TypeScript, React, Node.js, GraphQL und
                  Cloud-Plattformen zu arbeiten.
                </p>
                <h4 className="">
                  Verantwortlichkeiten
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Entwicklung und Implementierung von Backend- und
                    Frontend-Komponenten.
                  </li>
                  <li>Design und Wartung von Datenbanken und APIs.</li>
                  <li>
                    Sicherstellung der Codequalität durch Tests und Code
                    Reviews.
                  </li>
                  <li>
                    Zusammenarbeit mit Produktmanagern, Designern und anderen
                    Entwicklern.
                  </li>
                  <li>
                    Beitrag zur technischen Architektur und Technologieauswahl.
                  </li>
                </ul>
                <h4 className="">Über Dich</h4>
                <p>
                  Du bist ein leidenschaftlicher Entwickler mit einem Auge fürs
                  Detail und einem starken Wunsch, hochwertige Software zu
                  schaffen. Du bist teamfähig, kommunikativ und bringst eine
                  proaktive Can-Do-Einstellung mit. Du lernst gerne Neues und
                  teilst Dein Wissen mit Kollegen.
                </p>
                <h4 className="">Qualifikationen</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Abgeschlossenes Studium der Informatik oder eine
                    vergleichbare Qualifikation.
                  </li>
                  <li>
                    Mehrjährige Berufserfahrung in der Softwareentwicklung.
                  </li>
                  <li>
                    Fundierte Kenntnisse in modernen Webtechnologien (z.B.
                    TypeScript, React, Node.js).
                  </li>
                  <li>Erfahrung mit Datenbanken (SQL/NoSQL).</li>
                  <li>
                    Kenntnisse in Cloud-Technologien (AWS, Azure, GCP) sind von
                    Vorteil.
                  </li>
                  <li>Fließende Deutsch- und gute Englischkenntnisse.</li>
                </ul>
              </div>
            </details>

            {/* Job 2: AI Engineer */}
            <details className="group">
              <summary className="">
                AI Engineer
                <span className="text-blue-900 group-open:rotate-180 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pb-4 space-y-3">
                <h4 className="">Über die Rolle</h4>
                <p>
                  Als AI Engineer bei Ebliq spielst Du eine Schlüsselrolle bei
                  der Entwicklung und Implementierung von KI-gestützten
                  Lösungen, die das Gesundheitswesen revolutionieren. Du
                  arbeitest an der Schnittstelle von Datenwissenschaft,
                  Softwareentwicklung und Medizin, um intelligente Systeme zur
                  Verbesserung von Diagnosen, Behandlungen und Arbeitsabläufen
                  zu schaffen.
                </p>
                <h4 className="">Unser Ansatz</h4>
                <p>
                  Wir nutzen modernste Machine-Learning- und
                  Deep-Learning-Techniken, um aus komplexen medizinischen Daten
                  wertvolle Erkenntnisse zu gewinnen. Unser Fokus liegt auf der
                  Entwicklung robuster, erklärbarer und ethisch
                  verantwortungsvoller KI-Modelle. Du arbeitest eng mit
                  medizinischen Experten und Softwareentwicklern zusammen.
                </p>
                <h4 className="">
                  Verantwortlichkeiten
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Entwicklung, Training und Validierung von KI/ML-Modellen.
                  </li>
                  <li>
                    Aufbereitung und Analyse großer medizinischer Datensätze.
                  </li>
                  <li>
                    Implementierung und Integration von KI-Modellen in unsere
                    Produkte.
                  </li>
                  <li>
                    Bewertung und Auswahl geeigneter KI-Algorithmen und
                    Frameworks.
                  </li>
                  <li>
                    Zusammenarbeit mit interdisziplinären Teams zur Definition
                    von Anforderungen.
                  </li>
                  <li>
                    Kontinuierliche Beobachtung von Trends und Fortschritten im
                    Bereich KI im Gesundheitswesen.
                  </li>
                </ul>
                <h4 className="">Über Dich</h4>
                <p>
                  Du bist fasziniert von den Möglichkeiten der Künstlichen
                  Intelligenz und möchtest Dein Wissen im Gesundheitsbereich
                  anwenden. Du besitzt starke analytische Fähigkeiten, bist
                  kreativ in der Lösungsfindung und arbeitest gerne im Team. Du
                  bist motiviert, anspruchsvolle Probleme zu lösen und
                  innovative Produkte zu entwickeln.
                </p>
                <h4 className="">Qualifikationen</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Abgeschlossenes Studium in Informatik, Data Science,
                    Mathematik oder einem verwandten Fachgebiet (Master oder
                    Promotion bevorzugt).
                  </li>
                  <li>
                    Nachgewiesene Erfahrung in der Entwicklung und Anwendung von
                    KI/ML-Modellen.
                  </li>
                  <li>
                    Sehr gute Programmierkenntnisse (z.B. Python) und Erfahrung
                    mit ML-Frameworks (z.B. TensorFlow, PyTorch, scikit-learn).
                  </li>
                  <li>Erfahrung mit Datenverarbeitung und -analyse.</li>
                  <li>
                    Kenntnisse im Bereich medizinischer Daten oder
                    Gesundheitsinformatik sind ein großes Plus.
                  </li>
                  <li>Fließende Deutsch- und gute Englischkenntnisse.</li>
                </ul>
              </div>
            </details>

            {/* Job 3: Doctor with AI Experience */}
            <details className="group">
              <summary className="">
                Arzt/Ärztin mit KI-Erfahrung
                <span className="text-blue-900 group-open:rotate-180 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pb-4 space-y-3">
                <h4 className="">Über die Rolle</h4>
                <p>
                  Als Arzt/Ärztin mit KI-Erfahrung bei Ebliq bist Du die
                  entscheidende Brücke zwischen medizinischer Praxis und
                  technologischer Innovation. Du bringst Deine klinische
                  Expertise ein, um sicherzustellen, dass unsere KI-Lösungen
                  klinisch relevant, sicher und effektiv sind und den
                  Bedürfnissen von Ärzten und Patienten entsprechen.
                </p>
                <h4 className="">Unser Ansatz</h4>
                <p>
                  Wir glauben, dass die besten digitalen Gesundheitslösungen
                  durch die enge Zusammenarbeit von Medizinern und Technologen
                  entstehen. Du arbeitest Hand in Hand mit unseren AI Engineers
                  und Softwareentwicklern, um Anwendungsfälle zu definieren,
                  Daten zu interpretieren und die Validierung unserer Produkte
                  zu begleiten.
                </p>
                <h4 className="">
                  Verantwortlichkeiten
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Bereitstellung medizinischer Expertise für die Entwicklung
                    von KI-Modellen.
                  </li>
                  <li>
                    Definition klinischer Anforderungen und Anwendungsfälle für
                    KI-Lösungen.
                  </li>
                  <li>
                    Unterstützung bei der Annotation und Interpretation
                    medizinischer Daten.
                  </li>
                  <li>
                    Planung und Begleitung klinischer Validierungsstudien.
                  </li>
                  <li>
                    Sicherstellung der Einhaltung medizinischer Standards und
                    Regularien.
                  </li>
                  <li>
                    Kommunikation mit medizinischen Fachkreisen und
                    Stakeholdern.
                  </li>
                </ul>
                <h4 className="">Über Dich</h4>
                <p>
                  Du bist approbierte/r Arzt/Ärztin mit einem starken Interesse
                  an digitalen Technologien und Künstlicher Intelligenz im
                  Gesundheitswesen. Du bist neugierig, wie Technologie die
                  Medizin verbessern kann, und möchtest aktiv an dieser
                  Transformation mitwirken. Du bist kommunikationsstark und
                  kannst komplexe medizinische Sachverhalte verständlich
                  erklären.
                </p>
                <h4 className="">Qualifikationen</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Abgeschlossenes Medizinstudium und Approbation.</li>
                  <li>Klinische Erfahrung in einem relevanten Fachgebiet.</li>
                  <li>
                    Nachweisbares Interesse oder Erfahrung im Bereich Digital
                    Health / KI im Gesundheitswesen.
                  </li>
                  <li>
                    Grundlegendes Verständnis von KI/ML-Konzepten ist von
                    Vorteil.
                  </li>
                  <li>Fähigkeit zur interdisziplinären Zusammenarbeit.</li>
                  <li>Sehr gute Deutsch- und gute Englischkenntnisse.</li>
                </ul>
              </div>
            </details>

            {/* Job 4: UX/UI Designer */}
            <details className="group">
              <summary className="">
                UX/UI Designer
                <span className="text-blue-900 group-open:rotate-180 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pb-4 space-y-3">
                <h4 className="">Über die Rolle</h4>
                <p>
                  Als UX/UI Designer bei Ebliq bist Du verantwortlich für die
                  Gestaltung intuitiver, benutzerfreundlicher und ästhetisch
                  ansprechender Oberflächen für unsere digitalen
                  Gesundheitsprodukte. Du stellst sicher, dass unsere
                  Anwendungen den Bedürfnissen von Ärzten, medizinischem
                  Personal und Patienten optimal entsprechen und eine exzellente
                  User Experience bieten.
                </p>
                <h4 className="">Unser Ansatz</h4>
                <p>
                  Wir verfolgen einen nutzerzentrierten Designprozess, der User
                  Research, Prototyping und iteratives Testing umfasst. Du
                  arbeitest eng mit Produktmanagern, Entwicklern und
                  medizinischen Experten zusammen, um komplexe Anforderungen in
                  elegante und effektive Designlösungen zu übersetzen. Wir legen
                  Wert auf konsistente Designsysteme und Barrierefreiheit.
                </p>
                <h4 className="">
                  Verantwortlichkeiten
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Durchführung von User Research (Interviews, Umfragen,
                    Usability-Tests).
                  </li>
                  <li>
                    Erstellung von User Personas, User Flows, Wireframes und
                    interaktiven Prototypen.
                  </li>
                  <li>
                    Entwicklung von hochwertigen UI-Designs und Design-Systemen.
                  </li>
                  <li>
                    Enge Zusammenarbeit mit dem Entwicklungsteam zur
                    Sicherstellung der Designumsetzung.
                  </li>
                  <li>
                    Kontinuierliche Verbesserung der User Experience basierend
                    auf Nutzerfeedback und Datenanalyse.
                  </li>
                  <li>Präsentation von Designkonzepten vor Stakeholdern.</li>
                </ul>
                <h4 className="">Über Dich</h4>
                <p>
                  Du hast eine Leidenschaft für großartiges Design und ein
                  tiefes Verständnis für Nutzerbedürfnisse, insbesondere im
                  Kontext komplexer Anwendungen. Du bist kreativ,
                  detailorientiert und besitzt exzellente
                  Kommunikationsfähigkeiten. Du kannst Designentscheidungen
                  fundiert begründen und arbeitest gerne kollaborativ im Team.
                </p>
                <h4 className="">Qualifikationen</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Abgeschlossenes Studium im Bereich Design (UX/UI,
                    Interaktion, Kommunikation) oder eine vergleichbare
                    Qualifikation.
                  </li>
                  <li>
                    Mehrjährige Berufserfahrung als UX/UI Designer, idealerweise
                    im Bereich Software oder digitale Produkte.
                  </li>
                  <li>
                    Starkes Portfolio, das Deine Designfähigkeiten und Deinen
                    Designprozess demonstriert.
                  </li>
                  <li>
                    Sicherer Umgang mit gängigen Design- und Prototyping-Tools
                    (z.B. Figma, Sketch, Adobe XD).
                  </li>
                  <li>
                    Erfahrung im Design für Web- und/oder mobile Anwendungen.
                  </li>
                  <li>
                    Erfahrung im Gesundheitswesen oder mit regulierten Produkten
                    ist von Vorteil.
                  </li>
                  <li>Gute Deutsch- und Englischkenntnisse.</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}

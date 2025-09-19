import Image from "next/image";
export default function Page() {
  return (
    <>
      <section className="py-20 px-4 rounded-lg text-center">
        <div className=" max-w-2xl mx-auto">
          <h1 className="font-light text-3xl text-primary">
            Sicherheit
          </h1>
          <h2 className="mb-12">
            Ihr verlässlicher Partner für Sicherheit, Compliance und
            zukunftssichere Innovationen im Gesundheitswesen
          </h2>
          <p className="mb-4">
            Sicherheit steht bei Ebliq im Mittelpunkt – nicht als nachträgliche
            Maßnahme, sondern als Grundprinzip. Unsere durchdachten Prozesse
            schützen deine Daten, wahren die Privatsphäre deines Workspaces und
            sorgen für höchste Informationsgenauigkeit.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-50% from-primary-900 to-secondary-900 py-12 px-4 shadow-md mt-8">
        <div className=" max-w-6xl mx-auto">
          <h1 className="font-medium text-white">Governance</h1>
          <h2 className="text-primary-100">
            Als Ihr Partner im Gesundheitswesen legt Ebliq höchsten Wert auf
            Datenschutz und Informationssicherheit. Wir wissen, wie wichtig der
            verantwortungsvolle Umgang mit sensiblen Patientendaten ist – gerade
            im ärztlichen Alltag.
          </h2>
          <p className="text-white">
            Deshalb setzen wir auf robuste, medizinisch geprüfte
            Sicherheitsprotokolle, die regelmäßig durch unabhängige Stellen
            evaluiert werden. Unsere Systeme entsprechen allen relevanten
            gesetzlichen Vorgaben, wie der DSGVO. So können Sie sich auf das
            Wesentliche konzentrieren – Ihre Patientinnen und Patienten –
            während wir für eine sichere digitale Infrastruktur sorgen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Box 1 */}
            <div className="bg-primary/10 p-6 rounded-sm shadow-md flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-primary-100 text-xl mb-2">
                Gezielter Datenzugriff
              </h3>
              <p className="text-white text-sm">
                Bei Ebliq gilt das Prinzip der minimalen Rechtevergabe: Der
                Zugriff auf medizinische Daten ist streng auf autorisiertes
                Fachpersonal beschränkt und wird fortlaufend überwacht. So
                stellen wir sicher, dass Patientendaten nur von den Personen
                eingesehen werden, die sie tatsächlich benötigen.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-primary/10 p-6 rounded-sm shadow-md flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-primary-100 text-xl mb-2">
                Mehrschichtige Sicherheitsarchitektur
              </h3>
              <p className="text-white text-sm">
                Wir setzen auf eine tiefgreifende, mehrschichtige
                Sicherheitsstrategie, die kritische Systeme auf mehreren Ebenen
                schützt. Sollte es dennoch zu einem Zwischenfall kommen, sorgen
                Backup-Kontrollen und Notfallmechanismen für zusätzliche
                Absicherung.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-primary/10 p-6 rounded-sm shadow-md flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-primary-100 text-xl mb-2">
                Einheitliche Sicherheitsstandards
              </h3>
              <p className="text-white text-sm">
                Unsere Schutzmaßnahmen sind nicht punktuell, sondern werden in
                allen Bereichen konsistent angewendet – vom Frontend bis zur
                Infrastruktur. So gewährleisten wir eine gleichbleibend hohe
                Sicherheit gegen externe und interne Bedrohungen.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-primary/10 p-6 rounded-sm shadow-md flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-primary-100 text-xl mb-2">
                Kontinuierliche Weiterentwicklung
              </h3>
              <p className="text-white text-sm">
                Die digitale Bedrohungslage verändert sich ständig – und wir
                reagieren entsprechend. Unsere Sicherheitskontrollen werden
                kontinuierlich evaluiert, angepasst und erweitert, um jederzeit
                ein hohes Schutzniveau für Ihre Patientendaten zu gewährleisten.
              </p>
            </div>
          </div>
          <h1 className="font-medium text-white mb-4 mt-12">
            Prüfungen und Zertifizierungen
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Box 1 */}
            <div className="bg-primary/10 p-6 rounded-sm shadow-md flex flex-col items-start text-left">
              <Image
                src={"/gdpr-logo.svg"}
                alt="DSGVO Logo"
                width={50} // Replace with actual width if known
                height={50} // Replace with actual height if known
                className="mb-4" // Add some margin below the image
              />
              <span className="text-primary-100 text-lg font-semibold mb-2">
                DSGVO-konform
              </span>
              <p className="text-white text-sm">
                Wir schützen deine Daten durch sichere Verarbeitung und bieten
                Mechanismen zur Ausübung der DSGVO-Rechte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 rounded-md">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Placeholder */}
          <div className="aspect-square rounded-sm relative overflow-hidden">
            <Image
              src="/privacy.png"
              alt="Data Protection Illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="text-left">
            <h2 className="text-4xl mb-6">
              <span className="">Wie wir Ihre </span>
              <span className="text-primary-700">Daten schützen</span>
            </h2>
            <h3 className=" mb-6">
              <strong>
                Sicherheitsmaßnahmen von Ebliq für den medizinischen Alltag
              </strong>
            </h3>
            <p className=" mb-8">
              Bei <strong className="text-primary-700">Ebliq</strong> steht der
              Schutz sensibler Gesundheitsdaten an oberster Stelle. Deshalb
              setzen wir auf ein umfassendes Sicherheitskonzept, das speziell
              auf die Anforderungen im Gesundheitswesen zugeschnitten ist:
            </p>
            <ul className="space-y-4 list-disc ml-4">
              <li>
                <strong>Datenminimierung mit Verantwortung:</strong> Wir
                speichern z.b. keine Audiodaten – alle Informationen werden nur
                so lange gespeichert, wie es für die ärztliche Dokumentation
                erforderlich ist.
              </li>
              <li>
                <strong>Ende-zu-Ende-Verschlüsselung:</strong> Sowohl bei der
                Übertragung als auch bei der Speicherung werden alle Daten durch
                moderne Verschlüsselungsstandards (z.B. AES-256, TLS 1.2+)
                geschützt.
              </li>
              <li>
                <strong>Regelmäßige Sicherheitsprüfungen:</strong> Unsere
                Systeme werden kontinuierlich durch externe Penetrationstests
                und interne Schwachstellenanalysen geprüft und optimiert.
              </li>
              <li>
                <strong>Sichere Cloud-Infrastruktur:</strong> Wir arbeiten
                ausschließlich mit vertrauenswürdigen Hosting-Partnern wie
                Microsoft Azure und Amazon Web Services, die höchste
                Sicherheitsstandards garantieren.
              </li>
              <li>
                <strong>Geschultes Fachpersonal:</strong> Alle Mitarbeitenden,
                die mit Gesundheitsdaten in Berührung kommen, erhalten
                regelmäßige Schulungen zu Datenschutz, Datensicherheit und
                verantwortungsvoller Verarbeitung.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

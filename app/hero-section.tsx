import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircleIcon, LucideImagePlay } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full lg:h-screen">
      <Image
        src="/hero_doc.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full z-0 object-left lg:object-center"
      />

      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="max-w-2xl px-6 py-12 md:py-0">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-4">
            Medizin neu denken:{" "}
            <span className="bg-gradient-to-r from-blue-600  to-fuchsia-700 bg-clip-text text-transparent">
              Künstliche Intelligenz
            </span>{" "}
            die Ärzte entlastet.
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Mit KI-gestützter Analyse bringt unsere App <br />
            Effizienz in jede Praxis: Schnelle Anamnese,
            <br /> lückenlose Dokumentation, optimale <br />
            Patientenversorgung.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button
              variant={"default"}
              className={`h-12 gap-2 bg-blue-600 text-white hover:bg-blue-700`}
              asChild
            >
              <a href="https://app.ebliq.de/sign-up?redirect_url=https%3A%2F%2Fapp.ebliq.de%2F">
                <LucideImagePlay className="h-5 w-5" />
                Jetzt kostenlos Testen
              </a>
            </Button>

            <Button
              variant="ghost"
              className={`h-12 gap-2 hover:text-blue-600`}
              asChild
            >
              <a
                href="https://www.loom.com/share/40697f79eb1340d686eec6638283ba03?sid=82f9a33c-ca62-489d-bfdd-71fecd220b5d"
                className="flex items-center"
              >
                <PlayCircleIcon className="h-8 w-8" />
                <div className="flex flex-col items-start">
                  <span>Demo anschauen</span>
                  <span className="text-xs text-muted-foreground">
                    schau dir an, wie es funktioniert
                  </span>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

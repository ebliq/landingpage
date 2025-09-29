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
        <div className="max-w-2xl md:px-6 py-12 lg:py-0">
          <h1 className="text-3xl leading-[1.1] sm:text-5xl sm:leading-[1.1] xl:text-6xl xl:leading-[1.1]">
            Medizin neu denken:<br/>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 
              Künstliche Intelligenz</span><br/> die Ärzte entlastet.
          </h1>
          <p className="text-xl md:text-2xl my-10">
            Mit KI-gestützter Analyse bringt unsere App 
            Effizienz in jede Praxis: Schnelle Anamnese,
            lückenlose Dokumentation, optimale 
            Patientenversorgung.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button
              variant={"default"}
              size={"lg"}
              asChild
            >
              <a href="https://app.Ebliq.de/sign-up?redirect_url=https%3A%2F%2Fapp.Ebliq.de%2F">
                <LucideImagePlay className="h-5 w-5 mr-3" />
                Jetzt kostenlos testen
              </a>
            </Button>
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
                  <span className="font-semibold">Demo anschauen</span>
                  <span className="text-sm">
                    Schau dir an, wie es funktioniert
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

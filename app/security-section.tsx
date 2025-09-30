import {
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SecuritySection() {
  return (
    <section className="shadow-xl py-12 bg-green/5 shadow-xl"  id="security">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid gap-16 grid-cols-6 items-center">
          <div className="col-span-2 text-2xl grid gap-2 font-medium text-center">
            <ShieldCheck size="200" strokeWidth="1" className="text-green" />
          </div>

          <div className="max-w-3xl mx-auto col-span-4">
            <h2 className="mt-0">
              Sicherheit ohne Kompromisse
            </h2>
            <div className="font-light text-2xl">
              <p>Ihre Daten in sicheren Händen - 100 % DSGVO-konform, KV-konform und durchgängig verschlüsselt.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className=""><Check className="mr-2 text-green" size="15" strokeWidth={5} />DSGVO-konform</Badge>
                <Badge className=""><Check className="mr-2 text-green" size="15" strokeWidth={5} />KV-konform</Badge>
                <Badge className=""><Check className="mr-2 text-green" size="15" strokeWidth={5} />kein KI-Training mit Praxis-Daten</Badge>
                <Badge className=""><Check className="mr-2 text-green" size="15" strokeWidth={5} />Verschlüsselung</Badge>
                <Badge className=""><Check className="mr-2 text-green" size="15" strokeWidth={5} />zertifizierte EU-Cloud</Badge>
              </div>
            </div>

            <Button variant="default" className="mt-6" asChild>
              <a href="/privacy" >
                Mehr zu Datenschutz & Sicherheit
                <ArrowRight className="ml-8" size="20" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

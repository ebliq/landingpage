import {
  Cpu,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TechSection() {
  return (
    <section className="py-12 bg-primary/5 shadow-md"  id="tech">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid gap-16 sm:grid-cols-6 items-center">
          <div className="md:max-w-3xl mx-6 sm:mx-auto sm:col-span-4">
            <h2 className="mt-0">
              Innovative Technologie, praxistauglich gemacht
            </h2>
            <div className="font-light text-2xl">              
              <div className="my-6 flex flex-wrap gap-2">
                <Badge variant="primary" size="lg" className="">Marktführende LLMs</Badge>
                <Badge variant="primary" size="lg" className="">Multimodale KI</Badge>
                <Badge variant="primary" size="lg" className="">RAG-Kontext</Badge>
                <Badge variant="primary" size="lg" className="">KI-Chatbot</Badge>
                <Badge variant="primary" size="lg" className="">offene Standards (HL7/FIHR)</Badge>
                <Badge variant="primary" size="lg" className="">Intuitive Bedienung</Badge>
                <Badge variant="primary" size="lg" className="">API-fähig</Badge>
                <Badge variant="primary" size="lg" className="">MultiDevice-PWA</Badge>
                <Badge variant="primary" size="lg" className="">Sichere EU-Cloud</Badge>
                <Badge variant="primary" size="lg" className="">Browser-only</Badge>
              </div>
              <p>So leistungsstark wie Ihr Lieblings-KI-Tool - jedoch speziell für Ihren Praxisalltag. Sie möchten es ganz genau wissen? Sprechen Sie uns an!</p>
            </div>
          </div>
          <div className="col-span-2 text-2xl grid gap-2 font-medium text-center hidden sm:block">
            <Cpu size="200" strokeWidth="1" className="text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

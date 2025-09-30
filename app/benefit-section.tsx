import {
  Stethoscope,
  ShieldCheck,
  Check,
  ClockArrowUp,
  Smile
} from "lucide-react";
import {
  List,
  ListItem,
} from "@/components/typography/typography";

export default function BenefitSection() {
  return (
    <section className="relative w-full shadow-xl" id="benefits">
      <div className="max-w-6xl mx-6 md:mx-auto relative py-10 md:py-20">
        
        <div className="grid gap-6 md:gap-16 md:grid-cols-2">
          <div className="max-w-3xl mx-auto col-span-1">
            <h2 className="mt-0 mb-6 md:mb-12">
              Zeit sparen, Fehler vermeiden, Patientenversorgung verbessern
            </h2>
            <p className="font-light md:text-2xl">
              Ebliq ist die KI-Suite für den Gesundheitsalltag. Ob in Praxis, Hausbesuch oder Team - Ebliq dokumentiert, denkt mit und schafft Zeit für das Wesentliche: die Patientenversorgung.
            </p>
          </div>
          <List className="col-span-1 md:text-2xl grid gap-2 font-medium">
            <ListItem className="flex flex-row items-center">
              <ClockArrowUp strokeWidth="1" size="40" className="text-secondary mr-2 shrink-0" />
              <span className="basis-8/10">Schneller dokumentieren - bis zu 2 Std./Tag sparen</span>
            </ListItem>
            <ListItem className="flex flex-row items-center">
              <Stethoscope strokeWidth="1" size="40" className="text-secondary mr-2 shrink-0" />
              <span>Bessere Behandlungen durch volle Behandlungs-Fokussierung</span>
            </ListItem>
            <ListItem className="flex flex-row items-center">
              <Smile strokeWidth="1" size="40" className="text-secondary mr-2 shrink-0" />
              <span>Mehr Patient:innen-Zufriedenheit dank weniger Fehler & besserer Erreichbarkeit</span>
            </ListItem>
            <ListItem className="flex flex-row items-center">
              <Check strokeWidth="1" size="40" className="text-secondary mr-2 shrink-0" />
              <span>Einfach integrierbar - ohne IT-Aufwand</span>
            </ListItem>
            <ListItem className="flex flex-row items-center">
              <ShieldCheck strokeWidth="1" size="40" className="text-secondary mr-2 shrink-0" />
              <span>Sicher & DSGVO-konform</span>
            </ListItem>
          </List>
        </div>
      </div>
    </section>
  );
}

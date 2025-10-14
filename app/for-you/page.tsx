import Link from "next/link";

import { CircleChevronRight } from "lucide-react";
import { Paragraph } from "../../components/typography/typography";

export default function Page() {
  return (
    <>
      <section className="py-20 px-4 rounded-lg text-center">
        <div className=" max-w-2xl mx-auto">
          <h1 className="font-light text-3xl text-primary">Für Sie</h1>
          <h2 className="mb-12">
            Für wen wir Ebliq geschaffen haben?
          </h2>
          <Paragraph>Spezialisierte KI-Helfer, die Ihren Alltag einfacher, sicherer und effizienter machen.</Paragraph>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 lg:px-6py-20 px-4">
        <Link className="flex justify-between items-center my-8" href="/for-you/doctors">
          <div>
              <h3 className="">für Ärzt:innen</h3>
              <p className="">Mehr Zeit für Patient:innen</p>
          </div>
          <CircleChevronRight strokeWidth="1" className="w-[40px] h-[40px] text-primary"/>
        </Link>

        <Link className="flex justify-between items-center my-8" href="/for-you/midwifes">
          <div>
              <h3>für Hebammen</h3>
              <p>Mobile Betreuung ohne Papierkram</p>
          </div>
          <CircleChevronRight strokeWidth="1" className="w-[40px] h-[40px] text-primary"/>
        </Link>

        {/*
        <Link className="flex justify-between items-center my-8" href="/for-you/officeteams">
          <div>
              <h3>für Praxisteams</h3>
              <p>Weniger Klicks, mehr erledigt</p>
          </div>
          <CircleChevronRight strokeWidth="1" className="w-[40px] h-[40px] text-primary"/>
        </Link>
        */}

      </section> 
    </>
  );
}

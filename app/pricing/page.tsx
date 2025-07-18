import { SmallPricingModule } from "@/components/pricing/small-pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "Welche Zahlungsmethoden akzeptieren Sie?",
    answer:
      "Wir akzeptieren alle gängigen Kreditkarten (Visa, Mastercard, American Express) und PayPal für unsere kostenpflichtigen Pläne.",
  },
  {
    question: "Gibt es eine kostenlose Version?",
    answer:
      "Ja, wir bieten eine kostenlose Version an, die dauerhaft kostenlos ist. Diese Version hat ein begrenztes Nutzungskontingent, eignet sich aber hervorragend, um unsere Kernfunktionen kennenzulernen.",
  },
  {
    question: "Kann ich mein Abonnement jederzeit kündigen?",
    answer:
      "Ja, Sie können Ihr kostenpflichtiges Abonnement jederzeit über Ihre Kontoeinstellungen kündigen. Ihr Zugang bleibt bis zum Ende des aktuellen Abrechnungszeitraums aktiv.",
  },
  {
    question: "Was ist ein Anamnesegespräch?",
    answer:
      "Ein Anamnesegespräch ist ein Gespräch zwischen Arzt und Patient, bei dem der Arzt die Krankengeschichte des Patienten erhebt. Unsere Software unterstützt Sie bei der strukturierten Erfassung.",
  },
  {
    question: "Was ist ein Arztbrief?",
    answer:
      "Ein Arztbrief ist ein schriftlicher Bericht eines Arztes über die Untersuchung, Diagnose und Behandlung eines Patienten. Unsere Software hilft Ihnen, diese effizient zu erstellen.",
  },
  {
    question: "Was ist ein PDF-Import?",
    answer:
      "Mit dem PDF-Import können Sie vorhandene medizinische Dokumente im PDF-Format einfach in unser System hochladen und die relevanten Informationen extrahieren und integrieren.",
  },
];

export default function Page() {
  return (
    <>
      <SmallPricingModule />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {questions.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

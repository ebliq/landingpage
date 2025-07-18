// features: [
//   "10 PDF mit KI imporiteren",
//   "5 Anamnesegespräche mit ~3 min länge",
//   "5 Arztbrief geneieren",
// ],

export const plans = [
  {
    name: "Einsteiger",
    description: "Ideal für den Start und kleinere Praxen.",
    priceTag: "€",
    price: "69,-",
    priceAddon: "/ Monatlich",
    features: [
      "100 PDF mit KI imporiteren",
      "50 Anamnesegespräche mit ~10-15 min Länge",
      "50 Arztbriefe generieren",
    ],
    popular: false,
  },
  {
    name: "Profi",
    description: "Für etablierte Praxen mit höherem Bedarf.",
    priceTag: "€",
    price: "279,-",
    priceAddon: "/ Monatlich",
    features: [
      "500 PDF mit KI imporiteren",
      "250 Anamnesegespräche mit ~10-15 min Länge",
      "250 Arztbriefe generieren",
    ],
    popular: true,
  },
  {
    name: "Business",
    description:
      "Individuell auf Ihre Bedürfnisse zugeschnitten. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.",
    priceTag: "",
    price: "Individuell",
    priceAddon: "",
    features: [
      "PDF-Importe, Anamnesegespräche und Arztbriefe nach Vereinbarung",
      "Alle Funktionen enhalten und keine Limits",
      "Persönlicher Ansprechpartner",
    ],
    popular: false,
  },
];

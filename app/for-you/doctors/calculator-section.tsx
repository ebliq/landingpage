"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Rocket, Phone, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/components/utils";

const WEEKS_PER_MONTH = 4;

const PRACTICE_DAYS_RANGE = { min: 1, max: 6 } as const;
const HOURLY_RATE_RANGE = { min: 100, max: 200 } as const;
const DOCTOR_RANGE = { min: 1, max: 50 } as const;
const ANAMNESE_RANGE = { min: 1, max: 35 } as const;

const MATURITY_LEVELS = [
  {
    value: 1,
    title: "Papierbasierte Praxis",
    description: "Handschriftliche Abläufe, kaum digitale Unterstützung.",
  },
  {
    value: 2,
    title: "Praxis mit digitalen Inseln",
    description: "Einzelne Tools, aber keine durchgängigen digitalen Workflows.",
  },
  {
    value: 3,
    title: "Praxis mit KIS/PIS",
    description: "Digitale Akte vorhanden, Dokumentation teils noch analog.",
  },
  {
    value: 4,
    title: "Integrierte Digitalpraxis",
    description: "Vernetzte Systeme, Prozesse überwiegend digitalisiert.",
  },
  {
    value: 5,
    title: "Smarte Praxis",
    description: "Digital, vernetzt und (teil-) automatisiert - KI wird individuell genutzt.",
  },
] as const;

type Step = {
  duration: number;
  durationWithEbliq: number;
  errorProbability: number;
  errorProbabilityWithEbliq: number;
  correctionTime: number;
  correctionTimeWithEbliq: number;
};

type ProcessMatrix = Record<(typeof MATURITY_LEVELS)[number]["value"], Step[]>;

const PROCESS_MATRIX: ProcessMatrix = {
  1: [
    {
      duration: 3,
      durationWithEbliq: 1,
      errorProbability: 0.03,
      errorProbabilityWithEbliq: 0.002,
      correctionTime: 10,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 2,
      durationWithEbliq: 1,
      errorProbability: 0.05,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 10,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 12,
      durationWithEbliq: 10,
      errorProbability: 0.08,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 15,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 4,
      durationWithEbliq: 1,
      errorProbability: 0.1,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 15,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 1,
      durationWithEbliq: 0.5,
      errorProbability: 0.03,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 10,
      correctionTimeWithEbliq: 2,
    },
  ],
  2: [
    {
      duration: 2.5,
      durationWithEbliq: 1,
      errorProbability: 0.025,
      errorProbabilityWithEbliq: 0.002,
      correctionTime: 8,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 2,
      durationWithEbliq: 1,
      errorProbability: 0.04,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 8,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 11.5,
      durationWithEbliq: 10,
      errorProbability: 0.07,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 12,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 4.5,
      durationWithEbliq: 1,
      errorProbability: 0.09,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 12,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 1,
      durationWithEbliq: 0.5,
      errorProbability: 0.03,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 8,
      correctionTimeWithEbliq: 2,
    },
  ],
  3: [
    {
      duration: 1,
      durationWithEbliq: 1,
      errorProbability: 0.005,
      errorProbabilityWithEbliq: 0.002,
      correctionTime: 5,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 1.5,
      durationWithEbliq: 0.5,
      errorProbability: 0.03,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 5,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 10,
      durationWithEbliq: 10,
      errorProbability: 0.05,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 10,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 5,
      durationWithEbliq: 1,
      errorProbability: 0.05,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 8,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 1,
      durationWithEbliq: 0.5,
      errorProbability: 0.02,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 5,
      correctionTimeWithEbliq: 2,
    },
  ],
  4: [
    {
      duration: 0.8,
      durationWithEbliq: 0.8,
      errorProbability: 0.003,
      errorProbabilityWithEbliq: 0.002,
      correctionTime: 4,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 1,
      durationWithEbliq: 0.5,
      errorProbability: 0.02,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 4,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 10,
      durationWithEbliq: 10,
      errorProbability: 0.03,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 8,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 4,
      durationWithEbliq: 1,
      errorProbability: 0.03,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 6,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 0.8,
      durationWithEbliq: 0.5,
      errorProbability: 0.015,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 4,
      correctionTimeWithEbliq: 2,
    },
  ],
  5: [
    {
      duration: 0.5,
      durationWithEbliq: 0.5,
      errorProbability: 0.002,
      errorProbabilityWithEbliq: 0.002,
      correctionTime: 3,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 0.8,
      durationWithEbliq: 0.5,
      errorProbability: 0.015,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 3,
      correctionTimeWithEbliq: 2,
    },
    {
      duration: 9,
      durationWithEbliq: 9,
      errorProbability: 0.02,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 6,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 3,
      durationWithEbliq: 1,
      errorProbability: 0.02,
      errorProbabilityWithEbliq: 0.01,
      correctionTime: 5,
      correctionTimeWithEbliq: 5,
    },
    {
      duration: 0.5,
      durationWithEbliq: 0.5,
      errorProbability: 0.01,
      errorProbabilityWithEbliq: 0.005,
      correctionTime: 3,
      correctionTimeWithEbliq: 2,
    },
  ],
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.ceil(Math.max(0, value)));

const formatHours = (value: number) => `${Math.max(0, Math.ceil(value))} Std.`;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function CalculatorSection() {
  const [doctors, setDoctors] = useState<number>(3);
  const [anamnesesPerDay, setAnamnesesPerDay] = useState<number>(10);
  const [maturityLevel, setMaturityLevel] = useState<number>(2);
  const [practiceDays, setPracticeDays] = useState<number>(4);
  const [hourlyRate, setHourlyRate] = useState<number>(115);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const results = useMemo(() => {
    const steps = PROCESS_MATRIX[maturityLevel];

    const totalPerAnamnesis = steps.reduce((total, step) => {
      return (
        total +
        step.duration +
        step.errorProbability * step.correctionTime
      );
    }, 0);

    const totalPerAnamnesisWithEbliq = steps.reduce((total, step) => {
      return (
        total +
        step.durationWithEbliq +
        step.errorProbabilityWithEbliq * step.correctionTimeWithEbliq
      );
    }, 0);

    const anamnesesPerMonthPerDoctor =
      anamnesesPerDay * practiceDays * WEEKS_PER_MONTH;

    const totalHours = (totalPerAnamnesis * anamnesesPerMonthPerDoctor) / 60;
    const totalHoursWithEbliq =
      (totalPerAnamnesisWithEbliq * anamnesesPerMonthPerDoctor) / 60;

    const totalHoursAllDoctors = totalHours * doctors;
    const totalHoursWithEbliqAllDoctors = totalHoursWithEbliq * doctors;

    const timeSavingsHours = totalHoursAllDoctors - totalHoursWithEbliqAllDoctors;

    const totalCost = totalHoursAllDoctors * hourlyRate;
    const totalCostWithEbliq = totalHoursWithEbliqAllDoctors * hourlyRate;
    const costSavings = totalCost - totalCostWithEbliq;

    const efficiencyGain = totalHoursAllDoctors
      ? Math.max(0, (timeSavingsHours / totalHoursAllDoctors) * 100)
      : 0;

    return {
      totalHours: totalHoursAllDoctors,
      totalHoursWithEbliq: totalHoursWithEbliqAllDoctors,
      timeSavingsHours,
      totalCost,
      totalCostWithEbliq,
      costSavings,
      efficiencyGain,
    };
  }, [
    anamnesesPerDay,
    hourlyRate,
    maturityLevel,
    practiceDays,
    doctors,
  ]);

  const totalTimeSavedPerMonth = results.timeSavingsHours;
  const totalCostSavedPerMonth = results.costSavings;
  const efficiencyGainPercent = Math.max(0, Math.ceil(results.efficiencyGain));

  return (
    <>
      <section className="px-6 lg:px-8 py-12 md:py-20 bg-primary-50 shadow-inner">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl text-primary-800 mt-0">
              Ersparnis-Kalkulator: so viel Zeit & Geld können Sie sparen.
            </h2>
            <p className="text-base md:text-lg text-primary-600 mt-2">
              Einfach Teamgröße, Anamnesen und Reifegrad wählen - und sie sehen sofort Ihr Potential.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-8">
              <div className="rounded-sm border border-primary-200 bg-white p-6 shadow-sm">
                <div className="space-y-8">
                  <div className="mb-12">
                    <div className="flex items-center justify-between">
                      <label htmlFor="doctors" className="text-xl font-semibold text-primary">
                        Anzahl der Ärzt:innen
                      </label>
                      <span className="text-4xl font-semibold text-primary-900">
                        {doctors}
                      </span>
                    </div>
                    <input
                      id="doctors"
                      type="range"
                      min={DOCTOR_RANGE.min}
                      max={DOCTOR_RANGE.max}
                      value={doctors}
                      onChange={(event) =>
                        setDoctors(Number(event.target.value))
                      }
                      className="calculator-slider mt-4 h-3 w-full cursor-pointer appearance-none rounded-full bg-secondary-100"
                    />
                  </div>

                  <div className="mb-12">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="anamneses"
                        className="text-xl font-semibold text-primary"
                      >
                        Anamnesen pro Tag je Arzt
                      </label>
                      <span className="text-3xl font-semibold text-primary-900">
                        {anamnesesPerDay}
                      </span>
                    </div>
                    <input
                      id="anamneses"
                      type="range"
                      min={ANAMNESE_RANGE.min}
                      max={ANAMNESE_RANGE.max}
                      value={anamnesesPerDay}
                      onChange={(event) =>
                        setAnamnesesPerDay(Number(event.target.value))
                      }
                      className="calculator-slider mt-4 h-3 w-full cursor-pointer appearance-none rounded-full bg-secondary-100"
                    />
                  </div>

                  <div>
                    <p className="text-xl font-semibold text-primary mb-3">
                      Wie schätzen Sie den Digitalisierungs-Grad ihrer Praxis ein?
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {MATURITY_LEVELS.map((level) => {
                        const isActive = level.value === maturityLevel;
                        return (
                          <button
                            key={level.value}
                            type="button"
                            onClick={() => setMaturityLevel(level.value)}
                            className={cn(
                              "rounded-lg border bg-white p-4 text-left transition-shadow",
                              isActive
                                ? "border-primary-500 shadow-md"
                                : "border-primary-100 hover:border-primary-300 hover:shadow-sm",
                            )}
                          >
                            <span className="block text-sm font-semibold text-primary-800">
                              Stufe {level.value}: {level.title}
                            </span>
                            <span className="mt-1 block text-sm text-primary-600">
                              {level.description}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="">
                    <button
                      type="button"
                      onClick={() => setShowAdvanced((previous) => !previous)}
                      className="inline-flex items-center gap-2 text-sm transition-colors hover:text-secondary-500"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          showAdvanced ? "rotate-180" : "",
                        )}
                      />
                      {showAdvanced
                        ? "Erweiterte Einstellungen ausblenden"
                        : "Erweiterte Einstellungen anzeigen"}
                    </button>

                    {showAdvanced && (
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="practice-days"
                            className="text-sm font-medium text-primary-700"
                          >
                            Praxistage pro Woche
                          </label>
                          <input
                            id="practice-days"
                            type="number"
                            inputMode="numeric"
                            min={PRACTICE_DAYS_RANGE.min}
                            max={PRACTICE_DAYS_RANGE.max}
                            value={practiceDays}
                            onChange={(event) =>
                              setPracticeDays(
                                clamp(
                                  Number(event.target.value),
                                  PRACTICE_DAYS_RANGE.min,
                                  PRACTICE_DAYS_RANGE.max,
                                ),
                              )
                            }
                            className="w-28 rounded-md border border-primary-200 bg-white px-3 py-2 text-sm"
                          />
                          <span className="text-xs text-muted">
                            Standard: 4 Tage | Wertebereich {PRACTICE_DAYS_RANGE.min}–
                            {PRACTICE_DAYS_RANGE.max}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="hourly-rate"
                            className="text-sm font-medium text-primary-700"
                          >
                            Kalkulatorischer Stundensatz (EUR)
                          </label>
                          <input
                            id="hourly-rate"
                            type="number"
                            inputMode="numeric"
                            min={HOURLY_RATE_RANGE.min}
                            max={HOURLY_RATE_RANGE.max}
                            value={hourlyRate}
                            onChange={(event) =>
                              setHourlyRate(
                                clamp(
                                  Number(event.target.value),
                                  HOURLY_RATE_RANGE.min,
                                  HOURLY_RATE_RANGE.max,
                                ),
                              )
                            }
                            className="w-36 rounded-md border border-primary-200 bg-white px-3 py-2 text-sm"
                          />
                          <span className="text-xs text-muted">
                            Standard: 115 € | Wertebereich {HOURLY_RATE_RANGE.min}–
                            {HOURLY_RATE_RANGE.max} €
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:pl-4">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-0">
                  Ihr Spar-Potential:
                </h3>
                <span className="text-sm">(pro Monat, gesamtes Team)</span>
                <div className="mt-8 space-y-6">
                  <div>
                    <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-green-600">
                      <span className="text-3xl font-bold">
                        {formatHours(totalTimeSavedPerMonth)} - {efficiencyGainPercent}%
                      </span>
                      <span className="text-sm font-semibold tracking-wide text-green-700">
                        Zeitersparnis
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-primary-600">
                      Verglichen mit Ihrem Status quo für Anamnese & Dokumentation.
                    </p>
                  </div>

                  <div>
                    <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-green-600">
                      <span className="text-3xl font-bold">
                        {formatCurrency(totalCostSavedPerMonth)}
                      </span>
                      <span className="text-sm font-semibold tracking-wide text-green-700">
                        Eingesparte Personalkosten
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-primary-600">
                      Berechnung basiert auf Ihrem kalkulatorischen Stundensatz.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl font-bold text-black mt-12">
                  Glauben Sie nicht? <br/>Haben wir zuerst auch nicht...
                </p>
                <p>
                  Testen Sie kostenfrei oder vereinbaren Sie einen Termin. Wir überzeugen Sie gern!
                </p>
                <div className="mt-4">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                    className="flex-1 min-w-[180px]"
                  >
                    <a href="https://app.Ebliq.de/sign-up?redirect_url=https%3A%2F%2Fapp.Ebliq.de%2F">
                      <span className="flex items-center justify-center">
                        <Rocket className="mr-2 h-5 w-5" /> Kostenlos ausprobieren
                      </span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 min-w-[180px] mt-6"
                  >
                    <Link
                      href="https://calendly.com/max-oseven/30min"
                      target="_blank"
                      className="flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-5 w-5" /> Termin vereinbaren
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .calculator-slider {
          accent-color: #A23D8E;
        }

        .calculator-slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          margin-top: -6px;
          border-radius: 9999px;
          background: #A23D8E;
          border: 5px solid #F9F0F8;
          box-shadow: 0 0 0 1px rgba(162, 61, 142, 0.25);
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .calculator-slider::-webkit-slider-thumb:hover {
          transform: scale(1.08);
          box-shadow: 0 0 0 6px rgba(162, 61, 142, 0.12);
        }

        .calculator-slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 9999px;
          background: #A23D8E;
          border: 5px solid #F9F0F8;
          box-shadow: 0 0 0 1px rgba(162, 61, 142, 0.25);
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .calculator-slider::-moz-range-thumb:hover {
          transform: scale(1.08);
          box-shadow: 0 0 0 6px rgba(162, 61, 142, 0.12);
        }

        .calculator-slider::-webkit-slider-runnable-track {
          height: 12px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #F1DAEC 0%, #A23D8E 100%);
        }

        .calculator-slider::-moz-range-track {
          height: 12px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #F1DAEC 0%, #A23D8E 100%);
        }
      `}</style>
    </>
  );
}

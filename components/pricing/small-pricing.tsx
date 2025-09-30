"use client";

import { Check } from "lucide-react";
import { useState } from "react"; // Import useState

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/components/utils";
import { plans } from "./data";
import Link from "next/link";

export function SmallPricingModule() {
  // State to track the active plan, defaulting to the popular one
  const [activePlan, setActivePlan] = useState<string | null>(
    plans.find((p) => p.popular)?.name || null
  );

  // Function to handle plan selection (optional, but good practice)
  const handleSelectPlan = (planName: string) => {
    setActivePlan(planName);
  };

  return (
    <section className="py-16 px-4 relative shadow-lg">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="">
            Wähle den Plan der zu dir passt
          </h2>
          <p className="max-w-3xl mx-auto">
            Wir bieten flexible Preismodelle, die auf Ihre Bedürfnisse
            zugeschnitten sind. Finden Sie den perfekten Plan, um Ihre Ziele zu
            erreichen, egal ob Sie gerade erst anfangen oder Ihr Geschäft
            skalieren möchten.
          </p>
        </div>

        {/* Free Tier Card - Consider making it selectable too if needed */}
        <div className="mb-12 max-w-2xl mx-auto text-center p-6 border border-secondary-200 bg-secondary-50 rounded-sm shadow-sm">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="mb-4">
              <h3 className="">kostenlose Testversion</h3>
              <p className="">
                Nutzen Sie unsere Kernfunktionen kostenfrei.
              </p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-5xl font-bold">0 €</span>
                <span className="text-muted-foreground ml-2">/ monatlich</span>
              </div>
            </div>
            <div className="mb-6">
              <ul className="space-y-4 text-left inline-block">
                {[
                  "10 PDF mit KI auswerten",
                  "5 Anamnesegespräche mit ~3 min länge",
                  "5 Arztbriefe generieren",
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-7 w-7 text-green mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Button
              variant={"secondary"}
              className="w-full text-md md:text-xl w-1/2"
              size="lg"
              onClick={() => handleSelectPlan("")} // Example selection
            >
              <Link
                href={
                  "https://app.Ebliq.de/sign-in?redirect_url=https%3A%2F%2Fapp.Ebliq.de%2F"
                }
              >
                Kostenlos starten
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-20 mb-10">
          {plans.map((plan) => {
            const isActive = activePlan === plan.name; // Check if this plan is active
            return (
              <Card
                onClick={() => handleSelectPlan(plan.name)}
                key={plan.name}
                className={cn(
                  "relative border border-card bg-card-foreground rounded-sm overflow-hidden bg-primary-50 flex flex-col transition-all duration-300",
                  // Apply blue border and shadow if active
                  isActive ? " border border-primary-700 shadow-lg" : "shadow-sm", // Use default border color otherwise
                  // Keep shadow for popular even if not active (optional)
                  plan.popular ? "md:m-[-1.5rem] bg-primary-100 z-50" : "z-100"
                )}
                // Optional: Add onClick to make cards selectable
                // onClick={() => setActivePlan(plan.name)}
              >
                {plan.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="text-white font-medium bg-gray-600 px-2 py-1 rounded-md text-sm">
                      Meist gewählt
                    </span>
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-3xl text-primary-700">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">{plan.priceTag}</span>
                    <span className="text-5xl font-bold ml-2">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.priceAddon}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-7 w-7 text-green mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={isActive ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    <Link
                      href={"https://calendly.com/max-oseven/30min"}
                      // Use primary variant if active, otherwise outline
                      // variant={}

                      //
                    >
                      Plan wählen
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

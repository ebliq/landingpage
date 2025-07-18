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
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Wähle den Plan der zu dir passt
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Wir bieten flexible Preismodelle, die auf Ihre Bedürfnisse
            zugeschnitten sind. Finden Sie den perfekten Plan, um Ihre Ziele zu
            erreichen, egal ob Sie gerade erst anfangen oder Ihr Geschäft
            skalieren möchten.
          </p>
        </div>

        {/* Free Tier Card - Consider making it selectable too if needed */}
        <div className="mb-12 max-w-md mx-auto text-center p-6 border rounded-lg">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Free Tier</h3>
            <p className="text-muted-foreground">
              Testen Sie unsere Kernfunktionen kostenlos.
            </p>
          </div>
          <div className="mb-6">
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-5xl font-bold">0€</span>
              <span className="text-muted-foreground ml-2">/ Monat</span>
            </div>
            <ul className="space-y-4 text-left inline-block">
              {[
                "10 PDF mit KI imporiteren",
                "5 Anamnesegespräche mit ~3 min länge",
                "5 Arztbrief geneieren",
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button
              variant={"outline"}
              className={cn("w-full py-6 hover:bg-blue-600 hover:text-white")}
              onClick={() => handleSelectPlan("")} // Example selection
            >
              <Link
                href={
                  "https://app.ebliq.de/sign-in?redirect_url=https%3A%2F%2Fapp.ebliq.de%2F"
                }
              >
                Kostenlos starten
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const isActive = activePlan === plan.name; // Check if this plan is active
            return (
              <Card
                onClick={() => handleSelectPlan(plan.name)}
                key={plan.name}
                className={cn(
                  "relative border rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300",
                  // Apply blue border and shadow if active
                  isActive ? "border-blue-500 shadow-xl" : "border-border", // Use default border color otherwise
                  // Keep shadow for popular even if not active (optional)
                  !isActive ? "shadow-lg" : ""
                )}
                // Optional: Add onClick to make cards selectable
                // onClick={() => setActivePlan(plan.name)}
              >
                {plan.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="text-primary font-medium bg-background px-2 py-1 rounded text-sm">
                      Meist gewählt
                    </span>
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
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
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={isActive ? "default" : "outline"}
                    className={cn(
                      "w-full py-6",
                      isActive
                        ? "bg-blue-600 hover:bg-blue-700 text-white" // Style for active button
                        : "hover:bg-accent hover:text-accent-foreground" // Style for non-active button
                    )}
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

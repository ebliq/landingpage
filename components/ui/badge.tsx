import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border border-primary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary-100 text-foreground shadow hover:bg-primary-100/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
        primary:
          "border-transparent bg-primary text-primary-50 hover:bg-primary/90 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        secondary:
          "border-transparent bg-secondary text-secondary-50 hover:bg-secondary/90 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        transparent:
          "text-primary-800 bg-primary-100/30 border-transparent",
        destructive:
          "border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
        outline: "text-primary-700 dark:text-white",
      },
      size: {
        default:
          "text-xs",
        lg:
          "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

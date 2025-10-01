import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-full bg-primary text-white transition duration-300 hover:bg-primary-700 hover:text-primary-100",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "rounded-full ring-2 bg-none text-primary transition duration-300 hover:bg-primary-700 hover:text-primary-100 hover:ring-0",
        outlineinvers: "rounded-full ring-2 ring-primary-200 bg-none text-primary-200 transition duration-300 hover:bg-primary-100/30 hover:text-primary-50 hover:ring-0",
        secondary: "rounded-full bg-secondary text-secondary-50 transition duration-300 hover:bg-secondary-700",
        ghost: "rounded-full hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-15 px-4 md:px-8 py-2 text-base lg:text-lg",
        xxl: "h-15 px-6 py-2 md:h-22 md:px-12 md:py-6 text-lg md:text-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

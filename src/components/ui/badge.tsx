
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        success: "border-transparent bg-green-500 text-white",
        warning: "border-transparent bg-yellow-500 text-white",
        info: "border-transparent bg-blue-500 text-white",
        purple: "border-transparent bg-purple-500 text-white",
        pink: "border-transparent bg-pink-500 text-white",
        orange: "border-transparent bg-orange-500 text-white",
        indigo: "border-transparent bg-indigo-500 text-white",
        teal: "border-transparent bg-teal-500 text-white",
        cyan: "border-transparent bg-cyan-500 text-white",
        lime: "border-transparent bg-lime-500 text-white",
        amber: "border-transparent bg-amber-500 text-white",
        emerald: "border-transparent bg-emerald-500 text-white",
        sky: "border-transparent bg-sky-500 text-white",
        rose: "border-transparent bg-rose-500 text-white",
        fuchsia: "border-transparent bg-fuchsia-500 text-white",
        gradient: "border-transparent bg-gradient-to-r from-blue-500 to-teal-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

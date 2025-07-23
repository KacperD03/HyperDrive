"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-pink-700 text-white hover:bg-pink-900",
        secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
        ghost: "bg-transparent hover:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

type MotionButtonProps = React.ComponentPropsWithoutRef<typeof motion.button> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode
  }

export function Button({
  className,
  variant,
  size,
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      {...props}
    />
  )
}


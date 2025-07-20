"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export default function CarDialog({
  trigger,
  title,
  description,
}: {
  trigger: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-[90%] max-w-md p-6">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
            <Dialog.Close>
              <X className="w-5 h-5 hover:text-red-500" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-gray-600 dark:text-gray-300">
            {description}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

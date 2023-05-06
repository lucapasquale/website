'use client'

import React from 'react'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'

export type SelectProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function Select({
  placeholder,
  value,
  onChange,
  children,
}: React.PropsWithChildren<SelectProps>) {
  return (
    <RadixSelect.Root value={value} onValueChange={onChange}>
      <RadixSelect.Trigger className="flex items-center gap-4 rounded-md px-3 py-1 border border-gray-600 dark:border-gray-400">
        <RadixSelect.Value placeholder={placeholder} />

        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal className="z-50">
        <RadixSelect.Content
          position="popper"
          className=" p-1 shadow-lg bg-white dark:bg-gray-900 animate-in fade-in-80"
        >
          <RadixSelect.ScrollUpButton>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export type SelectOptionProps = {
  value: string
}

export const SelectOption = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SelectOptionProps>
>(function r({ value, children }, ref) {
  return (
    <RadixSelect.Item
      ref={ref}
      value={value}
      className="flex items-center justify-between gap-2 py-1 px-3 outline-none rounded-md select-none data-[highlighted]:bg-blue-300 dark:data-[highlighted]:bg-blue-700"
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>

      <RadixSelect.ItemIndicator>
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
})

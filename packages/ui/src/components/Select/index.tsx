'use client'

import React from 'react'
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'

export type SelectProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  renderValue?: (value: string | null) => React.ReactNode
}

export function Select({
  placeholder,
  value,
  onChange,
  renderValue = (value) => value,
  children,
}: React.PropsWithChildren<SelectProps>) {
  return (
    <RadixSelect.Root value={value} onValueChange={onChange}>
      <RadixSelect.Trigger className="flex items-center gap-4 rounded-md px-3 py-1 border border-gray-600 dark:border-gray-400">
        <RadixSelect.Value placeholder={placeholder}>{renderValue(value)}</RadixSelect.Value>

        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal className="z-50">
        <RadixSelect.Content
          position="popper"
          align="center"
          className=" p-1 shadow-lg border border-gray-600 dark:border-gray-400 bg-white dark:bg-gray-900"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export type SelectOptionProps = {
  value: string
}

export const SelectOption = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  React.PropsWithChildren<SelectOptionProps>
>(({ value, children }, ref) => {
  return (
    <RadixSelect.Item asChild ref={ref} value={value}>
      <option className="flex items-center justify-between gap-2 py-1 px-3 outline-none rounded-md select-none data-[highlighted]:bg-blue-300 dark:data-[highlighted]:bg-blue-700">
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>

        <RadixSelect.ItemIndicator asChild>
          <CheckIcon />
        </RadixSelect.ItemIndicator>
      </option>
    </RadixSelect.Item>
  )
})
SelectOption.displayName = 'SelectOption'

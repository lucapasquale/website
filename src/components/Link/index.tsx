import React from "react";
import { twMerge } from "tailwind-merge";
import { Link as TanstackLink } from "@tanstack/react-router";

type Props = React.ComponentProps<typeof TanstackLink> & { children: React.ReactNode };

export function Link({ children, className, ...props }: Props) {
  const ieExternal = props.to?.startsWith("http");

  if (ieExternal) {
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        href={props.to}
        className={twMerge("transition-colors text-blue-500 hover:text-blue-400", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <TanstackLink
      {...props}
      className={twMerge("transition-colors text-blue-500 hover:text-blue-400", className)}
    >
      {children}
    </TanstackLink>
  );
}

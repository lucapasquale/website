import { twMerge } from "tailwind-merge";

export type Technology =
  | "csharp"
  | "elixir"
  | "typescript"
  | "react"
  | "nextjs"
  | "vite"
  | "apollo"
  | "nestjs"
  | "tailwind"
  | "unity"
  | "graphql"
  | "postgresql";

const TECHNOLOGY_CLASSES: Record<Technology, string> = {
  elixir: "text-gray-100 bg-[#6e4a7e]",
  csharp: "text-gray-100 bg-[#178600]",
  typescript: "text-gray-100 bg-[#2b7489]",

  unity: "text-gray-100 bg-[#222c37]",
  apollo: "text-gray-100 bg-[#7156d9]",
  nestjs: "text-gray-100 bg-[#e0234e]",
  nextjs: "text-gray-100 bg-[#111]",
  vite: "text-gray-100 bg-[#a879e6]",
  tailwind: "text-gray-900 bg-[#06b6d4]",
  react: "text-gray-900 bg-[#61dafb]",

  graphql: "text-gray-100 bg-[#e10098]",
  postgresql: "text-gray-100 bg-[#0064a5]",
};

type Props = {
  technology: Technology;
};

export function TechnologyTag({ technology }: Props) {
  const techClasses = TECHNOLOGY_CLASSES[technology] ?? "";

  return (
    <span
      className={twMerge(
        "inline-block py-0.5 px-1 rounded text-sm uppercase font-bold",
        techClasses,
      )}
    >
      {technology}
    </span>
  );
}

export type Technology =
  | "csharp"
  | "elixir"
  | "typescript"
  | "react"
  | "nextjs"
  | "apollo"
  | "nestjs"
  | "tailwind"
  | "unity"
  | "graphql"
  | "postgresql";

const TECHNOLOGY_CLASSES: Record<Technology, string> = {
  elixir: "text-gray-200 bg-[#6e4a7e]",
  csharp: "text-[#fbfcff] bg-[#178600]",
  typescript: "text-[#edeff7] bg-[#2b7489]",

  unity: "text-gray-200 bg-[#222c37]",
  apollo: "text-[#eff1f5] bg-[#7156d9]",
  nestjs: "text-[#fdfeff] bg-[#e0234e]",
  nextjs: "text-gray-200 bg-[#111]",
  tailwind: "text-gray-800 bg-[#06b6d4]",
  react: "text-gray-800 bg-[#61dafb]",

  graphql: "text-[#edeff7] bg-[#e10098]",
  postgresql: "text-gray-200 bg-[#0064a5]",
};

type Props = {
  technology: Technology;
};

export function TechnologyTag({ technology }: Props) {
  const techClasses = TECHNOLOGY_CLASSES[technology] ?? "";

  return (
    <span className={`inline-block py-0.5 px-2 rounded text-sm uppercase font-bold ${techClasses}`}>
      {technology}
    </span>
  );
}

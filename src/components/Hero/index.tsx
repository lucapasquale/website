type Props = {
  title: string;
  subTitle: string;
};

export function Hero({ title, subTitle }: Props) {
  return (
    <header className="mb-12">
      <h1 className="pb-2 text-4xl font-bold">{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  );
}

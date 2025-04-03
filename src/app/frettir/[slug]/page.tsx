import { getFrettBySlug } from "@/lib/datocms";

type Frett = {
  title: string;
  content: string;
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function FrettPage({ params }: Props) {
  const frett: Frett | null = await getFrettBySlug(params.slug);

  if (!frett) {
    return (
      <main>
        <p>Frett fannst ekki!</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{frett.title}</h1>
      <p>{frett.content}</p>
    </main>
  );
}


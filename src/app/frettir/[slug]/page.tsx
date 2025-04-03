// @ts-nocheck

import { getFrettBySlug, Frett } from "@/lib/datocms";

export default async function FrettPage({ params }: { params: { slug: string } }) {
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

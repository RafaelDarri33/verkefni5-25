import { getAllFrettir } from "@/lib/datocms";

type Frett = {
  slug: string;
  title: string;
};

export default async function FrettirPage() {
  const frettir: Frett[] = await getAllFrettir();

  return (
    <main>
      <h1>Fréttir</h1>
      <ul>
        {frettir.map((frett: Frett) => (
          <li key={frett.slug}>
            <a href={`/frettir/${frett.slug}`}>{frett.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

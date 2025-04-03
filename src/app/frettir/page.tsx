import { getAllFrettir } from "@/lib/datocms";

export default async function FrettirPage() {
  const frettir = await getAllFrettir();

  return (
    <main>
      <h1>Fréttir</h1>
      <ul>
        {frettir.map((frett: any) => (
          <li key={frett.slug}>
            <a href={`/frettir/${frett.slug}`}>{frett.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

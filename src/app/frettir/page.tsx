import { getAllFrettir } from "@/lib/datocms";

type Frett = {
  slug: string;
  title: string;
};

export default async function FrettirPage() {
  let frettir: Frett[] = [];

  try {
    frettir = await getAllFrettir();
  } catch (error) {
    console.error("Villa við að sækja fréttir:", error);
  }

  return (
    <main>
      <h1>Fréttir</h1>
      {frettir.length > 0 ? (
        <ul>
          {frettir.map((frett) => (
            <li key={frett.slug}>
              <a href={`/frettir/${frett.slug}`}>{frett.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Engar fréttir fundust.</p>
      )}
    </main>
  );
}


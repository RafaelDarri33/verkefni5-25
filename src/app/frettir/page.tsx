import { getAllFrettir } from "@/lib/datocms";

type Frett = {
  slug: string;
  title: string;
};

export default async function FrettirPage() {
  let frettir: Frett[] = [];

  try {
    const result = await getAllFrettir();

    if (Array.isArray(result)) {
      frettir = result;
    } else {
      console.warn("getAllFrettir skilaði engu eða röngu");
    }
  } catch (error) {
    console.error("Villa við að sækja fréttir:", error);
  }

  return (
    <main>
      <h1>Fréttir</h1>
      {Array.isArray(frettir) && frettir.length > 0 ? (
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


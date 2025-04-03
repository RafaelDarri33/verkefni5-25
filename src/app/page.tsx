import { getHomePage } from "@/lib/datocms";
import type { HomePage } from "@/lib/datocms";

export default async function Home() {
  const homePage: HomePage | null = await getHomePage();

  if (!homePage) {
    return (
      <main>
        <h1>Forsíðan fannst ekki</h1>
        <p>Gakktu úr skugga um að þú hafir sett inn efni í DatoCMS.</p>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h1>{homePage.title}</h1>
        <div>
          {(homePage.content || "").split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </section>
    </main>
  );
}

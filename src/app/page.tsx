import { getHomePage } from "@/lib/datocms";

export default async function Home() {
  const homePage = await getHomePage();

  return (
    <main>
      <section>
        <h1>{homePage.title}</h1>
        <div>
          {homePage.content.split('\n').map((line: string, index: number) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </section>
    </main>
  );
}

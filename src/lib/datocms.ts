const API_URL = "https://graphql.datocms.com/";

export type HomePage = {
  title: string;
  content: string;
};

export type Frett = {
  title: string;
  content: string;
};

export type FrettPreview = {
  title: string;
  slug: string;
};

export async function getHomePage(): Promise<HomePage | null> {
  const query = `
    {
      homePage {
        title
        content
      }
    }
  `;

  const res = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const data = await res.json();

  // Þetta verndar
  if (!data?.data?.homePage) {
    return null;
  }

  return data.data.homePage;
}


export async function getAllFrettir(): Promise<FrettPreview[]> {
  const query = `
    {
      allFretts {
        title
        slug
      }
    }
  `;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.data.allFretts;
}

export async function getFrettBySlug(slug: string): Promise<Frett | null> {
  const query = `
    query FrettBySlug($slug: String) {
      frett(filter: {slug: {eq: $slug}}) {
        title
        content
      }
    }
  `;

  const variables = { slug };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const data = await res.json();

  if (!data.data.frett) return null;

  return data.data.frett;
}

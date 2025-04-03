const API_URL = "https://graphql.datocms.com/";

export async function getHomePage() {
  const query = `
    {
      homePage {
        title
        content
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
  return data.data.homePage;
}

export async function getAllFrettir() {
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

export async function getFrettBySlug(slug: string) {
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
  return data.data.frett;
}

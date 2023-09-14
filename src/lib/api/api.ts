// определяем Content-Type для JSON
import {redirect} from "next/navigation";

const headers = {'Content-Type': 'application/json'};

export const getPosts = async () => {
  // формируем GraphQL запрос
  const query = `
    query Test { 
      posts(first: 30) {
        nodes {
          date
          link
          slug
          excerpt
          title
          id
          categories(first: 5) {
            nodes {
              link
              name
            }
          }
          featuredImage {
            node {
              link
              altText
              mediaDetails {
                sizes(include: LARGE) {
                  file
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `

  // Первым аргументом метода fetch указываем GraphQL ендпоинт,
  // который мы определили в настройках CMS.
  // Второй аргумент - объект запроса.
  const res = await fetch('https://esports-24.ru/graphql', {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
    }),
    next: {
      revalidate: 10,
    }
  });

  // получаем JSON из объекта Promise<Response>
  const json = await res.json();

  // возвращаем посты
  return json.data?.posts.nodes;
}

export const getPost = async (slug: string | string[] | undefined) => {
  const query = `
    query SlugByPost {
      post(id: "${slug}", idType: SLUG) {
        title
        content
        excerpt
        slug
        featuredImage {
          node {
            link
            altText
            mediaDetails {
              sizes(include: LARGE) {
                file
                sourceUrl
              }
            }
          }
        }
      }
    }
  `

  const res = await fetch('https://esports-24.ru/graphql', {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
    }),
    next: {
      revalidate: 300,
    }
  });

  const json = await res.json();

  if (json.data?.post === null) {
    return redirect('/')
  }

  return json.data?.post;
}

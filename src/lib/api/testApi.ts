export async function getPosts() {

  // определяем Content-Type для JSON
  const headers = {'Content-Type': 'application/json'};

  // формируем GraphQL запрос
  const query = `
    query Test { 
      posts(first: 30) {
        nodes {
          date
          link
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
  });

  // получаем JSON из объекта Promise<Response>
  const json = await res.json();

  // возвращаем посты
  return json.data?.posts.nodes;
}

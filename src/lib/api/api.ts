// определяем Content-Type для JSON
import {redirect} from "next/navigation";

const headers = {'Content-Type': 'application/json'};

export const getPostsByCategory = async (category: string | string[] | undefined) => {
  const query = `
    query getPostsByCategory {
    posts(where: {categoryName: "${category}"}, first: 20) {
    nodes {
      date
      link
      slug
      title
      id
      excerpt
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
      revalidate: 30,
    }
  });

  // получаем JSON из объекта Promise<Response>
  const json = await res.json();


  // if (json.data?.posts.nodes.length === 0) {
  //   return redirect('/')
  // }

  // возвращаем посты
  return json.data?.posts.nodes;

}

export const getPosts = async () => {
  const query = `
    query Test { 
      posts(first: 80) {
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
      revalidate: 30,
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

  console.log('----------start------------')
  console.log(json.data?.post)
  console.log('----------end------------')

  if (json.data?.post === null) {
    return redirect('/')
  }

  return json.data?.post;
}

export const getPopularPosts = async () => {
  const query = `
    query MyQuery2 {
    posts(first: 10, where: {orderby: {field: COMMENT_COUNT, order: DESC}}) {
    nodes {
      date
      slug
      link
      title
      id
      categories(first: 5) {
        nodes {
          link
          name
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
      revalidate: 30,
    }
  });

  // получаем JSON из объекта Promise<Response>
  const json = await res.json();

  // возвращаем посты
  return json.data?.posts.nodes;

}

export const getPopularCfg = async () => {
  const query = `
    query PopularCfg {
    posts(first: 10, where: {orderby: {field: COMMENT_COUNT, order: DESC}, categoryName: "cs-cfg"}) {
    nodes {
      date
      link
      slug
      title
      id
      categories(first: 5) {
        nodes {
          link
          name
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
      revalidate: 30,
    }
  });

  // получаем JSON из объекта Promise<Response>
  const json = await res.json();

  // возвращаем посты
  return json.data?.posts.nodes;

}

export const getCategories = async () => {
  const query = `
  query getCategories {
    categories(first: 50) {
      nodes {
        slug
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
      revalidate: 9000,
    }
  });

  // получаем JSON из объекта Promise<Response>
  const json = await res.json();

  // возвращаем посты
  return json.data?.categories.nodes;
}

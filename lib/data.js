import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-west-2.hygraph.com/v2/clbfw1pne13az01t89cp12oh8/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(orderBy: createdAt_DESC) {
        title
        slug
        postTitle
        coverImage {
          url
          width
          height
        }
        date
        excerpt
        content {
          raw
        }
        author {
          name
          bio
          photo {
            url
            width
            height
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint =
    'https://api-us-west-2.hygraph.com/v2/clbfw1pne13az01t89cp12oh8/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        date
        slug
        excerpt
        postTitle
        coverImage {
          url
          width
          height
        }
        content {
          raw
        }
        author {
          name
          bio
          photo {
            url
            height
            width
          }
        }
      }
    }
  `

  const variables = {
    slug: slug,
  }

  return await graphQLClient.request(query, variables)
}

export const getPostsSlugs = async () => {
  const endpoint =
    'https://api-us-west-2.hygraph.com/v2/clbfw1pne13az01t89cp12oh8/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getRecentPosts = async () => {
  const endpoint =
    'https://api-us-west-2.hygraph.com/v2/clbfw1pne13az01t89cp12oh8/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
  query GetPostDetails() {
    posts(where: {slug_not: $slug}
      last: 3) {
        title
        url
      }
      createdAt
      slug
  }
  `
  return await graphQLClient.request(query)
}

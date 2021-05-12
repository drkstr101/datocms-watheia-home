import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../lib/apollo/client'

const PrincipalQuery = gql`
  query PrincipalQuery {
    principal {
      id
      name
      status
    }
  }
`

const Index = () => {
  const {
    data: { principal },
  } = useQuery(PrincipalQuery)

  return (
    <div>
      You&quot;re signed in as {principal.name} and you&quot;re{' '}
      {principal.status} goto{' '}
      <Link href="/about">
        <a>static</a>
      </Link>{' '}
      page.
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PrincipalQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index

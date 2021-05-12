import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { useApollo } from '../lib/apollo/client'

import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

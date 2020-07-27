import Head from 'next/head';

import Accounts from '../components/accounts';

export const RequestHeadersContext = React.createContext();

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>up-web</title>
      </Head>
      <RequestHeadersContext.Provider
        value={{
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_UP_API_TOKEN}`,
        }}
      >
        <Accounts />
      </RequestHeadersContext.Provider>
    </div>
  );
}

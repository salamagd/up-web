import { useEffect, useState } from 'react';
import Head from 'next/head';

import Account from '../components/account';

export default function Home(props) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_UP_API_TOKEN}`,
        },
      };
      const res = await fetch('https://api.up.com.au/api/v1/accounts', options);
      const accounts = await res.json();
      setAccounts(accounts.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>up-web</title>
      </Head>
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </div>
  );
}

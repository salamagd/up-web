import Head from 'next/head';

import Account from '../components/account';

export async function getServerSideProps() {
  const options = {
    headers: { Authorization: `Bearer ${process.env.UP_API_TOKEN}` },
  };
  const res = await fetch('https://api.up.com.au/api/v1/accounts', options);
  const accounts = await res.json();
  const accountsWithTransactions = await Promise.all(
    accounts.data.map((account) =>
      fetch(account.relationships.transactions.links.related, options)
        .then((res) => res.json())
        .then((transactions) => ({
          account,
          transactions: transactions.data,
        }))
    )
  );
  return { props: { accountsWithTransactions } };
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>up-web</title>
      </Head>
      {props.accountsWithTransactions.map((record) => (
        <Account account={record.account} transactions={record.transactions} />
      ))}
    </div>
  );
}

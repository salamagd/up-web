import { useEffect, useState } from 'react';

import Transactions from './transactions';
import styles from './account.module.css';

export default function Account(props) {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_UP_API_TOKEN}`,
        },
      };
      const res = await fetch(
        props.account.relationships.transactions.links.related,
        options
      );
      const transactions = await res.json();
      setTransactions(transactions.data);
    };
    fetchData();
  }, []);

  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  return (
    <div className={styles.outer}>
      <div className={styles.balance}>
        {formatter.format(
          props.account.attributes.balance.valueInBaseUnits / 100
        )}
      </div>
      <div className={styles.title}>{props.account.attributes.displayName}</div>
      {transactions ? <Transactions transactions={transactions} /> : null}
    </div>
  );
}

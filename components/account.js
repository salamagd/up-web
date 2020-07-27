import { useContext, useEffect, useState } from 'react';

import { RequestHeadersContext } from '../pages/index';
import Transactions from './transactions';
import styles from './account.module.css';

export default function Account(props) {
  const headers = useContext(RequestHeadersContext);
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const options = {headers};
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

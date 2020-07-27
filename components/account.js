import Transactions from './transactions';
import styles from './account.module.css';

export default function Account(props) {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  const {
    attributes: {
      displayName,
      balance: { valueInBaseUnits },
    },
    relationships: {
      transactions: {
        links: { related: transactionsURL },
      },
    },
  } = props.account;

  return (
    <div className={styles.outer}>
      <div className={styles.balance}>
        {formatter.format(valueInBaseUnits / 100)}
      </div>
      <div className={styles.title}>{displayName}</div>
      <Transactions url={transactionsURL} />
    </div>
  );
}

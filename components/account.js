import Transactions from './transactions';
import styles from './account.module.css';

export default function Account(props) {
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
      <Transactions
        url={props.account.relationships.transactions.links.related}
      />
    </div>
  );
}

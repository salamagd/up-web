import Transaction from './transaction';
import styles from './transactions.module.css';

export default function Transactions(props) {
  const transactionsByDate = props.transactions.reduce((map, transaction) => {
    const createdAt = new Date(transaction.attributes.createdAt);
    const dateString = createdAt.toLocaleDateString();
    transaction.timeString = createdAt.toLocaleTimeString([], {
      timeStyle: 'short',
    });
    if (!map[dateString]) {
      map[dateString] = [transaction];
    } else {
      map[dateString].push(transaction);
    }
    return map;
  }, Object.create(null));

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {Object.entries(transactionsByDate).map(
          ([dateString, transactions]) => (
            <>
              <div className={styles.date}>{dateString}</div>
              {transactions.map((transaction) => (
                <Transaction transaction={transaction} />
              ))}
            </>
          )
        )}
        {props.transactions.length === 0 ? (
          <div className={styles.empty}>nothing to see here! 💁</div>
        ) : null}
      </div>
    </div>
  );
}

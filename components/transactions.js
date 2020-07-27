import styles from './transactions.module.css';

export default function Transactions(props) {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {props.transactions.map((transaction) => {
          const createdAt = new Date(transaction.attributes.createdAt);
          return (
            <div className={styles.transaction}>
              <div className={styles.details}>
                <div className={styles.description}>
                  {transaction.attributes.description}
                </div>
                <div className={styles.message}>
                  {createdAt.toLocaleTimeString()}
                  {transaction.attributes.message
                    ? `, ${transaction.attributes.message}`
                    : null}
                </div>
              </div>
              <div
                className={
                  transaction.attributes.amount.valueInBaseUnits > 0
                    ? styles.amountPositive
                    : styles.amount
                }
              >
                {transaction.attributes.amount.valueInBaseUnits > 0
                  ? '+'
                  : null}
                {formatter.format(
                  Math.abs(transaction.attributes.amount.valueInBaseUnits / 100)
                )}
              </div>
            </div>
          );
        })}
        {props.transactions.length === 0 ? (
          <div className={styles.transaction}>
            <div className={styles.empty}>nothing to see here!</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

import styles from './transaction.module.css';

export default function Transaction(props) {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  return (
    <div
      className={
        props.last ? styles.transaction : styles.transactionBottomBorder
      }
    >
      <div className={styles.details}>
        <div className={styles.description}>
          {props.transaction.attributes.description}
        </div>
        <div className={styles.message}>
          {props.transaction.timeString}
          {props.transaction.attributes.message
            ? `, ${props.transaction.attributes.message}`
            : null}
        </div>
      </div>
      <div
        className={
          props.transaction.attributes.amount.valueInBaseUnits > 0
            ? styles.amountPositive
            : styles.amount
        }
      >
        {props.transaction.attributes.amount.valueInBaseUnits > 0 ? '+' : null}
        {formatter.format(
          Math.abs(props.transaction.attributes.amount.valueInBaseUnits / 100)
        )}
      </div>
    </div>
  );
}

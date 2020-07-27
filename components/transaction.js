import styles from './transaction.module.css';

export default function Transaction(props) {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  const {
    description,
    message,
    amount: { valueInBaseUnits },
  } = props.transaction.attributes;

  return (
    <div
      className={
        props.last
          ? styles.transaction
          : `${styles.transaction} ${styles.transactionBottomBorder}`
      }
    >
      <div className={styles.details}>
        <div>{description}</div>
        <div className={styles.message}>
          {props.timeString}
          {message ? `, ${message}` : null}
        </div>
      </div>
      <div className={valueInBaseUnits > 0 ? styles.amountPositive : null}>
        {valueInBaseUnits > 0 ? '+' : null}
        {formatter.format(Math.abs(valueInBaseUnits / 100))}
      </div>
    </div>
  );
}

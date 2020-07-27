import moment from 'moment';

import Transaction from './transaction';
import styles from './transactions.module.css';

export default function Transactions(props) {
  const transactionsByDate = props.transactions.reduce((map, transaction) => {
    const createdAt = moment(transaction.attributes.createdAt);
    const dateString = createdAt.format('ddd, D MMMM');
    transaction.timeString = createdAt.format('h:mma');
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
          ([dateString, transactions], index) => (
            <>
              <div className={index === 0 ? styles.dateFirst : styles.date}>
                {dateString}
              </div>
              {transactions.map((transaction, index) => (
                <Transaction
                  transaction={transaction}
                  last={index + 1 === transactions.length}
                />
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

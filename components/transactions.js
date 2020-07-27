import moment from 'moment';
import { groupBy } from 'lodash';

import Transaction from './transaction';
import styles from './transactions.module.css';

export default function Transactions(props) {
  const transactionsWithDates = props.transactions.map((transaction) => {
    const createdAt = moment(transaction.attributes.createdAt);
    const timeString = createdAt.format('h:mma');
    const dateString = createdAt.format('ddd, D MMMM yyyy');
    return { transaction, createdAt, timeString, dateString };
  });

  const transactionsByDate = groupBy(transactionsWithDates, 'dateString');

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {Object.entries(transactionsByDate).map(
          ([dateString, records], index) => (
            <React.Fragment key={dateString}>
              <div className={index === 0 ? styles.dateFirst : styles.date}>
                {dateString}
              </div>
              {records.map((record, index) => (
                <Transaction
                  key={record.transaction.id}
                  transaction={record.transaction}
                  timeString={record.timeString}
                  last={index + 1 === records.length}
                />
              ))}
            </React.Fragment>
          )
        )}
        {props.transactions.length === 0 ? (
          <div className={styles.empty}>nothing to see here! 💁</div>
        ) : null}
      </div>
    </div>
  );
}

import Transactions from './transactions';

export default function Account(props) {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  return (
    <div>
      <div>
        <b>
          {props.account.attributes.displayName}{' '}
          {formatter.format(
            props.account.attributes.balance.valueInBaseUnits / 100
          )}
        </b>
      </div>
      <Transactions transactions={props.transactions} />
      <div>&nbsp;</div>
    </div>
  );
}

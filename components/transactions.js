export default function Transactions(props) {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  return (
    <div>
      {props.transactions.map((transaction) => (
        <div>
          {transaction.attributes.description}{' '}
          {formatter.format(
            transaction.attributes.amount.valueInBaseUnits / 100
          )}
        </div>
      ))}
    </div>
  );
}

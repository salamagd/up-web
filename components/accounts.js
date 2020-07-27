import { useContext, useEffect, useState } from 'react';

import { RequestHeadersContext } from '../pages/index';
import Account from './account';

export default function Accounts(props) {
  const headers = useContext(RequestHeadersContext);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = { headers };
      const res = await fetch('https://api.up.com.au/api/v1/accounts', options);
      const accounts = await res.json();
      setAccounts(accounts.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </div>
  );
}

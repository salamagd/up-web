import { useContext, useEffect, useState } from 'react';

import { RequestHeadersContext } from '../pages/index';
import Account from './account';

const ACCOUNTS_URL = 'https://api.up.com.au/api/v1/accounts';

export default function Accounts(props) {
  const headers = useContext(RequestHeadersContext);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(ACCOUNTS_URL, { headers });
      const accounts = await res.json();
      setAccounts(accounts.data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </React.Fragment>
  );
}

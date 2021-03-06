# up-web

A demo app which can be used to view your Up Banking accounts and transactions in a web browser. Relies upon the [Up Banking API](https://developer.up.com.au/).

![up-web example screenshot](public/demo.png)

## Getting Started

First, grab your personal access token by [following the instructions on Up's Getting Started page](https://api.up.com.au/getting_started).

Then, run the development server, inserting your personal access token as the `NEXT_PUBLIC_UP_API_TOKEN` environment variable:

```bash
NEXT_PUBLIC_UP_API_TOKEN=up:yeah:your-token-here yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your accounts and transactions.

// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

// NEAR
import { CindakuContract } from './src/near-interface';
import { Wallet } from './src/near-wallet';

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })

// Abstract the logic of interacting with the contract to simplify your flow
const cindakuContract = new CindakuContract({ contractId: process.env.CONTRACT_NAME, walletToUse: wallet });

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp()
 
  ReactDOM.render(
    <App isSignedIn={isSignedIn} cindakuContract={cindakuContract} wallet={wallet} />,
    document.getElementById('root')
  );
}
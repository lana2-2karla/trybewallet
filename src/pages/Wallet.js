import React from 'react';
import Expenses from './Expenses';
import Header from './Header';
import Spending from './Spending';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Expenses />
        <Spending />

      </>

    );
  }
}

export default Wallet;

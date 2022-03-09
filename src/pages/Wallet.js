import React from 'react';
import Expenses from './Expenses';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Expenses />

      </>

    );
  }
}

export default Wallet;

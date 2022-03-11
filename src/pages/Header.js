import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const sunExpenses = () => {
      let sun = 0;
      if (expenses[0] !== undefined) {
        expenses.forEach(({ value, exchangeRates, currency }) => {
          (sun += value * exchangeRates[currency].ask);
        });
      }
      return sun;
    };
    return (
      <>
        <div>
          TrybeWallet
        </div>
        <div data-testid="email-field">
          Email:
          {email}
        </div>
        <div data-testid="total-field">
          {`Despesa Total R$ ${sunExpenses().toFixed(2)}`}
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};
export default connect(mapStateToProps)(Header);

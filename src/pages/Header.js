import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <>
        <div>
          TrybeWallet
        </div>
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          Despesa Total R$ 0
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
});
Header.propTypes = {
  email: propTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setLogin from '../actions';

class Login extends React.Component {
    state = {
      email: '',
      password: '',
    };

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    };

    verifyEmailPassword = () => {
      // referência regex: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
      const { email, password } = this.state;
      const regex = /\S+@\S+\.\S+/;
      const regexEmail = regex.test(email);
      const NUMBER_SIX = 6;
      if (password.length >= NUMBER_SIX && regexEmail) return false;
      return true;
    };

    handleClick = (event) => {
      event.preventDefault();
      const { history, emailLogin } = this.props;
      const { email } = this.state;
      emailLogin(email);
      history.push('/carteira');
    };

    render() {
      return (
        <div>
          <form>
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={ this.handleChange }
            />
            <input
              data-testid="password-input"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={ this.handleChange }
            />
            <button
              type="submit"
              disabled={ this.verifyEmailPassword() }
              onClick={ this.handleClick }
            >
              Entrar

            </button>
          </form>
        </div>
      );
    }
}
const mapDispatchToProps = (dispatch) => ({
  emailLogin: (payload) => dispatch(setLogin(payload)),
});
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  emailLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

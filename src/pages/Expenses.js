import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../actions';

// Seper ajuda de Elimar Lucena e Laecio Silva Turma XP Tribo B
class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      exchangeRates: '',
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      id: -1,
    };
    this.fetchJSON = this.fetchJSON.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }

  componentDidMount() {
    this.fetchJSON();
  }

  async fetchJSON() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const getCurrencies = await response.json();
    this.setState({
      exchangeRates: getCurrencies,
    });
    return getCurrencies;
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleclick(event) {
    const api = await this.fetchJSON();
    event.preventDefault();
    const { walletExpenses } = this.props;
    this.setState((prevState) => ({
      id: prevState.id + 1,
      exchangeRates: api,

    }));
    walletExpenses(this.state);
    this.setState({
      value: '',
      description: '',
    });
  }

  render() {
    const { exchangeRates, value, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              id="value-input"
              name="value"
              value={ value }
              placeholder=""
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              id="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              name="currency"
              data-testid="currency-input"
              id="currency-input"
              onChange={ this.handleChange }
            >
              {Object.keys(exchangeRates)
                .filter((currency) => currency !== 'USDT')
                .map((currency) => (
                  <option
                    data-testid={ currency }
                    key={ currency }
                    value={ currency }
                  >
                    { currency }

                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de Pagamento
            <select
              name="method"
              data-testid="method-input"
              id="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria
            <select
              name="tag"
              data-testid="tag-input"
              id="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Transporte">Transporte</option>
              <option value="Lazer">Lazer</option>
              <option value="Saúde">Saúde</option>
              <option value="Trabalho">Trabalho</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleclick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  walletExpenses: (payload) => dispatch(setExpenses(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
Expenses.propTypes = {
  walletExpenses: propTypes.func.isRequired,
  // expenses: propTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

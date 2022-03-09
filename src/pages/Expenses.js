import React from 'react';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: '',
      value: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.fetchJSON = this.fetchJSON.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchJSON();
  }

  async fetchJSON() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const getCurrencies = await response.json();
    this.setState({
      currencies: getCurrencies,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.state;
    console.log(this.state);
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
              placeholder=""
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
              {Object.keys(currencies)
                .map((currency) => (
                  <option key={ currency } value={ currency }>{ currency }</option>
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
              <option value="valor1">Dinehiro</option>
              <option value="valor2">Cartão de Débito</option>
              <option value="valor3">Cartão de Crédito</option>
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
              <option value="valor1">Alimentação</option>
              <option value="valor2">Transporte</option>
              <option value="valor3">Lazer</option>
              <option value="valor4">Saúde</option>
              <option value="valor5">Trabalho</option>
            </select>
          </label>
          <button
            type="submit"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

export default Expenses;

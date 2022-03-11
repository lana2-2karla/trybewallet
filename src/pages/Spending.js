import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Spending extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{parseFloat(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  {parseFloat(expense.exchangeRates[expense.currency]
                    .ask).toFixed(2)}

                </td>
                <td>
                  {parseFloat(expense.value * expense.exchangeRates[expense.currency]
                    .ask).toFixed(2)}

                </td>
                <td>Real</td>

                <td>Editar/Excluir</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
Spending.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(Spending);

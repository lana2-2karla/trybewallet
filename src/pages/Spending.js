import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Spending extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
          {expenses.forEach((expense) => (
            <tr>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {parseFloat(expense.exchangeRates[expense.currency]
                  .ask).toFixed(2)}

              </td>
              <td>
                {parseFloat(expense.value * expense.exchangeRates[expense.currency]
                  .ask).toFixed(2)}

              </td>
              <td>{(expense.exchangeRates[expense.currency].codein)}</td>

              <td>Editar/Excluir</td>
            </tr>
          ))}

        </table>
      </div>

    );
  }
}
const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});
Spending.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(Spending);

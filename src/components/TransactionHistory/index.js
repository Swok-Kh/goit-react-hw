import PropTypes from 'prop-types';
import styles from './transactionHistory.module.scss';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.title}>
        <tr>
          <th className={styles.lightRightBorder}>Type</th>
          <th className={styles.lightRightBorder}>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={styles.row} key={id}>
            <td className={styles.darkRightBorder}>
              {type.slice(0, 1).toUpperCase() + type.slice(1)}
            </td>
            <td className={styles.darkRightBorder}>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;

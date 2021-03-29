import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

import StatisticsItem from './StatisticsItem';
import StatisticsSummary from './StatisticsSummary';

const Statistics = ({ good, neutral, bad }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [bad, good, neutral]);

  return (
    <>
      <StatisticsSummary total={total} good={good} />
      <List>
        <StatisticsItem total={total} label="good" value={good} />
        <StatisticsItem total={total} label="neutral" value={neutral} />
        <StatisticsItem total={total} label="bad" value={bad} />
      </List>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;

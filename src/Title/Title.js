import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { getCurrentMonth, availableNumberOfDays } from '../utils';
import styles from './Title.styles';

const getFontSizeHeader = (numberOfDays) => {
  if (numberOfDays > 1) {
    return 12;
  }
  return 16;
};

const Title = ({ style, showTitle, numberOfDays, selectedDate }) => {
  return (
    <View style={[styles.title, style]}>
      <Text
        style={{
          color: style.color,
          fontSize: getFontSizeHeader(numberOfDays),
          textAlign: 'center',
        }}
      >
        {showTitle ? getCurrentMonth(selectedDate) : null}
      </Text>
    </View>
  );
};

Title.propTypes = {
  numberOfDays: PropTypes.oneOf(availableNumberOfDays).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.object,
};

export default React.memo(Title);

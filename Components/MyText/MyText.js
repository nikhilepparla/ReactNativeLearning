import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const MyText = ({name, age}) => {
  return (
    <Text>
      Name is {name} and Age is {age}
    </Text>
  );
};

MyText.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
export default MyText;

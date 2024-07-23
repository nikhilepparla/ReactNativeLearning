import React from 'react';
import {Alert, Text} from 'react-native';
import PropTypes from 'prop-types';

const MyText = ({name, age}) => {
  const onHandle = () => {
    alert('ONClicked');
  };
  return (
    <Text onPress={() => onHandle()}>
      Name is {name} and Age is {age}
    </Text>
  );
};

MyText.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
export default MyText;

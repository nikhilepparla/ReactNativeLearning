import React, {useState} from 'react';
import {Alert, Text} from 'react-native';

const MyText = () => {
  const [text, UpdatedText] = useState('Nikhil');
  const changeText = () => {
    UpdatedText('Text Updated');
  };
  return <Text onPress={changeText}>Text from another File {text}</Text>;
};
export default MyText;

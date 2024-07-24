import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const MyText = () => {
  let [count, updateCount] = useState(0);
  const increment = () => {
    updateCount(++count);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <Text style={{textAlign: 'center', fontSize: 60, color: '#ffffff'}}>
        {count}
      </Text>
      <Button title="Increment" onPress={increment} style={{fontSize: 50}} />
    </View>
  );
};

export default MyText;

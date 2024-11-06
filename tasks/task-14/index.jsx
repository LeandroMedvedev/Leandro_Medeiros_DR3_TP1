import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';

export default function Task14() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || '0'}</Text>

      <View style={styles.row}>
        <Button label='7' onPress={() => handlePress('7')} />
        <Button label='8' onPress={() => handlePress('8')} />
        <Button label='9' onPress={() => handlePress('9')} />
        <Button label='/' onPress={() => handlePress('/')} />
      </View>
      <View style={styles.row}>
        <Button label='4' onPress={() => handlePress('4')} />
        <Button label='5' onPress={() => handlePress('5')} />
        <Button label='6' onPress={() => handlePress('6')} />
        <Button label='*' onPress={() => handlePress('*')} />
      </View>
      <View style={styles.row}>
        <Button label='1' onPress={() => handlePress('1')} />
        <Button label='2' onPress={() => handlePress('2')} />
        <Button label='3' onPress={() => handlePress('3')} />
        <Button label='-' onPress={() => handlePress('-')} />
      </View>
      <View style={styles.row}>
        <Button label='0' onPress={() => handlePress('0')} />
        <Button label='C' onPress={clearInput} />
        <Button label='=' onPress={calculateResult} />
        <Button label='+' onPress={() => handlePress('+')} />
      </View>
    </View>
  );
}

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    maxWidth: 700,
    margin: 'auto',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  display: {
    fontSize: 32,
    backgroundColor: colors.white,
    textAlign: 'right',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: colors.shuttleGrey,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.githubGreen,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
});

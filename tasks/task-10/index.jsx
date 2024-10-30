import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';
import { isPrime } from '../../utils';

export default function Task10() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber)) {
      setResult('Valor inválido. Por favor, digite um número.');
    } else if (isPrime(parsedNumber)) {
      setResult('PRIMO');
    } else {
      setResult('COMPOSTO');
    }

    setNumber('');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Primo ou Composto</Text>
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        onChangeText={setNumber}
        value={number}
      />
      <Button
        style={styles.button}
        color={colors.githubGreen}
        title='Verificar'
        onPress={handleCheck}
        disabled={number.trim() === ''}
      />
      <Text style={styles.text}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: colors.white,
  },
  input: {
    height: 40,
    padding: 20,
    borderRadius: 6,
    fontSize: 20,
    backgroundColor: colors.lavenderBlush,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});

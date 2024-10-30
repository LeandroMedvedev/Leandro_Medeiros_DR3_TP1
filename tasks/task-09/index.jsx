import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task09() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const checkOddOrEven = () => {
    const cleanedStr = value.replace(/[^0-9.-]+/g, '');

    const isNumber = !isNaN(parseFloat(cleanedStr)) && isFinite(cleanedStr);

    if (!isNumber) {
      setResult('Valor inválido. Por favor, digite um número.');
    } else {
      const lastDigit = value[value.length - 1];

      if (['0', '2', '4', '6', '8'].includes(lastDigit)) {
        setResult(`${cleanedStr} é PAR`);
      } else {
        setResult(`${cleanedStr} é ÍMPAR`);
      }
    }

    setValue('');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Par ou Ímpar</Text>
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        onChangeText={setValue}
        value={value}
      />
      <Button
        style={styles.button}
        color={colors.githubGreen}
        title='Verificar'
        onPress={checkOddOrEven}
        disabled={value.trim() === ''}
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
    flexWrap: 'wrap',
  },
});

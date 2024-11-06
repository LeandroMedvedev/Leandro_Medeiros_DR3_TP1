import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';
import { containsSpecialCharacters, isPalindrome } from '../../utils';

export default function Task11() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (containsSpecialCharacters(text)) {
      setResult('Valor inválido. Por favor, digite apenas letras ou números.');
    } else if (isPalindrome(text)) {
      setResult('É Palíndromo');
    } else {
      setResult('NÃO é Palíndromo');
    }
    setText('');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>É Palíndromo?</Text>
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        onChangeText={setText}
        value={text}
      />
      <Button
        style={styles.button}
        color={colors.githubGreen}
        title='Verificar'
        onPress={handleCheck}
        disabled={!text.trim()}
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

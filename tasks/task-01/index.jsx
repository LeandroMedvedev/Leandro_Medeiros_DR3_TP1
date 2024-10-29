import { StyleSheet, Text, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task01() {
  const fullName = 'Leandro Medeiros';
  const currentTime = new Date().toLocaleTimeString('pt-BR');
  const message = `Olá, ${fullName}! Agora são ${currentTime}.`;

  /*
    OBS: Criei esta tarefa em meu PC pelo Bash (Linux) com "npx create-expo-app tp1 --template 
    blank", mas como os demais exercícios eram pelo Expo Snack, subi para o repositório remoto 
    GitHub e de lá importei para o Expo Snack para facilitar e ter tudo em um único local.
  */

  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: colors.white,
  },
});

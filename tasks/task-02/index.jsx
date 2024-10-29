import { StyleSheet, Text, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task02() {
  const fullName = 'Leandro Medeiros';
  const currentTime = new Date().toLocaleTimeString('pt-BR');
  const message = `Olá, ${fullName}! Agora são ${currentTime}.`;

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

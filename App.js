import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const fullName = 'Leandro Medeiros';
  const currentTime = new Date().toLocaleTimeString('pt-BR');
  const message = `Olá, ${fullName}! Agora são ${currentTime}.`;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 28,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task07() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>Tarefa 07</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: colors.white,
  },
});

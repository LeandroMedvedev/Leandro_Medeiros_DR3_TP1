import { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { View } from 'react-native';
import { colors, globalStyles } from '../../styles/globalStyles';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count >= 1 && setCount(count - 1);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.signalsContainer}>
        <Pressable style={styles.touch} onPress={decrement}>
          <Text style={styles.signal}>-</Text>
        </Pressable>
        <Pressable style={styles.touch} onPress={increment}>
          <Text style={styles.signal}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signalsContainer: {
    width: 315,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    color: colors.white,
  },
  text: {
    fontSize: 32,
    color: colors.white,
  },
  signal: {
    height: 60,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 60,
    backgroundColor: colors.lavenderBlush,
    color: colors.graphite,
  },
  touch: {
    width: '48%',
  },
});

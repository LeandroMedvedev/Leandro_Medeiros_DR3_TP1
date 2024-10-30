import { StyleSheet, View } from 'react-native';
import { colors, globalStyles } from '../../styles/globalStyles';
import Counter from './Counter';

export default function Task05() {
  return (
    <View style={globalStyles.container}>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: colors.white,
  },
});

import { View } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import Counter from './Counter';

export default function Task05() {
  return (
    <View style={globalStyles.container}>
      <Counter />
    </View>
  );
}

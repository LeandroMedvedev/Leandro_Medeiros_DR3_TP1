import { View } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import Counter from './Counter.jsx';

export default function Task05() {
  return (
    <View style={globalStyles.container}>
      <Counter />
    </View>
  );
}

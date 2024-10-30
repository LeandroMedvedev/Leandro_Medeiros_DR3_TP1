import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MOVIES } from '../../constants';
import Movies from './Movies.jsx';

export default function Task08() {
  return (
    <SafeAreaProvider>
      <Movies movies={MOVIES} />
    </SafeAreaProvider>
  );
}

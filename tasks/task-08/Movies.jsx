import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import Card from './Card.jsx';
import { colors } from '../../styles/globalStyles';

export default function Movies({ movies }) {
  return (
    <SafeAreaView style={styles.container}>
      {movies.map((movie, index) => (
        <Card
          key={index}
          posterUrl={movie.posterUrl}
          title={movie.title}
          cinema={movie.cinema}
          startTime={movie.startTime}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: colors.ebony,
    gap: 15,
  },
});

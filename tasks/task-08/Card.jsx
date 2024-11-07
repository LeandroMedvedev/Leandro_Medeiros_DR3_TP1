import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../styles/globalStyles';

export default function Card({ title, posterUrl, cinema, startTime }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={posterUrl} alt='Imagem do filme' />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>Cinema: {cinema}</Text>
      <Text style={styles.text}>Horário: {startTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 490,
    borderRadius: 4,
    borderColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.whiteSmoke,
  },
  image: {
    width: '100%',
    height: 420,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    objectFit: 'contain',
  },
  title: {
    fontSize: 18,
    color: colors.graphite,
  },
  text: {
    color: colors.graphite,
  },
});

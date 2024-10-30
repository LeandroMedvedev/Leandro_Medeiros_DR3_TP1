import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';
import { IMAGES } from '../../constants';

export default function Task04() {
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);

  function changeImage() {
    const randomIndex = Math.floor(Math.random() * IMAGES.length);
    setCurrentImage(IMAGES[randomIndex]);
  }

  return (
    <View style={globalStyles.container}>
      <Image style={styles.image} source={currentImage.uri} />
      <Text style={styles.text}>{currentImage.title}</Text>
      <Button
        color={currentImage.color}
        title='Alterar Imagem'
        onPress={changeImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: colors.white,
  },
  image: {
    width: 200,
    height: 200,
  },
});

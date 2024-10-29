import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task03() {
  const [selectedButton, setSelectedButton] = useState('');
  const redButton = 'Vermelho';
  const blueButton = 'Azul';
  const greenButton = 'Verde';

  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>Botão pressionado: {selectedButton}</Text>
      <View style={styles.buttons}>
        <Button
          color={colors.darkRed}
          title={redButton}
          onPress={() => setSelectedButton(redButton)}
        />
        <Button
          color={colors.darkBlue}
          title={blueButton}
          onPress={() => setSelectedButton(blueButton)}
        />
        <Button
          color={colors.githubGreen}
          title={greenButton}
          onPress={() => setSelectedButton(greenButton)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    width: 315,
    fontSize: 24,
    color: colors.white,
  },
  buttons: {
    marginTop: 15,
    display: 'flex',
    gap: 15,
  },
});

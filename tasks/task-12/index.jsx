import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task12() {
  const [date, setDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(date);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();

    if (months < 0) {
      years--;
      months += 12;
    }
    if (days < 0) {
      months--;
      const daysInLastMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      days += daysInLastMonth;
    }
    if (hours < 0) {
      months--;
      hours += 24;
    }
    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    setAge(
      `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos.`
    );
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Idade</Text>
      <input
        style={styles.input}
        type='datetime-local'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button
        color={colors.githubGreen}
        title='Calcular'
        onPress={calculateAge}
      />
      {age && <Text style={styles.response}>Idade: {age}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: colors.white,
  },
  input: {
    height: 20,
    border: 'none',
    padding: 10,
    backgroundColor: colors.lavenderBlush,
    color: colors.blackRussian,
  },
  response: {
    color: colors.white,
    fontSize: 18,
  },
});

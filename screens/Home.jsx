import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/globalStyles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste de Performance 1</Text>
      <View style={styles.list}>
        {tasks.map((task, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => navigation.navigate(task.route)}
          >
            <Text style={styles.link}>{task.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const tasks = [
  { label: 'Tarefa 01', route: 'Task01' },
  { label: 'Tarefa 02', route: 'Task02' },
  { label: 'Tarefa 03', route: 'Task03' },
  { label: 'Tarefa 04', route: 'Task04' },
  { label: 'Tarefa 05', route: 'Task05' },
  { label: 'Tarefa 06', route: 'Task06' },
  { label: 'Tarefa 07', route: 'Task07' },
  { label: 'Tarefa 08', route: 'Task08' },
  { label: 'Tarefa 09', route: 'Task09' },
  { label: 'Tarefa 10', route: 'Task10' },
  { label: 'Tarefa 11', route: 'Task11' },
  { label: 'Tarefa 12', route: 'Task12' },
  { label: 'Tarefa 13', route: 'Task13' },
  { label: 'Tarefa 14', route: 'Task14' },
  { label: 'Tarefa 15', route: 'Task15' },
  { label: 'Tarefa 16', route: 'Task16' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shuttleGrey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.blackRussian,
  },
  list: {
    width: '100%',
    maxWidth: 620,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
  },
  item: {
    maxWidth: 300,
    padding: 10,
    backgroundColor: colors.blackRussian,
    borderRadius: 5,
    marginBottom: 10,
    width: '48%',
  },
  link: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
});

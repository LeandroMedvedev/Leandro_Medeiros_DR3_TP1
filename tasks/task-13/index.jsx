import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task13() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder='Nova tarefa'
        placeholderTextColor={colors.lightGrey}
        maxLength={35}
      />

      <Button title='Adicionar' onPress={addTask} color={colors.githubGreen} />

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={styles.removeText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.ebony,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.white,
  },
  input: {
    height: 40,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    color: colors.white,
  },
  taskItem: {
    width: 315,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  taskText: {
    fontSize: 18,
    color: colors.white,
  },
  removeText: {
    padding: 5,
    borderRadius: 5,
    fontWeight: 600,
    backgroundColor: colors.darkRed,
    color: colors.white,
  },
});

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { QUESTIONS } from '../../constants';
import { colors } from '../../styles/globalStyles';

export default function Task15() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === QUESTIONS[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <View style={styles.container}>
      {isQuizFinished ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Pontuação: {score}/{QUESTIONS.length}
          </Text>
          <TouchableOpacity style={styles.button} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Reiniciar Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {QUESTIONS[currentQuestion].question}
          </Text>
          {QUESTIONS[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  questionContainer: {
    width: '100%',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: colors.ciano,
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    color: colors.white,
    fontSize: 18,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.githubGreen,
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

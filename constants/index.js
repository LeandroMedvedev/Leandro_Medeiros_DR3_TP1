import { colors } from '../styles/globalStyles';

export const IMAGES = [
  {
    title: 'Node',
    uri: require('../assets/node.jpg'),
    color: colors.githubGreen,
  },
  {
    title: 'React',
    uri: require('../assets/react.jpg'),
    color: colors.skyBlue,
  },
  {
    title: 'Vue',
    uri: require('../assets/vue.jpg'),
    color: colors.shuttleGrey,
  },
  {
    title: 'Angular',
    uri: require('../assets/angular.jpg'),
    color: colors.darkRed,
  },
  {
    title: 'Python',
    uri: require('../assets/python.jpg'),
    color: colors.darkGold,
  },
];

export const MOVIES = [
  {
    title: 'Wall Street: Poder e Cobiça',
    posterUrl: require('../assets/wall-street.jpg'),
    cinema: 'Cinemark Plaza Shopping',
    startTime: '18:30',
  },
  {
    title: 'JFK',
    posterUrl: require('../assets/jfk.jpg'),
    cinema: 'Kinoplex Boulevard',
    startTime: '20:00',
  },
  {
    title: 'Dança com Lobos',
    posterUrl: require('../assets/dances-with-wolves.jpg'),
    cinema: 'UCI New York City Center',
    startTime: '16:45',
  },
  {
    title: 'A Firma',
    posterUrl: require('../assets/the-firm.jpg'),
    cinema: 'Cinépolis Lagoon',
    startTime: '19:15',
  },
];

export const QUESTIONS = [
  {
    question: 'Qual é o operador usado para atribuição em JavaScript?',
    options: ['=', '==', '===', ':'],
    answer: '=',
  },
  {
    question:
      'Qual das opções abaixo representa um tipo de dado em JavaScript?',
    options: ['String', 'Character', 'Text', 'Word'],
    answer: 'String',
  },
  {
    question: 'Como você declara uma variável constante em JavaScript?',
    options: ['const', 'let', 'var', 'constant'],
    answer: 'const',
  },
  {
    question:
      'Qual método é usado para adicionar elementos ao final de um array em JavaScript?',
    options: ['push', 'pop', 'shift', 'unshift'],
    answer: 'push',
  },
  {
    question:
      'Qual estrutura de repetição é usada para iterar sobre propriedades de um objeto em JavaScript?',
    options: ['for', 'for...of', 'for...in', 'foreach'],
    answer: 'for...in',
  },
  {
    question:
      'Qual função converte uma string para um número inteiro em JavaScript?',
    options: ['parseInt', 'Number', 'toString', 'parseFloat'],
    answer: 'parseInt',
  },
  {
    question: "O que 'NaN' representa em JavaScript?",
    options: [
      'Número negativo',
      'Número muito grande',
      'Valor inválido',
      'Não é um número',
    ],
    answer: 'Não é um número',
  },
];

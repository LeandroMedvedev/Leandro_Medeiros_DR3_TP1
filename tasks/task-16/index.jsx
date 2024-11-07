import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../styles/globalStyles';

export default function Task16() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>
        Tarefa 16 | A arquitetura de uma aplicação React Native
      </Text>
      <Text style={styles.highlight}>
        Elabore um texto dissertativo que apresente uma visão geral sobre a
        arquitetura de uma aplicação React Native. Este texto deve possuir uma
        introdução, um desenvolvimento e uma conclusão. O seu trabalho também
        deve apresentar uma relação entre o que ocorre no React em comparação ao
        que ocorre no React Native. É obrigatório o uso de referências
        bibliográficas no modelo ABNT e, ao menos uma delas deve ser diferente
        do que é apresentado nas referências da disciplina.
      </Text>
      <Text style={styles.paragraph}>
        React Native é uma estrutura de desenvolvimento criada pelo Facebook
        para construir aplicativos móveis multiplataforma usando JavaScript. Ele
        aproveita o conhecimento em React para criar experiências nativas em iOS
        e Android, permitindo flexibilidade e eficiência com desempenho nativo.
      </Text>
      <Text style={styles.paragraph}>
        A arquitetura do React Native usa JavaScript integrado a componentes
        nativos, criando uma “ponte” que converte o código para as interfaces de
        cada plataforma. No React para web, os componentes são convertidos em
        elementos DOM. Já no React Native, eles são traduzidos para componentes
        nativos através de uma camada intermediária chamada bridge. Essa ponte
        permite que a aplicação acesse recursos do dispositivo, como a câmera e
        o GPS, garantindo uma performance superior.
      </Text>
      <Text style={styles.paragraph}>
        Além da ponte, a arquitetura React Native adapta componentes específicos
        para substituir a DOM, como View, Text e Image, otimizando o desempenho
        sem depender de camadas intermediárias. A navegação ocorre com
        bibliotecas específicas, como react-navigation, que oferecem uma
        experiência fluida e nativa, ao contrário do React para web, em que as
        páginas são baseadas em links e URLs.
      </Text>
      <Text style={styles.paragraph}>
        React Native simplifica o desenvolvimento mobile multiplataforma,
        permitindo que desenvolvedores criem aplicativos nativos com JavaScript
        e React. Com o uso de componentes nativos e a bridge, ele oferece uma
        experiência próxima ao desenvolvimento nativo, reduzindo custos e prazos
        de implementação, consolidando-se como uma escolha moderna e eficaz para
        o desenvolvimento de aplicativos móveis.
      </Text>
      <View style={styles.highlight}>
        <Text style={styles.referencesTitle}>Referências </Text>
        <Text style={styles.references}>
          SCHWARZMÜLLER, Maximilian. React Native – The Practical Guide. 2021.
        </Text>
        <Text style={styles.references}>
          FACEBOOK Inc. React Native Documentation. Disponível em:
          https://reactnative.dev/docs
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: colors.white,
  },
  paragraph: {
    maxWidth: 700,
    textIndent: 15,
    color: colors.white,
  },
  referencesTitle: {
    width: '100%',
    maxWidth: 700,
    fontWeight: 700,
    justifyContent: 'start',
    color: colors.white,
  },
  references: {
    width: '100%',
    maxWidth: 700,
    fontSize: 13,
    justifyContent: 'start',
    color: colors.white,
  },
  highlight: {
    width: '100%',
    maxHeight: 130,
    padding: 10,
    gap: 10,
    maxWidth: 700,
    backgroundColor: colors.graphite,
    color: colors.white,
  },
});

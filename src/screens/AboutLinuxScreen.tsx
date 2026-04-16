// AboutLinuxScreen.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function AboutLinuxScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>O que é Linux?</Text>
      <Text style={styles.paragraph}>
        Linux é um sistema operacional de código aberto baseado no kernel Linux, criado por Linus Torvalds em 1991.
        Diferente de sistemas proprietários como Windows e macOS, o Linux é distribuído sob licenças livres,
        permitindo que qualquer pessoa use, modifique e distribua o código-fonte.
      </Text>

      <Text style={styles.subtitle}>Principais Características</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}>• <Text style={styles.bulletText}>Código Aberto</Text> – Total transparência e possibilidade de customização.</Text>
        <Text style={styles.bullet}>• <Text style={styles.bulletText}>Segurança</Text> – Menor incidência de malwares e sistema de permissões robusto.</Text>
        <Text style={styles.bullet}>• <Text style={styles.bulletText}>Estabilidade</Text> – Amplamente utilizado em servidores e supercomputadores.</Text>
        <Text style={styles.bullet}>• <Text style={styles.bulletText}>Variedade</Text> – Centenas de distribuições para diferentes finalidades.</Text>
        <Text style={styles.bullet}>• <Text style={styles.bulletText}>Comunidade</Text> – Suporte ativo de milhões de usuários e desenvolvedores.</Text>
      </View>

      <Text style={styles.subtitle}>Distribuições (Distros)</Text>
      <Text style={styles.paragraph}>
        Uma distribuição Linux é um sistema operacional completo que inclui o kernel Linux mais um conjunto
        de softwares, gerenciadores de pacotes e configurações. Existem distros para iniciantes (Ubuntu, Linux Mint),
        para servidores (Red Hat, CentOS), para entusiastas (Arch, Gentoo) e muitas outras.
      </Text>

      <Text style={styles.subtitle}>Curiosidades</Text>
      <Text style={styles.paragraph}>
        - O Linux está presente em mais de 90% dos servidores web do mundo.{'\n'}
        - Android é baseado no kernel Linux.{'\n'}
        - A maioria dos efeitos especiais de Hollywood é renderizada em clusters Linux.{'\n'}
        - A Estação Espacial Internacional usa Linux em seus sistemas críticos.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#81c784',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#a5d6a7',
    marginTop: 24,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#e0e0e0',
    marginBottom: 12,
  },
  bulletList: {
    marginLeft: 8,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 24,
    color: '#e0e0e0',
    marginBottom: 6,
  },
  bulletText: {
    fontWeight: '600',
    color: '#81c784',
  },
});
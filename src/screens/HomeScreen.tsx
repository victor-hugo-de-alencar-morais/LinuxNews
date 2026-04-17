import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

// Dados mockados das distros principais
const distros = [
  { id: 'ubuntu', name: 'Ubuntu', logo: 'https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png' },
  { id: 'fedora', name: 'Fedora', logo: 'https://fedoraproject.org/w/uploads/2/2d/Logo_fedoralogo.png' },
  { id: 'debian', name: 'Debian', logo: 'https://www.debian.org/logos/openlogo-100.png' },
  { id: 'arch', name: 'Arch Linux', logo: 'https://archlinux.org/static/logos/archlinux-logo-dark-90dpi.ebdee92a15b3.png' },
];

// Notícias mockadas
const news = [
  { id: '1', title: 'Kernel 6.8 lançado com melhorias de desempenho', date: '10 Mar 2024' },
  { id: '2', title: 'Ubuntu 24.04 LTS "Noble Numbat" ganha data de lançamento', date: '05 Mar 2024' },
  { id: '3', title: 'Fedora 40 Beta já está disponível para testes', date: '28 Fev 2024' },
];

export default function HomeScreen({ navigation }) {
  const { user, signOut } = useContext(AuthContext);

  const renderDistroItem = ({ item }) => (
    <TouchableOpacity
      style={styles.distroCard}
      onPress={() => navigation.navigate('ListVersion', { distroId: item.id, distroName: item.name })}
    >
      <Image source={{ uri: item.logo }} style={styles.distroLogo} resizeMode="contain" />
      <Text style={styles.distroName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDate}>{item.date}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Olá, {user?.name || 'usuário'}!</Text>
        <TouchableOpacity onPress={signOut}>
          <Text style={styles.logout}>Sair</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Distribuições Populares</Text>
      <FlatList
        data={distros}
        renderItem={renderDistroItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.distroList}
      />

      <Text style={styles.sectionTitle}>Últimas Notícias</Text>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.menuGrid}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('AboutLinux')}
        >
          <Text style={styles.menuIcon}>🐧</Text>
          <Text style={styles.menuText}>Sobre o Linux</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Client')}
        >
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuText}>Meu Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#81c784',
  },
  logout: {
    color: '#e74c3c',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 12,
    color: '#a5d6a7', 
  },
  distroList: {
    paddingLeft: 20,
  },
  distroCard: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 12,
    width: 120,
    borderWidth: 1,
    borderColor: '#2e7d32',
  },
  distroLogo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  distroName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e0e0e0',
  },
  newsItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e0e0e0',
  },
  newsDate: {
    fontSize: 14,
    color: '#a5d6a7',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#2e7d32',
    marginHorizontal: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  menuItem: {
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 16,
    width: '45%',
    borderWidth: 1,
    borderColor: '#2e7d32',
  },
  menuIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#81c784',
  },
});
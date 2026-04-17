import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

// Simulação de dados de versões por distro ainda não funcional, por enquanto
const mockVersions = {
  ubuntu: [
    { version: '24.04 LTS', codename: 'Noble Numbat', releaseDate: 'Abr 2024', downloadUrl: 'https://releases.ubuntu.com/24.04/' },
    { version: '23.10', codename: 'Mantic Minotaur', releaseDate: 'Out 2023', downloadUrl: 'https://releases.ubuntu.com/23.10/' },
    { version: '22.04 LTS', codename: 'Jammy Jellyfish', releaseDate: 'Abr 2022', downloadUrl: 'https://releases.ubuntu.com/22.04/' },
  ],
  fedora: [
    { version: '40', codename: '', releaseDate: 'Abr 2024', downloadUrl: 'https://getfedora.org/' },
    { version: '39', codename: '', releaseDate: 'Nov 2023', downloadUrl: 'https://getfedora.org/' },
  ],
  debian: [
    { version: '12', codename: 'Bookworm', releaseDate: 'Jun 2023', downloadUrl: 'https://www.debian.org/releases/stable/' },
    { version: '11', codename: 'Bullseye', releaseDate: 'Ago 2021', downloadUrl: 'https://www.debian.org/releases/bullseye/' },
  ],
  arch: [
    { version: 'Rolling', codename: '', releaseDate: 'Contínuo', downloadUrl: 'https://archlinux.org/download/' },
  ],
};

export default function ListVersionScreen({ route, navigation }) {
  const { distroId, distroName } = route.params;
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = mockVersions[distroId] || [];
      setVersions(data);
      setLoading(false);
    }, 500);
  }, [distroId]);

  const handleDownload = (item) => {
    Alert.alert(
      'Download',
      `Você será redirecionado para a página de download do ${distroName} ${item.version}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Continuar', onPress: () => console.log('Abrir URL:', item.downloadUrl) },
      ]
    );
  };

  const renderVersionItem = ({ item }) => (
    <View style={styles.versionCard}>
      <View style={styles.versionInfo}>
        <Text style={styles.versionText}>{item.version}</Text>
        {item.codename ? (
          <Text style={styles.codename}>{item.codename}</Text>
        ) : null}
        <Text style={styles.releaseDate}>Lançamento: {item.releaseDate}</Text>
      </View>
      <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownload(item)}>
        <Text style={styles.downloadButtonText}>Baixar</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#81c784" />
        <Text style={styles.loadingText}>Carregando versões...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Versões do {distroName}</Text>
      <FlatList
        data={versions}
        renderItem={renderVersionItem}
        keyExtractor={(item) => item.version}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma versão disponível no momento.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#a5d6a7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#81c784',
    borderBottomWidth: 1,
    borderBottomColor: '#2e7d32',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  versionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#2e7d32',
  },
  versionInfo: {
    flex: 1,
  },
  versionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  codename: {
    fontSize: 16,
    color: '#a5d6a7',
    marginTop: 2,
  },
  releaseDate: {
    fontSize: 14,
    color: '#9e9e9e',
    marginTop: 4,
  },
  downloadButton: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  downloadButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#9e9e9e',
  },
});
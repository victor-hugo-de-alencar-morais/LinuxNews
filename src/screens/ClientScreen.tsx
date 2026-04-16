// ClientScreen.js
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function ClientScreen({ navigation }) {
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair da sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', style: 'destructive', onPress: signOut },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </Text>
        </View>
        <Text style={styles.userName}>{user?.name || 'Usuário'}</Text>
        <Text style={styles.userEmail}>{user?.email || 'email@exemplo.com'}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Informações da Conta</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoValue}>{user?.name || 'Não informado'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>E-mail:</Text>
          <Text style={styles.infoValue}>{user?.email || 'Não informado'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Membro desde:</Text>
          <Text style={styles.infoValue}>Março 2024</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Em breve', 'Funcionalidade em desenvolvimento')}>
          <Text style={styles.actionButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.logoutButton]} onPress={handleLogout}>
          <Text style={[styles.actionButtonText, styles.logoutText]}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  profileHeader: {
    backgroundColor: '#1b5e20', // verde escuro
    paddingVertical: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#81c784',
  },
  avatarText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#81c784',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  userEmail: {
    fontSize: 16,
    color: '#a5d6a7',
    marginTop: 4,
  },
  infoSection: {
    backgroundColor: '#1e1e1e',
    marginHorizontal: 20,
    marginTop: 24,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2e7d32',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#81c784',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#9e9e9e',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e0e0e0',
  },
  actions: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2e7d32',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#81c784',
  },
  logoutButton: {
    borderColor: '#c62828', // vermelho escuro para destaque
  },
  logoutText: {
    color: '#ef5350',
  },
});
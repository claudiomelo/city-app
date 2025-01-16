import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import { useNavigation } from 'expo-router'; // Import navigation hook
import { useRouter } from 'expo-router'; // Importa o useRouter para navegação


const SchoolCard = ({ title, address, neighborhood, cep, cityUF, phone }) => {
  //const navigation = useNavigation(); // Initialize navigation
  const router = useRouter(); // Inicializa o roteador
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{address}</Text>
      <Text style={styles.cardText}>{neighborhood}</Text>
      <Text style={styles.cardText}>CEP: {cep}</Text>
      <Text style={styles.cardText}>{cityUF}</Text>
      <Text style={styles.cardText}>Telefone: {phone || 'Não disponível'}</Text>
      <TouchableOpacity
        onPress={() => router.push('/pages/escola')}
      >
        <Text style={styles.link}>Mais detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 1,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default SchoolCard;

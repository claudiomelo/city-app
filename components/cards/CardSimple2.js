import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CardSimple2 = ({ module, onPress }) => {
  // Dynamically calculate flexBasis based on cardSize
  const flexBasis =
    module.cardSize === '1' ? '100%' : module.cardSize === '2' ? '48%' : '30%';
    const handlePress = () => {
        router.push('/pages/schoolsList'); // Navega para a página desejada
    };
    return (
        <TouchableOpacity
        style={[
            styles.card,
            {
            flexBasis,
            backgroundColor: module.backgroundColor || '#ffffff',
            },
        ]}
        onPress={onPress}
        activeOpacity={0.9}
        >
        <View style={styles.cardContent}>
            {/* Icon */}
            {module.icon && (
            <Image source={module.icon} style={styles.cardIcon} resizeMode="contain" />
            )}

            {/* Title */}
            <Text style={styles.cardTitle}>{module.title}</Text>

            {/* Description */}
            <Text style={styles.cardDescription}>{module.description}</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4, // For Android
  },
  cardContent: {
    alignItems: 'center',
  },
  cardIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    opacity: 0.9,
  },
});

export default CardSimple2;

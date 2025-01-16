import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardSimple = ({ module, onPress }) => {
  // Dynamically calculate flexBasis based on cardSize
  const flexBasis =
    module.cardSize === '1' ? '100%' : module.cardSize === '2' ? '48%' : '30%';

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          flexBasis,
          backgroundColor: module.backgroundColor || '#ffffff',
          borderColor: module.borderColor || 'rgba(0,0,0,0.1)',
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Add subtle shadow for depth */}
      <View style={styles.cardShadow}>
        <View style={styles.cardContent}>
          {/* Title */}
          <Text style={styles.cardTitle}>{module.title}</Text>

          {/* Description */}
          <Text style={styles.cardDescription}>{module.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // Shadow effect for Android
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8, // Shadow effect for Android
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent background for better contrast
    borderRadius: 20,
  },
  cardContent: {
    alignItems: 'center',
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default CardSimple;

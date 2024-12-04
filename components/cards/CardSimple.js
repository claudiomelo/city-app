import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardSimple = ({ module, onPress }) => {
  // Dynamically calculate flexBasis based on cardSize
  const flexBasis =
    module.cardSize === '1' ? '100%' : module.cardSize === '2' ? '48%' : '30%';

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: module.backgroundColor || '#fff', flexBasis }]}
      onPress={onPress}
    >
      <View style={styles.cardContent}>
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
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default CardSimple;

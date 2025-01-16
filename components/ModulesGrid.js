import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CardSimple2 from './cards/CardSimple2';
import CardSlideShow from './cards/CardSlideShow';
import CardSlideShowWithAnimation from './cards/CardSlideShowWithAnimation.js';
import { useRouter } from 'expo-router'; // Importa o useRouter para navegação

const ModulesGrid = ({ modules }) => {
  const visibleModules = Object.values(modules).filter(
    (module) => module.enabled && module.visible
  );
  const router = useRouter(); // Inicializa o roteador

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={styles.scrollView}
      contentContainerStyle={styles.gridContainer} // Apply layout styles here
    >
      {visibleModules.map((module, index) => {
        let CardComponent;
        switch (module.cardType) {
          case 'CardSlideShowWithAnimation':
            CardComponent = CardSlideShowWithAnimation;
            break;
          case 'CardSlideShow':
            CardComponent = CardSlideShow;
            break;
          default:
            CardComponent = CardSimple2;
        }

        return (
          <CardComponent
            key={index}
            module={module}
            onPress={() => router.push(module.modulePage)} // Navigate on press
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default ModulesGrid;

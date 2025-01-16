import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CardSimple2 from './cards/CardSimple2';
import CardSlideShow from './cards/CardSlideShow';
import CardSlideShowWithAnimation from './cards/CardSlideShowWithAnimation';
import CardVideoPlay from './CardVideoPlay';

import { useRouter } from 'expo-router'; // Import useRouter for navigation

const ModulesGrid = ({ modules }) => {
  const visibleModules = Object.values(modules).filter(
    (module) => module.enabled && module.visible
  );
  const router = useRouter(); // Initialize the router

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={styles.scrollView}
      contentContainerStyle={styles.gridContainer} // Apply layout styles here
    >
      {visibleModules.map((module, index) => {
        let CardComponent;

        // Handle the card type
        switch (module.cardType) {
          case 'CardSlideShowWithAnimation':
            CardComponent = CardSlideShowWithAnimation;
            break;
          case 'CardSlideShow':
            CardComponent = CardSlideShow;
            break;
          case 'CardVideoPlay': // Handle the video card
            return (
              <CardVideoPlay key={index} videoUrl={module.videoUrl} />
            );
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

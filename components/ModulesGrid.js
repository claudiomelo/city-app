import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardSimple from './cards/CardSimple';
import CardSlideShow from './cards/CardSlideShow';
import CardSlideShowWithAnimation from './cards/CardSlideShowWithAnimation.js';

const ModulesGrid = ({ modules }) => {
  const visibleModules = Object.values(modules).filter(
    (module) => module.enabled && module.visible
  );

  return (
    <View style={styles.gridContainer}>
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
            CardComponent = CardSimple;
        }

        return (
          <CardComponent
            key={index}
            module={module}
            onPress={() => console.log(`Navigating to ${module.modulePage}`)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ModulesGrid;

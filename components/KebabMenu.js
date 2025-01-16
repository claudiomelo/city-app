import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, IconButton } from 'react-native-paper';

const KebabMenu = () => {
  const [mainMenuVisible, setMainMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(null); // Track which submenu is open

  const openMainMenu = () => setMainMenuVisible(true);
  const closeMainMenu = () => setMainMenuVisible(false);

  const toggleSubMenu = (key) => {
    if (subMenuVisible === key) {
      setSubMenuVisible(null); // Close the submenu
    } else {
      setSubMenuVisible(key); // Open the submenu
    }
  };

  return (
    <View style={styles.menuContainer}>
      {/* Main Menu */}
      <Menu
        visible={mainMenuVisible}
        onDismiss={closeMainMenu}
        anchor={
          <IconButton
            icon="dots-vertical"
            size={24}
            onPress={openMainMenu}
          />
        }
      >
        <Menu.Item
          onPress={() => toggleSubMenu('option1')}
          title="Option 1"
        />
        <Menu.Item
          onPress={() => toggleSubMenu('option2')}
          title="Option 2"
        />
        <Menu.Item
          onPress={() => console.log('Option 3')}
          title="Option 3"
        />
      </Menu>

      {/* Submenu for Option 1 */}
      {subMenuVisible === 'option1' && (
        <Menu
          visible={true}
          onDismiss={() => setSubMenuVisible(null)}
          anchor={
            <View style={styles.subMenuAnchor} /> // Invisible anchor to position submenu
          }
        >
          <Menu.Item onPress={() => console.log('Sub Option 1.1')} title="Sub Option 1.1" />
          <Menu.Item onPress={() => console.log('Sub Option 1.2')} title="Sub Option 1.2" />
        </Menu>
      )}

      {/* Submenu for Option 2 */}
      {subMenuVisible === 'option2' && (
        <Menu
          visible={true}
          onDismiss={() => setSubMenuVisible(null)}
          anchor={
            <View style={styles.subMenuAnchor} /> // Invisible anchor to position submenu
          }
        >
          <Menu.Item onPress={() => console.log('Sub Option 2.1')} title="Sub Option 2.1" />
          <Menu.Item onPress={() => console.log('Sub Option 2.2')} title="Sub Option 2.2" />
        </Menu>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  subMenuAnchor: {
    width: 0, // Invisible element to help with positioning
    height: 0,
  },
});

export default KebabMenu;

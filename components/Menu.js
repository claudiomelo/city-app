import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleSubMenu = (menu) => {
    setExpandedSubMenu(expandedSubMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Trigger Button */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuIcon}>{menuVisible ? 'X' : '☰'}</Text>
      </TouchableOpacity>

      {/* Custom Dropdown Menu */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={toggleMenu}
      >
        {/* Overlay to close the menu when clicked outside */}
        <Pressable style={styles.overlay} onPress={toggleMenu}>
          <View style={styles.menu}>
            {/* Main Menu Item 1 */}
            <TouchableOpacity onPress={() => toggleSubMenu('menu1')} style={styles.menuItem}>
              <Text style={styles.menuText}>Menu 1</Text>
              <Text style={styles.arrow}>{expandedSubMenu === 'menu1' ? '▼' : '▶'}</Text>
            </TouchableOpacity>
            {expandedSubMenu === 'menu1' && (
              <View style={styles.subMenu}>
                <Text style={styles.subMenuItem}>Submenu 1 of Menu 1</Text>
                <Text style={styles.subMenuItem}>Submenu 2 of Menu 1</Text>
              </View>
            )}

            {/* Main Menu Item 2 */}
            <TouchableOpacity onPress={() => toggleSubMenu('menu2')} style={styles.menuItem}>
              <Text style={styles.menuText}>Menu 2</Text>
              <Text style={styles.arrow}>{expandedSubMenu === 'menu2' ? '▼' : '▶'}</Text>
            </TouchableOpacity>
            {expandedSubMenu === 'menu2' && (
              <View style={styles.subMenu}>
                <Text style={styles.subMenuItem}>Submenu 1 of Menu 2</Text>
                <Text style={styles.subMenuItem}>Submenu 2 of Menu 2</Text>
              </View>
            )}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginTop: 50,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 16,
    color: '#888',
    marginLeft: 10,
  },
  subMenu: {
    paddingLeft: 20,
    marginTop: 5,
  },
  subMenuItem: {
    paddingVertical: 5,
    fontSize: 14,
    color: '#555',
  },
});

export default Menu;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from 'expo-router'; // Import navigation hook
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router'; // Importa o useRouter para navegação

const Menu = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation(); // Initialize navigation

  const [menuVisible, setMenuVisible] = useState(false);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);
  const router = useRouter(); // Inicializa o roteador

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleSubMenu = (menu) => {
    setExpandedSubMenu(expandedSubMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Trigger Button */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuIcon}>{menuVisible ? '✖' : '☰'}</Text>
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
            <TouchableOpacity onPress={() => router.push('/')} style={styles.menuItem}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSubMenu('menu1')} style={styles.menuItem}>
              <Text style={styles.menuText}>Serviços</Text>
              <Text style={styles.arrow}>
                {expandedSubMenu === 'menu1' ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>
            {expandedSubMenu === 'menu1' && (
              <View style={styles.subMenu}>
                <TouchableOpacity
                  onPress={() => {
                    toggleMenu();
                    navigation.navigate('pages/schoolsList');
                  }}
                  style={styles.subMenuItemContainer} // Style for submenu row
                >
                  <Text style={styles.subMenuItem}>Escolas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    toggleMenu();
                    navigation.navigate('pages/test');
                  }}
                  style={styles.subMenuItemContainer} // Style for submenu row
                >
                  <Text style={styles.subMenuItem}>Test</Text>
                </TouchableOpacity>
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
    color: Colors.light.mainColor,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menu: {
    backgroundColor: '#d98a8e',
    padding: 10,
    marginTop: 50,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    minWidth: 200,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c25b64',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  arrow: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  subMenu: {
    marginLeft: 10,
    marginTop: 10,
  },
  subMenuItemContainer: {
    backgroundColor: '#d98a8e', // Light red background for the row
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  subMenuItem: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
});

export default Menu;

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Footer() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const mainColor = Colors[colorScheme ?? 'light'].mainColor;

  // Define os tabs do footer
  const tabs = [
    {
      name: '', // Rota do Home
      title: 'Home',
      icon: 'house.fill',
    },
    {
      name: 'website', // Rota do Site da Prefeitura
      title: 'Site da prefeitura',
      icon: 'web',
    },
    {
      name: 'modules', // Rota do Módulos
      title: 'Modulos',
      icon: 'view-module',
    },
  ];

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => {
        const isActive = router.pathname === `/${tab.name}`; // Verifica se o tab está ativo
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => router.push(`/${tab.name}`)} // Navega para a rota correspondente
          >
            {/* Ícone com cor ativa ou padrão */}
            <IconSymbol size={28} name={tab.icon} color={isActive ? mainColor : '#888'} />
            {/* Texto com estilo ativo ou padrão */}
            <Text style={[styles.tabText, isActive && styles.activeText]}>{tab.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 54, // Altura ajustada para ficar proporcional
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 27.5,
    left: 0,
    right: 0,
    color: 'rgb(142, 142, 143)',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Garante espaçamento uniforme entre os itens
    marginTop: 1,
  },
  tabText: {
    fontSize: 9.5,
    marginTop: 0, // Espaçamento ajustado entre o ícone e o texto
    fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: 'rgb(142, 142, 143)',
    fontWeight: 500,
  },
  activeText: {
    color: '#D32F2F', // Cor do texto ativo
    fontWeight: 'bold',
  },
});

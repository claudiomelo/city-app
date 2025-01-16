import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Menu from './Menu';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const Header = ({ title, cityName, imageSource }) => {
  const colorScheme = useColorScheme();
  title = title || 'Prefeitura de';
  cityName = cityName || 'Dormentes';
  imageSource = imageSource || require('@/assets/images/dormentes-brazao.jpeg');

  const [textHeight, setTextHeight] = useState(0); // Dynamically adjust height based on text

  return (
    <View style={[styles.headerContainer, { height: textHeight + 20 }]}>
      {/* Menu */}
      <View style={styles.menuWrapper}>
        <Menu />
      </View>

      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={styles.cityNameWrapper}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setTextHeight(height); // Dynamically adjust height based on city name
          }}
        >
          <Text style={styles.cityName}>{cityName.toUpperCase()}</Text>
          <View style={styles.underline} />
        </View>
      </View>

      {/* Header Image */}
      <View style={styles.imageWrapper}>
        <Image source={imageSource} style={styles.headerImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: '100%',
  },
  menuWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, // Fixed width for the menu
  },
  titleWrapper: {
    flex: 1, // Title takes the remaining space
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  cityNameWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.mainColor,
    textAlign: 'center',
  },
  underline: {
    height: 2,
    backgroundColor: '#d9020e',
    width: '100%', // Match the full width of the cityName
    marginTop: 2, // Very close to the text
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, // Fixed width for the image
  },
  headerImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Header;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardSlideShow = ({ module }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Object.values(module.slides);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <View style={[styles.card, { backgroundColor: module.backgroundColor || '#fff' }]}>
      {slide.image && <Image source={slide.image} style={styles.slideImage} />}
      <Text style={styles.slideTitle}>{slide.title}</Text>
      <Text style={styles.slideDescription}>{slide.description}</Text>
      {slide.buttonText && slide.buttonLink && (
        <TouchableOpacity onPress={() => console.log(`Navigating to ${slide.buttonLink}`)}>
          <Text style={styles.slideButton}>{slide.buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: '100%',
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  slideTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  slideDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
  slideButton: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default CardSlideShow;

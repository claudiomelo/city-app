import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';

const CardSlideShowWithAnimation = ({ module, height = 250 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationValue] = useState(new Animated.Value(0)); // For animations
  const [loading, setLoading] = useState(true);
  const slides = Object.values(module.slides);

  const slide = slides[currentSlide];

  // Animate the slide change
  const animateSlide = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 5000, // Animation duration increased to 1 second
      useNativeDriver: true,
    }).start(() => {
      animationValue.setValue(0); // Reset animation value
    });
  };

  // Go to next slide
  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      animateSlide();
    }
  };

  // Go to previous slide
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      animateSlide();
    }
  };

  // Automatic slide change every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        goToNextSlide();
      } else {
        setCurrentSlide(0);
        animateSlide();
      }
    }, 6000); // Increased interval to 6 seconds
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  // Button Position Styles
  const getButtonPositionStyle = (position) => {
    const positions = {
      'top left': { top: 10, left: 10 },
      'top right': { top: 10, right: 10 },
      'center center': { top: '50%', left: '50%', transform: [{ translateX: -50 }, { translateY: -10 }] },
      'center left': { top: '50%', left: 10, transform: [{ translateY: -10 }] },
      'center right': { top: '50%', right: 10, transform: [{ translateY: -10 }] },
      'bottom left': { bottom: 10, left: 10 },
      'bottom right': { bottom: 10, right: 10 },
      'bottom center': { bottom: 10, left: '50%', transform: [{ translateX: -50 }] },
    };
    return positions[position] || positions['bottom center'];
  };

  // Animation Style
  const slideAnimationStyle = {
    opacity: animationValue,
  };

  return (
    <View style={[styles.card, { height, backgroundColor: module.backgroundColor || '#fff' }]}>
      {/* Slide */}
      <Animated.View style={[styles.slide, slideAnimationStyle]}>
        {loading && <ActivityIndicator size="large" color="#999" />}
        <Image
          source={slide.image}
          style={[styles.image, { height }]}
          onLoad={() => setLoading(false)}
        />
        {!loading && slide.buttonText && slide.buttonLink && (
          <TouchableOpacity
            style={[styles.button, getButtonPositionStyle(slide.buttonPosition)]}
            onPress={() => console.log(`Navigating to ${slide.buttonLink}`)}
          >
            <Text style={styles.buttonText}>{slide.buttonText}</Text>
          </TouchableOpacity>
        )}
      </Animated.View>

      {/* Navigation Arrows */}
      <View style={styles.arrowContainer}>
        {currentSlide > 0 && (
          <TouchableOpacity style={styles.arrowLeft} onPress={goToPrevSlide}>
            <Text style={styles.arrowText}>◀</Text>
          </TouchableOpacity>
        )}
        {currentSlide < slides.length - 1 && (
          <TouchableOpacity style={styles.arrowRight} onPress={goToNextSlide}>
            <Text style={styles.arrowText}>▶</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: '100%', // Takes full row
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  arrowContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowLeft: {
    position: 'absolute',
    left: 10,
  },
  arrowRight: {
    position: 'absolute',
    right: 10,
  },
  arrowText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CardSlideShowWithAnimation;

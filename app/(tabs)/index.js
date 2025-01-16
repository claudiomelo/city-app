import { View, Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Header from '../../components/Header';
import ModulesGrid from '../../components/ModulesGrid';
import { Button } from 'react-native-paper';

export default function HomeScreen() {


  const availableModules = {
    module1: {
      cardType: 'CardSimple',
      title: 'Serviços Urbanos',
      description: 'Solicite serviços para sua região',
      cardSize: '1',
      backgroundColor: '#F0F4C3',
      backgroundImage: null,
      enabled: true,
      visible: true,
      modulePage: '/pages/servicosUrbanos',
      notEnabledMessage: 'Este módulo não está habilitado.',
      icon: require('@/assets/images/servicos-urbanos-1.png'),
    },
    module2: {
      cardType: 'CardSimple',
      title: 'Serviços Rurais',
      description: 'Atendimento para zona rural',
      cardSize: '2',
      backgroundColor: '#C8E6C9',
      backgroundImage: null,
      enabled: true,
      visible: true,
      modulePage: '/servicos-rurais',
      notEnabledMessage: 'Este módulo não está habilitado.',
      icon: require('@/assets/images/servicos-rurais-2.png'),
    },
    module3: {
      cardType: 'CardSimple',
      title: 'Serviços de Saúde',
      description: 'Encontre clínicas e postos de saúde',
      cardSize: '2',
      backgroundColor: '#B2EBF2',
      backgroundImage: null,
      enabled: true,
      visible: true,
      modulePage: '/servicos-saude',
      notEnabledMessage: 'Este módulo não está habilitado.',
      icon: require('@/assets/images/servicos-saude.png'),
    },
    module4: {
      cardType: 'CardSimple',
      title: 'Escolas',
      description: 'Localize escolas municipais',
      cardSize: '2',
      backgroundColor: '#BBDEFB',
      backgroundImage: null,
      enabled: true,
      visible: true,
      modulePage: '/pages/escolas',
      notEnabledMessage: 'Este módulo não está habilitado.',
      icon: require('@/assets/images/servicos-escolas.png'),
    },
    module5: {
      cardType: 'CardSimple',
      title: 'Eventos',
      description: 'Solicitação de espaços para eventos',
      cardSize: '2',
      backgroundColor: '#D1C4E9',
      backgroundImage: null,
      enabled: true,
      visible: true,
      modulePage: '/eventos',
      notEnabledMessage: 'Este módulo não está habilitado.',
      icon: require('@/assets/images/evento.png'),
    },
    module6: {
      cardType: 'CardSlideShowWithAnimation',
      title: 'Destaques',
      backgroundColor: '#F4F4F4',
      enabled: true,
      visible: true,
      animationDuration: 1500, // 1.5 segundos para animação
      animationEffect: 'slide', // "fade" ou "slide"
      intervalDuration: 7000, // 7 segundos entre slides
      slides: {
        slide1: {
          image: require('@/assets/images/slide1.png'),
          buttonText: 'Saiba Mais',
          buttonLink: '/destaque1',
          buttonPosition: 'bottom center',
        },
        slide2: {
          image: require('@/assets/images/slide2.png'),
          buttonText: 'Explore Mais',
          buttonLink: '/destaque2',
          buttonPosition: 'top right',
        },
        slide3: {
          image: require('@/assets/images/slide3.png'),
          buttonText: 'Ver Detalhes',
          buttonLink: '/destaque3',
          buttonPosition: 'center center',
        },
      },
    }    
  };

  return (
    <View style={styles.container}>
      <Header/>
      <ModulesGrid modules={availableModules} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 30,
  },
});
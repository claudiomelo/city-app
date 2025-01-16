import { ScrollView, View, StyleSheet, Text } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ModulesGrid from '../../components/ModulesGrid';

export default function ServicosUrbanos() {
    const availableModules = {
        module1: {
          cardType: 'CardSimple',
          title: 'IPTU',
          description: 'Acessar IPTU',
          cardSize: '2',
          backgroundColor: '#FF7F7F',
          backgroundImage: null,
          enabled: true,
          visible: true,
          modulePage: '/pages/servicosUrbanosIPTU',
          notEnabledMessage: 'Este módulo não está habilitado.',
        },
        module2: {
          cardType: 'CardSimple',
          title: 'Prestação de Contas',
          description: 'Acessar Prestação de Contas',
          cardSize: '2',
          backgroundColor: '#ADD8E6',
          backgroundImage: null,
          enabled: true,
          visible: true,
          modulePage: '/pages/servicosPrestacaoContas',
          notEnabledMessage: 'Este módulo não está habilitado.',
        },
        module3: {
          cardType: 'CardSimple',
          title: 'Nota Fiscal Eletronica',
          description: 'Acessar Nota Fiscal Eletronica',
          cardSize: '2',
          backgroundColor: '#90EE90',
          backgroundImage: null,
          enabled: true,
          visible: true,
          modulePage: '/pages/servicosNotaFiscalEletronica',
          notEnabledMessage: 'Este módulo não está habilitado.',
        },
        module4: {
          cardType: 'CardSimple',
          title: 'Portal do Contribuinte',
          description: 'Acessar Portal do Contribuinte',
          cardSize: '2',
          backgroundColor: '#FFB6C1',
          backgroundImage: null,
          enabled: true,
          visible: true,
          modulePage: '/pages/servicosPortalContribuinte',
          notEnabledMessage: 'Este módulo não está habilitado.',
        },
        module5: {
          cardType: 'CardVideoPlay',
          enabled: true,
          visible: true,
          videoUrl: 'https://dormentes.escolas.conectaprefeituras.com/videos/video-dormentes.mp4'
        },
    };
    
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
                <ModulesGrid modules={availableModules} />
            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      top: 30,
    },
    scrollView: {
      padding: 10,
    },
    schoolTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'left',
      color: '#444',
    },
    extraSpace: {
      height: 70, // Espaço extra no final do conteúdo
    },
  });

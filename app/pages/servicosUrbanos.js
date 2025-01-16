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
          cardSize: '1',
          backgroundColor: '#EAF8E6',
          backgroundImage: null,
          enabled: true,
          visible: true,
          modulePage: '/pages/servicosUrbanosIPTU',
          notEnabledMessage: 'Este módulo não está habilitado.',
        }
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

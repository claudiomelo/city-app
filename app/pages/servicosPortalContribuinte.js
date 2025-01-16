import { View, StyleSheet } from 'react-native';

import DefaultWebView from '../../components/DefaultWebView';
import Footer from '@/components/Footer';

export default function ServicosUrbanosIPTU() {
  return (
    <View style={styles.container}>
      <DefaultWebView 
        url='https://www.dormentes.pe.gov.br/servicos/portal-do-contribuinte'
      />
        <Footer />
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
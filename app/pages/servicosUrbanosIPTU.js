import { View, StyleSheet } from 'react-native';

import DefaultWebView from '../../components/DefaultWebView';
import Footer from '@/components/Footer';

export default function ServicosUrbanosIPTU() {
  return (
    <View style={styles.container}>
      <DefaultWebView 
        url='http://tributos.aossoftware.com.br:8017/servicosweb/home.jsf'
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
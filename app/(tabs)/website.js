import { View, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import DefaultWebView from '../../components/DefaultWebView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Dormentes - PE"
        imageSource={require('@/assets/images/react-logo.png')}
      />

      <DefaultWebView/>
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
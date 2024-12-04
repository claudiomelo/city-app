import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const DefaultWebView = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.dormentes.pe.gov.br/servicos/iptu' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DefaultWebView;

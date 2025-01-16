import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Footer from '@/components/Footer'; // Import Footer

export default function TestPage() {
  return (
    <View style={styles.container}>
        <Header />
        <Text style={styles.text}>Test Page from Pages Directory</Text>
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

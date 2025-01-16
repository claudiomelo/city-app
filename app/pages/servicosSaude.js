import { ScrollView, View, StyleSheet, Text } from 'react-native';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HospitaisPostosClinicasCard from '@/components/HospitaisPostosClinicasCard';

export default function servicosSaude() {
    const servicosSaude = [
        {
          "title": "Hospital Municipal Nossa Senhora da Paz",
          "address": "Rua José Clementino Coelho Rodrigues, 60",
          "neighborhood": "Centro",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "(81) 3865-1429",
          "horarioFuncionamento": "Atendimento contínuo 24 horas por dia, incluindo sábados, domingos e feriados"
        },
        {
          "title": "UBS Albertina Cristina de Macedo",
          "address": "Travessa Antônio Salustiano, 107",
          "neighborhood": "Centro",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "(87) 3865-1429",
          "horarioFuncionamento": "Segunda a sexta-feira, das 07:00 às 17:00"
        },
        {
          "title": "UBS Terezinha Coelho de Macedo",
          "address": "Rua F, 20",
          "neighborhood": "Loteamento Francisca Irene",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "",
          "horarioFuncionamento": "Segunda a sexta-feira, das 07:00 às 17:00"
        },
        {
          "title": "UBS José Severiano de Macedo",
          "address": "Rua Vila Nova, 16",
          "neighborhood": "Povoado de Vila Nova",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "",
          "horarioFuncionamento": ""
        },
        {
          "title": "UBS Marcelino Francisco de Macedo",
          "address": "Avenida 01, 22",
          "neighborhood": "Povoado de Caatinga Grande",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "",
          "horarioFuncionamento": ""
        },
        {
          "title": "UBS Joana Andrelina de Macedo",
          "address": "Rua Manoel Coelho de Macedo, 40",
          "neighborhood": "Dedé Damasceno",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "",
          "horarioFuncionamento": ""
        },
        {
          "title": "UBS Ozeas Otaviano de Souza",
          "address": "Povoado de Lagoa de Fora, 16",
          "neighborhood": "Zona Rural",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "",
          "horarioFuncionamento": ""
        },
        {
          "title": "UBS Ângelo Pereira Júnior",
          "address": "Rua do Cemitério, 01",
          "neighborhood": "Povoado de Lagoas",
          "cep": "56355-000",
          "cityUF": "Dormentes, PE",
          "phone": "",
          "horarioFuncionamento": ""
        }
    ];

    return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
        <Text style={styles.title}>Hospitais e Postos de Saúde</Text>
        {servicosSaude.map((servicoSaude, index) => (
          <HospitaisPostosClinicasCard
            key={index}
            title={servicoSaude.title}
            address={servicoSaude.address}
            neighborhood={servicoSaude.neighborhood}
            cep={servicoSaude.cep}
            cityUF={servicoSaude.cityUF}
            phone={servicoSaude.phone}
          />
        ))}
        <View style={styles.extraSpace} />
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
  title: {
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

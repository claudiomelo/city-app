import { ScrollView, View, StyleSheet, Text } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { IconSymbol } from '@/components/ui/IconSymbol';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollapseSimple from '@/components/CollapseSimple';
import SchoolCard from '@/components/SchoolCard';

export default function SchoolsList() {
  const schools = [
    {
      title: "Creche Albuino Bezerra Soares",
      address: "Rua B, 35",
      neighborhood: "Josias Elpidio Rodrigues",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Francisco Coelho de Macedo",
      address: "Rua Francisco Coelho de Macedo, S/N",
      neighborhood: "Centro",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "(87) 3865-1495",
    },
    {
      title: "Escola Municipal Bartolomeu Barbosa",
      address: "Sítio Lagoa da Boa Vista, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Isaquiel Onofre da Silva",
      address: "Vila São Domingos, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Antônio Mendes de Souza",
      address: "Sítio Baixa do Caminho Velho, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Manoel Batista da Silva",
      address: "Sítio Botão de Seda, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Nossa Senhora do Carmo",
      address: "Sítio Morrinho, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Paulo Valentino",
      address: "Sítio Lagoinha, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Santa Helena",
      address: "Vila Mudubim, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal João Carlos Barbosa",
      address: "Sítio Malhada da Pedra, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal José Zuca da Silva",
      address: "Avenida Principal Vila Nova, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "(87) 99601-0413",
    },
    {
      title: "Escola Municipal Juscelino Kubitschek",
      address: "Avenida Central Caatinga Grande, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Maurício José Rolim Cavalcanti",
      address: "Rua Agostinho Jubilino de Macedo, S/N",
      neighborhood: "Centro",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "(87) 3865-1408",
    },
    {
      title: "Escola Municipal Maximiano Rodrigues Macedo",
      address: "Vila Lagoa de Fora, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal Nossa Senhora de Fátima",
      address: "Avenida Principal Distrito Monte Orebe, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal João Malaquias Nunes",
      address: "Vila São Bento, Zona Rural",
      neighborhood: "Zona Rural",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "",
    },
    {
      title: "Escola Municipal de Lagoas",
      address: "Distrito Lagoas, Zona Rural",
      neighborhood: "Centro",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "(87) 3989-5033",
    },
    {
      title: "Escola Nossa Senhora das Graças",
      address: "Rua do Colégio, S/N",
      neighborhood: "Zona Rural Povoado Vila de Lagoas",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "(87) 3989-5033",
    },
    {
      title: "Escola de Referência em Ensino Médio Senador Nilo Coelho",
      address: "Rua Jacob Vieira de Carvalho, S/N",
      neighborhood: "Loteamento Novo Dormentes",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "(87) 3865-1300",
    },
    {
      title: "Centro Educacional Despertar",
      address: "Rua Antônio Salustriano, 90",
      neighborhood: "Dede Damasceno",
      cep: "56355-000",
      cityUF: "Dormentes, PE",
      phone: "(87) 3865-1704",
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
        <Text style={styles.schoolTitle}>ESCOLAS</Text>
        {schools.map((school, index) => (
          <SchoolCard
            key={index}
            title={school.title}
            address={school.address}
            neighborhood={school.neighborhood}
            cep={school.cep}
            cityUF={school.cityUF}
            phone={school.phone}
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

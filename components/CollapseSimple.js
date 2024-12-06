import React from 'react';
import { StyleSheet } from 'react-native'; // Ensure StyleSheet is imported
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';

const CollapseSimple = ({ title, address, neighborhood, cep, cityUF, phone }) => {
  return (
    <Collapsible style={styles.collapsible} title={title || "School 1"}>
        <ThemedText>
            <ThemedText>{address}</ThemedText>
        </ThemedText>

        <ThemedText>
            <ThemedText>{neighborhood}</ThemedText>
        </ThemedText>

        <ThemedText>
            <ThemedText>CEP: {cep}</ThemedText>
        </ThemedText>

        <ThemedText>
            <ThemedText>{cityUF}</ThemedText>
        </ThemedText>

        <ThemedText>
            <ThemedText>Telefone: {phone}</ThemedText>
        </ThemedText>
      <ExternalLink href="https://escolas.com.br/creche-albuino-bezerra-soares-26189518">
        <ThemedText type="link">Mais detalhes</ThemedText>
      </ExternalLink>
    </Collapsible>
  );
};

const styles = StyleSheet.create({
  collapsible: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default CollapseSimple;

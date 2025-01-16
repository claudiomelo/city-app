import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const CardVideoPlay = ({ videoUrl }) => {
  return (
    <View style={styles.card}>
      <Video
        source={{ uri: videoUrl }} // URL do vídeo
        style={styles.video}        // Estilo do vídeo
        resizeMode="cover"          // Ajusta como o vídeo será redimensionado
        repeat                      // Faz o vídeo rodar em loop
        muted                       // Silencia o áudio
        controls                    // Exibe controles de reprodução
        onError={(error) => console.error('Erro ao carregar vídeo:', error)} // Log de erros
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',         // Ajusta o cartão para preencher a largura do contêiner
    height: 300,           // Altura do cartão (ajuste conforme necessário)
    borderRadius: 10,      // Bordas arredondadas
    overflow: 'hidden',    // Evita que o vídeo ultrapasse as bordas
    marginBottom: 15,      // Espaçamento inferior
    backgroundColor: '#000', // Fundo preto para melhor visibilidade
  },
  video: {
    width: '100%',         // O vídeo preenche toda a largura do cartão
    height: '100%',        // O vídeo preenche toda a altura do cartão
  },
});

export default CardVideoPlay;
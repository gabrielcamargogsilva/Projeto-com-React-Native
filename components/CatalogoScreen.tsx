import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Pressable, 
  ScrollView,
  Linking // Importa a API Linking para abrir URLs
} from "react-native";
import catalogo from "../catalogo.json";

// O componente principal da sua tela de catálogo.
// Ele gerencia a exibição da playlist ou das informações do artista.
export default function CatalogoScreen() {
  // Define os caminhos das imagens que serão usadas no app.
  const capaMusica = require("../assets/images/capa_kayblack.jpg");
  const fotoArtista = require("../assets/images/kayblack_foto.jpg");

  // 'useState' é um hook do React que cria uma variável de estado.
  const [showSobre, setShowSobre] = useState(false);

  // Informações mais detalhadas sobre o artista.
  const biografia = "KayBlack, nome artístico de Kaique Menezes, é uma das maiores revelações do trap e R&B brasileiro. Nascido em São Paulo, ele se destacou com sua voz melódica e letras que exploram temas de amor, desilusão e a realidade das ruas. Sua música é uma fusão única de trap melódico, R&B e influências do drill, criando um som autêntico que ressoa com a juventude. O álbum 'Contradições', lançado em 2023, solidificou sua posição como um artista versátil e influente no cenário musical, com hits como 'Melhor Só' e 'Sal e Pimenta' que se tornaram virais. Sua jornada é um testemunho de seu talento e capacidade de conectar com o público de forma profunda e genuína.";

  // Função para abrir o link da música no YouTube Music.
  const handlePress = (link) => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log(`Não é possível abrir o URL: ${link}`);
      }
    });
  };

  return (
    // O 'ScrollView' agora envolve todo o conteúdo, incluindo a lista de músicas,
    // para permitir a rolagem.
    <ScrollView style={styles.container}>
      
      {/* Cabeçalho da playlist */}
      <View style={styles.headerBox}>
        <Image source={capaMusica} style={styles.playlistImage} />
        <View style={styles.headerTextBox}>
          <Text style={styles.tituloPrincipal}>🎶 Playlist</Text>
          <Text style={styles.playlistTitle}>Contradições</Text>
          <Text style={styles.playlistArtist}>KayBlack</Text>
        </View>
      </View>

      {/* Contêiner para os botões de navegação */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.toggleButton, !showSobre && styles.activeButton]}
          onPress={() => setShowSobre(false)}
        >
          <Text style={!showSobre ? styles.activeButtonText : styles.toggleButtonText}>
            Músicas
          </Text>
        </Pressable>
        <Pressable
          style={[styles.toggleButton, showSobre && styles.activeButton]}
          onPress={() => setShowSobre(true)}
        >
          <Text style={showSobre ? styles.activeButtonText : styles.toggleButtonText}>
            Sobre o Artista
          </Text>
        </Pressable>
      </View>

      {/* Renderização Condicional */}
      {showSobre ? (
        // Tela 'Sobre o Artista'
        <View style={styles.sobreBox}>
          <Image source={fotoArtista} style={styles.artistaImage} />
          <Text style={styles.artistaNome}>KayBlack</Text>
          <Text style={styles.artistaDescricao}>
            {biografia}
          </Text>
        </View>
      ) : (
        // Substituímos a FlatList por um View que contém o .map()
        <View>
          {/*
            O método '.map()' itera sobre cada item do array 'catalogo'.
            Para cada 'item' no array, ele retorna o JSX (o código visual)
            que você quer exibir.
          */}
          {catalogo.map((item) => (
            // A 'key' é essencial quando se usa .map() para listas,
            // pois ajuda o React a identificar cada elemento e otimizar a renderização.
            <View key={item.id} style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardInfo}>
                  <Image source={capaMusica} style={styles.musicaImage} />
                  <View style={styles.textBox}>
                    <Text style={styles.titulo}>{item.titulo}</Text>
                    <Text style={styles.subtitulo}>{item.subtitulo}</Text>
                    <Text style={styles.ano}>{item.ano}</Text>
                  </View>
                </View>
                {/* Botão de Reprodução */}
                <Pressable 
                  style={styles.playButton} 
                  onPress={() => handlePress(item.link)} 
                >
                  <Text style={styles.playButtonText}>▶ Reproduzir</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#0A0A0A", 
    padding: 20 
  },

  // Estilos do Cabeçalho da Playlist
  headerBox: {
    flexDirection: "row",
    backgroundColor: "#1C1C1C",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  playlistImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 10, 
    marginRight: 20 
  },
  headerTextBox: { 
    flex: 1 
  },
  tituloPrincipal: { 
    fontSize: 18, 
    fontWeight: "600", 
    color: "#B0B0B0", 
    marginBottom: 4 
  },
  playlistTitle: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#E0E0E0", 
    marginBottom: 4 
  },
  playlistArtist: { 
    fontSize: 18, 
    color: "#888" 
  },

  // Estilos dos Botões de navegação
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "#1C1C1C",
    padding: 5,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 12,
  },
  toggleButtonText: { 
    color: "#888", 
    fontSize: 16, 
    fontWeight: "600" 
  },
  activeButton: { 
    backgroundColor: "#2C2C2C" 
  }, 
  activeButtonText: { 
    color: "#fff", 
    fontWeight: "bold" 
  }, 

  // Estilos dos Cards da lista de músicas
  card: {
    backgroundColor: "#1C1C1C",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  cardContent: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  musicaImage: { 
    width: 60, 
    height: 60, 
    borderRadius: 8, 
    marginRight: 15 
  },
  textBox: { 
    flexShrink: 1,
  },
  titulo: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#E0E0E0" 
  },
  subtitulo: { 
    fontSize: 14, 
    color: "#B0B0B0", 
    marginTop: 4 
  },
  ano: { 
    fontSize: 12, 
    color: "#888", 
    marginTop: 2 
  },

  // Estilos do Botão de Reprodução
  playButton: {
    backgroundColor: "#fff", 
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  playButtonText: {
    color: "#000", 
    fontWeight: "bold",
    fontSize: 14,
  },

  // Estilos da Seção 'Sobre o Artista'
  sobreBox: {
    alignItems: "center",
    padding: 25,
    backgroundColor: "#1C1C1C",
    borderRadius: 15,
  },
  artistaImage: { 
    width: 180, 
    height: 180, 
    borderRadius: 90, 
    marginBottom: 20, 
    borderWidth: 3, 
    borderColor: "#333" 
  },
  artistaNome: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#E0E0E0", 
    marginBottom: 10 
  },
  artistaDescricao: { 
    fontSize: 15, 
    color: "#B0B0B0", 
    textAlign: "center", 
    lineHeight: 22 
  },
});
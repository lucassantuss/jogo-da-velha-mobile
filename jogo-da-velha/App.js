import { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StatusBar } from 'react-native';
import styles from './styles';

// Lucas Araujo dos Santos
// 081210009
// EC10
const COMBINACOES_VITORIA = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function verificarVencedor(tabuleiro) {
  for (const [a, b, c] of COMBINACOES_VITORIA) {
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      return { vencedor: tabuleiro[a], linha: [a, b, c] };
    }
  }
  return null;
}

export default function App() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [vezDoX, setVezDoX] = useState(true);

  const resultado = useMemo(() => verificarVencedor(tabuleiro), [tabuleiro]);
  const empate = useMemo(
    () => !resultado && tabuleiro.every((x) => x !== null),
    [resultado, tabuleiro]
  );

  function jogar(indice) {
    if (tabuleiro[indice] || resultado) return;
    setTabuleiro((anterior) => {
      const copia = [...anterior];
      copia[indice] = vezDoX ? 'X' : 'O';
      return copia;
    });
    setVezDoX((anterior) => !anterior);
  }

  function novoJogo() {
    setTabuleiro(Array(9).fill(null));
    setVezDoX(true);
  }

  const textoStatus = resultado
    ? `Vitória de ${resultado.vencedor}!`
    : empate
    ? 'Deu velha (empate)!'
    : `Vez do jogador: ${vezDoX ? 'X' : 'O'}`;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.titulo}>Jogo da Velha</Text>
      <Text style={styles.status}>{textoStatus}</Text>

      <View style={styles.tabuleiro}>
        {tabuleiro.map((celula, i) => {
          const celulaVencedora = resultado?.linha?.includes(i);
          return (
            <Pressable
              key={i}
              onPress={() => jogar(i)}
              style={({ pressed }) => [
                styles.celula,
                celulaVencedora && styles.celulaVencedora,
                pressed && !celula && !resultado && styles.celulaPressionada,
                (i % 3 !== 2) && styles.bordaDireita,
                i < 6 && styles.bordaInferior,
              ]}
            >
              <Text style={[styles.textoCelula, celula === 'X' ? styles.textoX : styles.textoO]}>
                {celula}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable style={styles.botao} onPress={novoJogo}>
        <Text style={styles.textoBotao}>Novo Jogo</Text>
      </Pressable>

      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>Lucas Araujo (081210009)</Text>
      </View>
    </SafeAreaView>
  );
}

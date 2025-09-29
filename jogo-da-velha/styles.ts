import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#e2e8f0',
    marginTop: 8,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  status: {
    fontSize: 16,
    color: '#cbd5e1',
    marginBottom: 24,
  },
  tabuleiro: {
    width: 320,
    aspectRatio: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#111827',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  celula: {
    width: '33.3333%',
    height: '33.3333%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2937',
  },
  celulaPressionada: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  celulaVencedora: {
    backgroundColor: '#064e3b',
  },
  bordaDireita: {
    borderRightWidth: 2,
    borderRightColor: '#0ea5e9',
  },
  bordaInferior: {
    borderBottomWidth: 2,
    borderBottomColor: '#0ea5e9',
  },
  textoCelula: {
    fontSize: 56,
    fontWeight: '900',
    lineHeight: 60,
  },
  textoX: {
    color: '#f97316',
  },
  textoO: {
    color: '#38bdf8',
  },
  botao: {
    marginTop: 24,
    backgroundColor: '#0ea5e9',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  textoBotao: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  rodape: {
    marginTop: 12,
  },
  textoRodape: {
    color: '#94a3b8',
    fontSize: 12,
  },
});

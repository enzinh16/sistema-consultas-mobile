import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.xpto}>2CCA</Text>
      <Text style={styles.subtitulo}>Marcação de Consultas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpto: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    // fontFamily: 'arial'
  },
  subtitulo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});


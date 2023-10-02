import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarList from './components/CarList';



export default function App() {
  return (
    <View style={styles.Container}>
      <CarList />
     <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


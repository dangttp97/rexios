import { View, StyleSheet } from 'react-native';
import { NetworkProvider } from 'react-native-rexios';

export default function App() {
  return (
    <NetworkProvider>
      <View style={styles.container} />
    </NetworkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { View, StyleSheet } from 'react-native';
import { configureClient, type RequestClient } from '@rexios/core';
import { RexiosProvider } from '@rexios/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const client = configureClient();

const Root = () => {
  return <View style={styles.container} />;
};

export default function App() {
  return (
    <Provider store={store}>
      <RexiosProvider client={client as unknown as RequestClient}>
        <Root />
      </RexiosProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

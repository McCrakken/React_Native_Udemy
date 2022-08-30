import { StyleSheet, Text, View } from 'react-native';

// App is the default root component of an expo app
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>\
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#F00'
  }
});

import { Redirect } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Redirect href="/(cliente)" />
    </PaperProvider>
    
  );
}
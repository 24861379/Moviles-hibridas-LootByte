import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
const colorScheme = useColorScheme();

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
    
  );
}

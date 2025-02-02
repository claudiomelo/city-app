import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          {/* Rotas principais */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />

          {/* Adicionando rotas da pasta "pages" manualmente */}
          <Stack.Screen
            name="pages/escolas"
            options={{
              title: 'escolas',
              headerShown: false, // Desabilita o header padrão
            }}
          />

          <Stack.Screen
            name="pages/servicosSaude"
            options={{
              title: 'Hospitais, Postos, Clinicas ',
              headerShown: false, // Desabilita o header padrão
            }}
          />

          <Stack.Screen
            name="pages/servicosUrbanos"
            options={{
              title: 'servicosUrbanos',
              headerShown: false, // Desabilita o header padrão
            }}
          />

          <Stack.Screen
            name="pages/servicosUrbanosIPTU"
            options={{
              title: 'IPTU',
              headerShown: false, // Desabilita o header padrão
            }}
          />

          <Stack.Screen
            name="pages/escola"
            options={{
              title: 'Esola',
              headerShown: false, // Desabilita o header padrão
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}

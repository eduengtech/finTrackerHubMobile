/**
 * Root Layout
 * 
 * Componente raiz que envolve toda a aplicação
 * Aqui você coloca: tema global, providers, etc
 */

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {/* Define a estrutura de telas */}
    </Stack>
  );
}

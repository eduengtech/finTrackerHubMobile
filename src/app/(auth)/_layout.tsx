/**
 * Auth Layout
 * 
 * Layout específico para telas de autenticação
 * Sem header, tema específico de auth, etc
 */

import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {/* Rotas de auth aqui */}
    </Stack>
  );
}

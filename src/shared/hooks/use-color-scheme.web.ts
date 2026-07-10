import { useEffect, useState } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";

export const useColorScheme = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // Usar callback para evitar setState síncrono
    const timer = setTimeout(() => {
      setHasHydrated(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const colorScheme = useRNColorScheme();

  if (!hasHydrated) {
    return null;
  }

  return colorScheme;
};

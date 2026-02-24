# MyApp - React Native Project

Um projeto React Native estruturado com navegação por abas, prontoparaiOS 13+ e Android.

## 📋 Estrutura do Projeto

```
MyApp/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   └── Button.tsx
│   ├── screens/          # Telas do app
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── navigation/       # Configuração de navegação
│   │   └── BottomTabNavigator.tsx
│   ├── services/         # Serviços de API e dados
│   │   └── api.ts
│   ├── hooks/            # Custom Hooks
│   │   └── useApi.ts
│   └── utils/            # Funções utilitárias
│       └── constants.ts
├── assets/               # Imagens, fontes e outros assets
├── App.tsx               # Componente raiz
├── index.js              # Entry point
├── package.json
├── tsconfig.json
├── babel.config.js
└── app.json

```

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js 16+
- npm ou yarn
- Xcode (para iOS)
- Android Studio (para Android)

### Instalação

1. **Clone ou entre na pasta do projeto:**
```bash
cd MyApp
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Para iOS:**
```bash
npm run ios
```

4. **Para Android:**
```bash
npm run android
```

## 📦 Dependências Principais

- **React Native** - Framework mobile
- **React Navigation** - Sistema de navegação
- **Axios** - Cliente HTTP
- **TypeScript** - Tipagem estática

## 🎨 Personalizações

### Adicionar Nova Tela

1. Crie um arquivo em `src/screens/NovaTela.tsx`:
```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function NovaTela() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tela</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

2. Importe em `src/navigation/BottomTabNavigator.tsx` e adicione um `Tab.Screen`

### Configurar API

Edite `src/services/api.ts`:
```typescript
const API_BASE_URL = 'sua-url-da-api';
```

## 📝 Licença

MIT

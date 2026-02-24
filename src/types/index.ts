// Tipos globais e interfaces reutilizáveis

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
}

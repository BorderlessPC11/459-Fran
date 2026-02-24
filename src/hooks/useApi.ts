import { useState, useEffect } from 'react';
import { apiService } from '@services/api';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any
): UseApiState<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        let response;

        switch (method) {
          case 'GET':
            response = await apiService.get(url);
            break;
          case 'POST':
            response = await apiService.post(url, body);
            break;
          case 'PUT':
            response = await apiService.put(url, body);
            break;
          case 'DELETE':
            response = await apiService.delete(url);
            break;
          default:
            response = await apiService.get(url);
        }

        if (isMounted) {
          setState({ data: response.data, loading: false, error: null });
        }
      } catch (error: any) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error.message || 'An error occurred',
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, method, body]);

  return state;
}

import toast from 'react-hot-toast';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (error: any) => {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            'something went wrong'
        );
      }
    },
    mutations: {
      onError: (error: any) => {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            'something went wrong'
        );
      }
    }
  }
});

export default queryClient;

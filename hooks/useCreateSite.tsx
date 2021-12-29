import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { createSite } from '../httpRequest/siteRequest';
import { ISite } from '../interfaces/ISite';

const useCreateSite = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(createSite, {
    onSuccess: () => {
      toast.success('Site Created!');
      queryClient.invalidateQueries('sites');
      router.replace('/');
    }
  });
};

export default useCreateSite;

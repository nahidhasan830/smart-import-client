import { useQuery } from 'react-query';
import { getAllSite } from '../httpRequest/siteRequest';

const useGetAllSite = () => {
  return useQuery('sites', getAllSite);
};

export default useGetAllSite;

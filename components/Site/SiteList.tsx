import useGetAllSite from '../../hooks/useGetAllSite';
import LoadingSpinner from '../UI/LoadingSpinner';
import SiteCard from './SiteCard';
import SiteLayout from './SiteLayout';

const SiteList = () => {
  const { isLoading, data } = useGetAllSite();

  let renderedContent: JSX.Element[] | JSX.Element = <p>No Site Found</p>;

  if (isLoading) renderedContent = <LoadingSpinner />;

  if (data && data.length > 0)
    renderedContent = data
      .reverse()
      .map(site => (
        <SiteCard
          key={site._id}
          name={site.name}
          latitude={site.latitude}
          longitude={site.longitude}
          description={site.description}
        />
      ));

  return <SiteLayout>{renderedContent}</SiteLayout>;
};

export default SiteList;

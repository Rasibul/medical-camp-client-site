import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxiosSecure from '../Hook/useAxiosSecure';

const useOrganizer = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOrganizer, setIsOrganizer] = useState(null);
  const [isOrganizerLoading, setIsOrganizerLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loading && user) {
          setIsOrganizerLoading(true);
          const res = await axiosSecure.get(`/api/v1/users/organizer/${user.email}`);
          setIsOrganizer(res.data?.organizer);
        }
      } catch (error) {
        // Handle errors if necessary
        console.error('Error fetching organizer data:', error);
      } finally {
        setIsOrganizerLoading(false);
      }
    };

    fetchData();
  }, [user, loading, axiosSecure]);

  return [isOrganizer, isOrganizerLoading];
};
export default useOrganizer;
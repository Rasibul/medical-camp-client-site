import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const usePopularCamp = () => {
    const axiosPublic = useAxiosPublic()
    const {data: popularCamp = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/api/v1/all-camp');
            return res.data;
        }
    })
    return [popularCamp,loading,refetch];
};

export default usePopularCamp;
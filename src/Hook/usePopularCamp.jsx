import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const usePopularCamp = () => {
    const axiosPublic = useAxiosPublic()
    // const [popularCamp, setPopularCamp] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('popular.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setPopularCamp(data)
    //             setLoading(false)
    //         })
    // }, [])
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
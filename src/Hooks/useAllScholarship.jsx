import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic";


const useAllScholarship = () => {

    const axiosPublic = useAxiosPublic();
    // const [allScholarship, setAllScholarship] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5001/allScholarship')
    //         .then(res => res.json())
    //         .then(data =>{
    //             setAllScholarship(data)
    //             setLoading(false)
    //         });
    // }, [])

    const {data: allScholarship = [], isPending: loading, refetch} = useQuery({
        queryKey: ['allScholarship'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/allScholarship');
            return res.data;
        }
    })

  return [allScholarship, loading, refetch]
}

export default useAllScholarship

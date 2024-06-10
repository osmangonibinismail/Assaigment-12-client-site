import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";


const useAllScholarship = (itemsPerPage, currentPage, search) => {

    const axiosPublic = useAxiosPublic();
    // const [itemsPerPage, setItemsPerPage] = useState(10);
    // const [currentPage, setCurrentPage] = useState(0);
    // const [allScholarship, setAllScholarship] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch(`https://assaigment-12-server.vercel.app/allScholarship?page=${currentPage}&size=${itemsPerPage}`)
    //         .then(res => res.json())
    //         .then(data =>{
    //             setAllScholarship(data)
    //         });
    // }, [])

    const {data: allScholarship = [], isPending: loading, refetch} = useQuery({
        queryKey: ['allScholarship', currentPage, itemsPerPage, search],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/allScholarships?page=${currentPage}&size=${itemsPerPage}&search=${search}`);
            return res.data;
        }
    })

  return [allScholarship, currentPage, itemsPerPage, search, loading, refetch]
}

export default useAllScholarship

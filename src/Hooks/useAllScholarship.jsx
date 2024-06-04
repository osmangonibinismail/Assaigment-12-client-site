import { useEffect, useState } from "react"


const useAllScholarship = () => {

    const [allScholarship, setAllScholarship] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5001/allScholarship')
            .then(res => res.json())
            .then(data =>{
                setAllScholarship(data)
                setLoading(false)
            });
    }, [])

  return [allScholarship, loading]
}

export default useAllScholarship

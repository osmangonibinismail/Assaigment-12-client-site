

import { useEffect, useState } from "react";


const useSingleScholarshipCart = (_id) => {

    const [allScholarship, setAllScholarship] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (_id) {
            fetch(`http://localhost:5001/allScholarship/${_id}`)
                .then(res => res.json())
                .then(data => {
                    setAllScholarship(data)
                    setLoading(false)
                });
        }
    }, [_id])

    return [allScholarship, loading]
}

export default useSingleScholarshipCart;

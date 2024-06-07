

// import { useEffect, useState } from "react";


// const useAllScholarshipCart = (_id) => {

//     const [allScholarship, setAllScholarship] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(`http://localhost:5001/allScholarship/${_id}`)
//             .then(res => res.json())
//             .then(data =>{
//                 setAllScholarship(data)
//                 setLoading(false)
//             });
//     }, [_id])

//   return [allScholarship, loading]
// }

// export default useAllScholarshipCart;

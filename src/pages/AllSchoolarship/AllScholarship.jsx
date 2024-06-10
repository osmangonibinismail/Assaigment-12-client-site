import { Helmet } from "react-helmet-async"
import useAllScholarship from "../../Hooks/useAllScholarship";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { useState } from "react";


const AllScholarship = () => {


    const count = useLoaderData();
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');
    // console.log(currentPage)
    const [allScholarship] = useAllScholarship(itemsPerPage, currentPage, search);
    // console.log(count)
    // const itemsPerPage = 10;
    const numberOfPages = Math.ceil(count.length / itemsPerPage);
    // console.log(numberOfPages)
    // const pages = []
    // for(let i = 0; i < numberOfPages; i++){
    //     pages.push(i)
    // }
    const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);
    // const { user } = useAuth();
    // const location = useLocation();
    // const axiosSecure = useAxiosSecure();
    // const navigate = useNavigate();
    // const [, refetch] = useCart();

    // const handleAddToCart = () => {
    //     if (user && user.email) {
    //         //send cart to the database
    //         const cartItem = {

    //             email: user.email,

    //         }
    //         axiosSecure.post('/scholarshipCart', cartItem)
    //             .then(res => {
    //                 console.log(res.data)
    //                 if (res.data.insertedId) {
    //                     Swal.fire({
    //                         position: "top-end",
    //                         icon: "success",
    //                         title: `successfully added to your scholarship`,
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     });
    //                     // refetch cart to update the cart items count
    //                     refetch();
    //                 }

    //             })
    //     }
    //     else {
    //         Swal.fire({
    //             title: "You are not Log in",
    //             text: "Please log in to add to the cart?",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Yes, Login!"
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 //   send the user to the login page
    //                 navigate("/login", { state: { from: location } })
    //             }
    //         });
    //     }
    // }

    // const popular = allScholarship.filter(item => item.category === 'popular');

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText);
        setSearch(searchText);
      }
    return (
        <>
            <Helmet>
                <title>OAI || All Scholarship</title>
            </Helmet>

            <div className="card-body align-center text-center">
                <form onSubmit={handleSearch}>
                    <div className="flex p-1 overflow-hidden  rounded-lg ">
                        <input
                            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline focus:placeholder-transparent"
                            type="text"
                            name="search"
                            placeholder="Scholarship Name or University name or Degree name" aria-label='Enter Food Name'
                        />
                        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/*  */}
                {
                    allScholarship?.map((p) => (
                        <div className="w-90  bg-base-100 shadow-2xl mt-6 mb-10">
                            <figure><img src={p.image} alt="Shoes" /></figure>
                            {/* <div className="divider"></div> */}
                            <div className="bg-gray-200">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">University Name:  {p.universityName}</h2>
                                </div>
                                <div className="ml-3 my-2">
                                    <h4 className=""><a className="font-semibold mr-2">Scholarship category: </a>{p.scholarshipCategory}</h4>
                                    <h4 className=""><a className="font-semibold mr-2">Subject Category: </a>{p.subjectCategory}</h4>
                                    <h4 className=""><a className="font-semibold mr-2">University location: </a>{p.universityCountry} {p.universityCity}</h4>
                                    <p><a className="font-semibold mr-2">Application Deadline: </a>{p.applicationDeadline}</p>
                                    <p><a className="font-semibold mr-2">Application Fees: </a>{p.applicationFees}</p>
                                    <h4 className=""><a className="font-semibold mr-2">Rating: </a>{p.rating}</h4>
                                </div>
                                <Link to={`/scholarshipCartDetails/${p._id}`}>
                                    <div className="card-actions justify-center p-6">
                                        <button className="btn btn-outline btn-info w-full">Scholarship Details</button>
                                    </div>
                                </Link>
                                <div className="card-actions justify-center p-6">

                                    {/* <button
                                        onClick={handleAddToCart} className="btn btn-outline btn-info w-full">details</button> */}

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="items-center text-center">
                <p>current page: {currentPage}</p>
                <button className="btn btn-square" onClick={handlePrevPage}>prev</button>
                {
                    pages.map(page => <button className={` btn btn-square ml-3 mr-3 mb-10 mt-5 gap-4   px-4 py-2 text-sm font-semibold  ${currentPage === page ? 'bg-green-500' : undefined}`}
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}</button>)
                }
                <button className="btn btn-square" onClick={handleNextPage}>next</button>
                <select className="bg-orange-600" onChange={handleItemsPerPage} value={itemsPerPage} name="" id="">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                </select>
            </div>
        </>
    )
}

export default AllScholarship

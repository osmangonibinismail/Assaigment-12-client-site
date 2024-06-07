import { Helmet } from "react-helmet-async"
import useAllScholarship from "../../Hooks/useAllScholarship";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";


const AllScholarship = () => {

    const [allScholarship] = useAllScholarship();
    const { user } = useAuth();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart to the database
            const cartItem = {
                
                email: user.email,

            }
            axiosSecure.post('/scholarshipCart', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `successfully added to your scholarship`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Log in",
                text: "Please log in to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    // const popular = allScholarship.filter(item => item.category === 'popular');

    return (
        <>
            <Helmet>
                <title>OAI || All Scholarship</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/*  */}
                {
                    allScholarship?.map((p) => (
                        <div className="w-90  bg-base-100 shadow-2xl mt-6 mb-10">
                            <figure><img src="https://i.ibb.co/GkTjR5P/login.png" alt="Shoes" /></figure>
                            {/* <div className="divider"></div> */}
                            <div className="bg-gray-200 mt-4">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">University Name:  {p.universityName}</h2>
                                </div>
                                <div className="ml-3 my-2">
                                    <h4 className=""><a className="font-semibold">Scholarship category: </a>{p.scholarshipCategory}</h4>
                                    <h4 className=""><a className="font-semibold mr-6">Subject Category: </a>{p.subjectCategory}</h4>
                                    <h4 className=""><a className="font-semibold">University location: </a></h4>
                                    <p><a className="font-semibold">Application Deadline: </a></p>
                                    <p><a className="font-semibold">Application Fees: </a></p>
                                    <h4 className=""><a className="font-semibold">Rating: </a></h4>
                                </div>
                                <div className="card-actions justify-center p-6">
                                    <Link to={`/scholarshipCartDetails/${p._id}`}>
                                        <button>details</button>
                                    </Link>
                                    <button
                                        onClick={handleAddToCart} className="btn btn-outline btn-info w-full">Scholarship Details</button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AllScholarship

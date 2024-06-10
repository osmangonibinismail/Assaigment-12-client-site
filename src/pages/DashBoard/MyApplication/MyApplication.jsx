import { FaEdit } from "react-icons/fa";
import useCart from "../../../Hooks/useCart"
import { MdAutoDelete, MdDeleteForever, MdReviews } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import AddReviewUser from "./AddReviewUser";
import ApplyDetails from "./ApplyDetails";


const MyApplication = () => {
    const [applicationCart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/scholarshipCart/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
    }
    return (
        <div className="">
            <div className="flex justify-evenly">
                <h2 className="text-2xl text-cyan-600">Total Scholarship Application: {applicationCart.length}</h2>
            </div>
            <div className="mt-6">
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-300 bg-gray-400">
                                <tr className="text-left">
                                    <th className="p-3">#</th>
                                    <th className="p-3">University Name</th>
                                    <th className="p-3">Address</th>
                                    <th className="p-3">Feedback</th>
                                    <th className="p-3">Subject Category</th>
                                    <th className="p-3">Applied Degree</th>
                                    <th className="p-3 ">Application Fees</th>
                                    <th className="p-3">Service Charge</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Details</th>
                                    <th className="p-3">Edit</th>
                                    <th className="p-3">Add Review</th>
                                    <th className="p-3">Cancel</th>
                                </tr>
                            </thead>
                            {
                                applicationCart?.map((p, index) => (
                                    <tbody>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 bg-green-200">
                                            <td className="p-3">
                                                <p>{index + 1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{p._id}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{p.email}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>Microsoft Corporation</p>
                                            </td>
                                            <td className="p-3">
                                                <p>14 Jan 2022</p>
                                                <p className="dark:text-gray-600">Friday</p>
                                            </td>
                                            <td className="p-3">
                                                <p>01 Feb 2022</p>
                                                <p className="dark:text-gray-600">Tuesday</p>
                                            </td>
                                            <td className="p-3">
                                                <p>$15,792</p>
                                            </td>
                                            <td className="p-3">
                                                <p>$15,792</p>
                                            </td>
                                            <td className="p-3">
                                                <p>pending</p>
                                            </td>
                                            <td className="p-3">
                                                <button className=""><ApplyDetails></ApplyDetails></button>
                                            </td>
                                            <td className="p-3">
                                                <button className="btn btn-sm bg-emerald-800 text-white"><FaEdit /></button>
                                            </td>
                                            <td className="p-3">
                                            <button className=""><AddReviewUser></AddReviewUser></button>

                                            </td>
                                            <td className="p-3">
                                                <button
                                                    onClick={() => handleDelete(p._id)}
                                                    className="btn btn-sm text-xl bg-red-600 text-white"><MdDeleteForever /></button>
                                            </td>

                                        </tr>
                                    </tbody>
                                ))
                            }

                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyApplication

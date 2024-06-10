import { MdDeleteForever } from "react-icons/md"
import useAllScholarship from "../../../Hooks/useAllScholarship"
import { FaEdit, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const ManageScholarship = () => {
    const [allScholarship, , refetch] = useAllScholarship();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/allScholarship/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // refetch to update the api
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.scholarshipName} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly mt-10 mb-5">
                <h2 className="text-3xl font-semibold text-cyan-600">Manage All Scholarship</h2>
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
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-300 bg-gray-400">
                                <tr className="text-left">
                                    <th className="p-3">#</th>
                                    <th className="p-3">Scholarship name</th>
                                    <th className="p-3">University Name</th>
                                    <th className="p-3">Subject Category</th>
                                    <th className="p-3">Applied Degree</th>
                                    <th className="p-3">Application Fees</th>
                                    <th className="p-3">Details</th>
                                    <th className="p-3">Update</th>
                                    <th className="p-3">Cancel</th>
                                </tr>
                            </thead>
                            {
                                allScholarship?.map((item, index) => (
                                    <tbody>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 bg-green-200">
                                            <td className="p-3">
                                                <p>{index + 1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.scholarshipName}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.universityName}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.subjectCategory}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.degree}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.applicationFees}</p>
                                            </td>
                                            <td className="p-3">
                                                <button
                                                    className="btn bg-orange-500">
                                                    <FaUsers className="text-white text-xl"></FaUsers>
                                                </button>
                                            </td>
                                            <td className="p-3">
                                                <Link to={`/dashboard/updateScholarship/${item._id}`}>
                                                    <button
                                                        className="btn btn-ghost btn-sm bg-orange-500">
                                                        <FaEdit className="text-white"></FaEdit>
                                                    </button>
                                                </Link>
                                            </td>
                                            {/*  */}
                                            <td className="p-3">
                                                <button
                                                    onClick={() => handleDeleteItem(item)}
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

export default ManageScholarship

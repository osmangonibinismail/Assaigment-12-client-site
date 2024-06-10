import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const ManageAllApplied = () => {
    const allData = useLoaderData() || [];
    const [allScholarshipCart, setAllScholarshipCart] = useState(allData);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetch(`https://assaigment-12-server.vercel.app/scholarshipCart`)
            .then(res => res.json())
            .then(data => {
                setAllScholarshipCart(data)
            });
    }, [])

    const handleDeleteUser = user => {
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
                    axiosSecure.delete(`/scholarshipCart/${user}`)
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
        <div>
            <div className="text-center mb-10">
                <p className="font-medium text-2xl text-[#ed2027]">All Applied Scholarship: {allScholarshipCart.length}</p>
                {/* <h1 className="text-2xl font-medium mt-2">What's People Say's</h1> */}
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
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-300 bg-gray-400">
                                <tr className="text-left">
                                    <th className="p-3">#</th>
                                    <th className="p-3">University Name</th>
                                    <th className="p-3">Scholarship Name</th>
                                    <th className="p-3">Scholarship Category</th>
                                    <th className="p-3">Subject Category</th>
                                    <th className="p-3">Applied Degree</th>
                                    <th className="p-3">Application Fees</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Cancel</th>
                                </tr>
                            </thead>
                            {
                                allScholarshipCart?.map((user, index) => (
                                    <tbody>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 bg-green-200">
                                            <td className="p-3">
                                                <p>{index + 1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.universityName}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.scholarshipCategory}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.subjectCategory}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.degree}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.applicantName}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.sscResult}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>pending</p>
                                            </td>


                                            <td className="p-3">
                                                <button
                                                    onClick={() => handleDeleteUser(user._id)}
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

export default ManageAllApplied

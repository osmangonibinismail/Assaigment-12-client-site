import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEdit, FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',);
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
                    axiosSecure.delete(`/users/${user}`)
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
            <div className="flex justify-evenly">
                <h2 className="text-2xl text-cyan-600">Total Users: {users.length}</h2>
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
                                    <th className="p-3">User Id</th>
                                    <th className="p-3">User Name</th>
                                    <th className="p-3">User Email</th>
                                    <th className="p-3">User Role</th>
                                    <th className="p-3">Cancel</th>
                                </tr>
                            </thead>
                            {
                                users?.map((user, index) => (
                                    <tbody>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 bg-green-200">
                                            <td className="p-3">
                                                <p>{index + 1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user._id}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.email}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.name}</p>
                                            </td>
                                            <td className="p-3">
                                                {user.role === 'admin' ? 'Admin' : <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn bg-orange-500">
                                                    <FaUsers className="text-white text-xl"></FaUsers>
                                                </button>}
                                            </td>
                                            {/* <td className="p-3">
                                                <details className="dropdown">
                                                    <summary className="m-1 btn ">open or close</summary>
                                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                        <li><a>Item 1</a></li>
                                                        <li><a>Item 2</a></li>
                                                    </ul>
                                                </details>
                                            </td> */}

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

export default AllUsers

import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";


const ModaratorProfile = () => {
    const { user } = useAuth();
    const allData = useLoaderData() || [];
    const [modarator, setModarator] = useState(allData);
    console.log(modarator)
      useEffect(() => {
        fetch(`http://localhost:5001/users/modarator/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setModarator(data)
            });
    }, [])

    return (
        <div className='card-body items-center text-center'>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-300 dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-600 dark:text-gray-600">{user?.email}</p>
                        <p className="px-5 text-xs sm:text-base text-gray-600 dark:text-gray-600">{modarator?.role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModaratorProfile

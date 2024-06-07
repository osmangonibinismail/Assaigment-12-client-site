import React from 'react'
import useAuth from '../../../Hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div className='card-center'>
            {/* <div className='flex gap-2 mt-10 mb-10'>
                <h2 className="text-3xl">Hi welcome</h2>
                <h2 className="text-3xl">{
                    user?.displayName ? user.displayName : 'Back'
                }</h2>
                <h2 className="text-3xl">Profile</h2>
            </div> */}
            {/*  */}
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-300 dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-600 dark:text-gray-600">{user?.email}</p>
                        {/* <p className="px-5 text-xs sm:text-base text-gray-600 dark:text-gray-600">{user?.role}</p> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfile

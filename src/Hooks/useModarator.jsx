
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useModarator = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isModarator, isPending: isModaratorLoading } = useQuery({
        queryKey: [user?.email, 'isModarator'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/modarator/${user.email}`);
            console.log(res.data);
            return res.data?.modarator;
        }
    })
    return [isModarator, isModaratorLoading]
}

export default useModarator

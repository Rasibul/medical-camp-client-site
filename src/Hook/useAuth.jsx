import { useContext } from "react";
import { AutheContext } from "../Component/Provider/AuthProvider";


const useAuth = () => {
    const all = useContext(AutheContext)
    return all
        
};

export default useAuth;
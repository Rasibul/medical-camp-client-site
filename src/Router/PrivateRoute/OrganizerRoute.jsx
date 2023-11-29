import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useOrganizer from "../../Hook/useOrganizer";




const OrganizerRoute = ({children}) => {
    const { user, loading } = useAuth()
    const [isOrganizer, isOrganizerLoading] = useOrganizer()
    const location = useLocation()

    if (loading || isOrganizerLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }


    if (user && isOrganizer) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default OrganizerRoute;
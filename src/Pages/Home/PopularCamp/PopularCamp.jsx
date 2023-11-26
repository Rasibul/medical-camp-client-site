import PopularCampCart from "../../../Component/PopularCampCart/PopularCampCart";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import usePopularCamp from "../../../Hook/usePopularCamp";


const PopularCamp = () => {
    const [popularCamp] = usePopularCamp()
    return (
        <div>
            <SectionTitle
                subHeading={"Choose your camp"}
                heading={"Popular Camp"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px] mx-auto">
                {
                    popularCamp.map(camp => <PopularCampCart key={camp._id} camp={camp}></PopularCampCart>)
                }
            </div>
        </div>
    );
};

export default PopularCamp;
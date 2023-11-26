

const PopularCampCart = ({ camp }) => {
    const { campName, image, campFees, scheduledDateTime, venueLocation, specializedServices, healthcareProfessionals, targetAudience } = camp || {}
    // console.log(camp)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body font-bold ">
                <h2 className="text-2xl">{campName}</h2>
                <div className="my-2">
                    <p>CampFee: ${campFees}</p>
                    <p className="">Venue: {venueLocation}</p>
                    <p className="">Time: {scheduledDateTime}</p>
                    <p className="">Services: {specializedServices.map(service => <span key={service}>{service}, </span>)}</p>
                    <p className="">Doctors: {healthcareProfessionals.map(doctor => <span key={doctor}>{doctor}, </span>)}</p>
                    <p className="">Audience: {targetAudience}</p>
                </div>
            </div>
            <div>
                <div className="card-actions justify-center gap-4 mb-2">
                    <button className="btn btn-warning">Join Camp</button>
                    <button className="btn btn-warning">Details</button>
                </div>
            </div>
        </div>

    )
};

export default PopularCampCart;
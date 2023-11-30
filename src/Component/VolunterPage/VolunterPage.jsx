import SectionTitle from "../SectionTitle/SectionTitle";

const VolunteerPage = () => {
    return (
        <>
            <SectionTitle
                subHeading={"join as volunteer"}
                heading={"Volunter Section"}
            ></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-[#4A5568]">Medical Staff</h2>
                            <p className="text-gray-700">
                                Join our medical team and contribute your skills to provide healthcare services to the community during the camp.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-[#4A5568]">Event Logistics</h2>
                            <p className="text-gray-700">
                                Help with the organization and coordination of the medical camp logistics, ensuring a smooth and efficient event.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-[#4A5568]">Community Outreach</h2>
                            <p className="text-gray-700">
                                Engage with the community, spread awareness about the medical camp, and assist with outreach programs.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card w-full bg-primary text-primary-content text-center mt-6 mb-8">
                <div className="card-body">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-[#4A5568]">How to Get Involved</h2>
                        <p className="text-gray-700">
                            Ready to make a difference? Follow these steps to become a volunteer for our medical camp:
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 mt-2">
                            <li>Fill out the online volunteer application form on our website.</li>
                            <li>Attend a volunteer orientation session to learn more about our mission and goals.</li>
                            <li>Choose your preferred volunteer role based on your skills and interests.</li>
                            <li>Join our dedicated team and make a positive impact on the community's health.</li>
                        </ol>
                        <p className="text-gray-700 mt-4">
                            If you have any questions or need further assistance, feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
                        </p>
                    </div>

                </div>
            </div>
        </>



    );
};

export default VolunteerPage;

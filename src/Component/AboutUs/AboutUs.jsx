import SectionTitle from "../SectionTitle/SectionTitle";


const AboutUs = () => {
    return (
        <div>
            <div className="container mx-auto mt-10 mb-5">
                <SectionTitle
                subHeading={"we are"}
                heading={"About Us"}
                ></SectionTitle>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="https://i.ibb.co/LnV9t11/aboutimg.jpg" // Replace with your image URL
                            alt="Medical Camp"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 ml-4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                        Welcome to [Your Medical Camp Name], where health meets community! At [Your Medical Camp Name], we believe in making a positive impact on the well-being of our community. Our medical camp is not just an event; it's a dedicated initiative designed to bring accessible healthcare closer to you.</p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        Community-Centric Approach: We are committed to serving our community by providing quality healthcare services. Our medical camp is a testament to our dedication to your well-being.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        Expert Healthcare Professionals: Our team of experienced healthcare professionals is here to address your health concerns with expertise and compassion. From preventive screenings to personalized consultations, we've got your health covered.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        Empowering Health Awareness: Beyond immediate care, we strive to empower individuals with knowledge about preventive health measures. We believe that informed communities are healthier communities.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        Building a Healthier Tomorrow, Together: [Your Medical Camp Name] is more than just a one-time event; it's a commitment to building a healthier tomorrow, together. Join us on this journey towards a community where everyone has access to essential healthcare services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
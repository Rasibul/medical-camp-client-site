import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div className="">
            <div className="min-h-screen flex items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
                    <form action="#" method="post">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/error">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Message</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
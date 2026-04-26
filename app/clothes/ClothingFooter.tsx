import React from "react";

const ClothingFooter = () => {
    return (
        <footer className="bg-yellow-900 text-gray-300 py-12 shadow-box">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Brand and Social Section */}
                <div>
                    <h1 className="text-4xl font-bold text-wheat mb-4">SOTA/KLÆR</h1>
                    <p className="mb-6 text-yellow-600">
                        Elevate your style with our premium clothing line. From casual wear to
                        statement pieces, we’ve got you covered.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:opacity-75 hover:scale-110 transition duration-75">
                            <img src="/image/Icons/facebook.png" alt="Facebook" className="h-8 w-8" />
                        </a>
                        <a href="#" className="hover:opacity-75 hover:scale-110 transition duration-75">
                            <img src="/image/Icons/instagram.png" alt="Instagram" className="h-8 w-8" />
                        </a>
                        <a href="#" className="hover:opacity-65 hover:scale-110 transition duration-75">
                            <img src="/image/Icons/twitter.png" alt="Twitter" className="h-8 w-8" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Shop All
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Best Sellers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                New Arrivals
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Sale
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Customer Support</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Shipping & Returns
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Size Guide
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Stay in the Loop</h2>
                    <p className="mb-4">
                        Subscribe to our newsletter for exclusive offers, updates, and more!
                    </p>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-3 py-2 bg-slate-800 text-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-red-800 text-white py-2 rounded-md font-semibold hover:bg-red-900 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-amber-950 mt-8 pt-4 text-center text-amber-950 w-2/3 m-auto text-sm">
                <p>&copy; {new Date().getFullYear()} SOTA/KLÆR. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default ClothingFooter;

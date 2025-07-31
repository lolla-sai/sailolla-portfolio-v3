import React from "react";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function ContactMe() {
    return (
        <div>
            <section id="contact" className="py-16 bg-white border-t">
                <div className="text-center max-w-xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-8">
                        Have a project, idea, or just want to connect? I'm
                        always open to meaningful conversations.
                    </p>

                    <div className="flex justify-center gap-6">
                        <a
                            href="mailto:saisameer.lolla@gmail.com"
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email</span>
                        </a>

                        <a
                            href="https://api.whatsapp.com/send?phone=919284744727&text=Hello%20Sai!%20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            <span>Whatsapp</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/sailolla"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition"
                        >
                            <FiLinkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <div className="mt-12 text-gray-500 text-sm">
                        Copyright © 2025 Sai Lolla. All rights reserved.
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactMe;

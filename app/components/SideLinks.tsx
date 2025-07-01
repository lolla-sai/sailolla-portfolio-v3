import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
// import SideLinkStyles from "../styles/SideLinks.module.css";
import { Link } from "react-router";

function SideLinks() {
    return (
        <>
            {/* ${SideLinkStyles.leftLinks} */}
            <div
                className={`leftLinks fixed lg:left-10 left-4 bottom-0 text-gray-700 h-1/2 hidden md:block`}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border-[#8892b0] border -z-30"></div>
                <ul className="py-4 text-center bg-white">
                    <li className="text-2xl hover:-translate-y-1 hover:text-black transition-transform">
                        <Link to="#">
                            <a className="px-2 py-4 block">
                                <FiGithub />
                            </a>
                        </Link>
                    </li>
                    <li className="text-2xl hover:-translate-y-1 hover:text-black transition-transform">
                        <Link to="#">
                            <a className="px-2 py-4 block">
                                <FiInstagram />
                            </a>
                        </Link>
                    </li>
                    <li className="text-2xl hover:-translate-y-1 hover:text-black transition-transform">
                        <Link to="#">
                            <a className="px-2 py-4 block">
                                <FiTwitter />
                            </a>
                        </Link>
                    </li>
                    <li className="text-2xl hover:-translate-y-1 hover:text-black transition-transform">
                        <Link to="#">
                            <a className="px-2 py-4 block">
                                <FiLinkedin />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div className="rightLinks fixed lg:right-10 right-6 bottom-0 text-white h-1/4 hidden md:block text-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border -z-30"></div>
                <p className="rotate-90 origin-right fixed lg:right-10 right-6 px-6 hover:-translate-y-1 hover:text-black transition-transform font-custom-mono">
                    <Link to="mailto:saisameer.lolla@gmail.com">
                        saisameer.lolla@gmail.com
                    </Link>
                </p>
            </div> */}
        </>
    );
}

export default SideLinks;

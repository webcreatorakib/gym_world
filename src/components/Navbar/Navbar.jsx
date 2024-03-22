import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [open, setOpen] = useState(true);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
    ];
    return (
        <nav className="py-5 bg-[#ebf2fa] fixed w-full z-10 shadow-xl">
            <div className="container mx-auto md:block px-5 items-center flex justify-between">
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <IoMenu className="text-3xl" /> : <IoMdClose className="text-3xl" />
                    }
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-4xl font-bold">Grameen <span className="text-[#8ac926]">Gym</span></h3>
                    </div>
                    <ul className={`md:flex md:gap-2 p-2 top-20 text-center md:w-auto w-6/12 bg-[#8d99ae] md:bg-[#ebf2fa] absolute md:static duration-1000 
                  ${open ? "-left-96" : "left-0"}
                    `}>
                        {
                            routes.map(route => <Link key={route.id} route={route}></Link>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
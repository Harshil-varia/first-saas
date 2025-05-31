import Link from "next/link";
import Image from "next/image";
import Navitems from "./NavItems";

const Navbar= () => {
    return(
       <nav className="navbar">
            <Link href="/">
                <div className="flex item-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.svg" alt={""} height={44} width={46}                  
                    />

                </div>
            </Link>
            <div className="flex item-center gap-8">
                <Navitems/>
                <p>Sign-In</p>

            </div>

       </nav>
    )
}

export default Navbar;
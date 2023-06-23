import Link from "next/link"
import { FaSpotify, FaGithub, FaSteam, FaSnapchat, FaGraduationCap, FaDiscord} from 'react-icons/fa'


export default function Navbar() {
  return (
    <nav className=" bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10 ">
        <div className=" prose prose-xl mx-auto flex justify-between flex-col sm:flex-row" >
            <h1 className=" text-3xl font-bold text-white grid justify-center mb-2 md:mb-0">
            <Link href='/' className=" text-white/90 no-underline hover:text-white">Lusheistey</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                <Link className="text-white/90 hover:text-white" href="https://open.spotify.com/user/luismartinez375" >
                    <FaSpotify />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://github.com/Luismartinez375" >
                    <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://www.utrgv.edu/csci/" >
                        <FaGraduationCap/>
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://discord.com/invite/duellinks" >
                    <FaDiscord />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://steamcommunity.com/profiles/76561198203573892" >
                    <FaSteam />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://www.snapchat.com/add/luismartinez375?share_id=wAProWINUDw&locale=en-US" >
                    <FaSnapchat />
                </Link>
            </div>
        </div>
    </nav>
  )
}

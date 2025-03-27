import { BiLogOut } from "react-icons/bi"
import { FaHome, FaSearch, FaUser } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"


const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 w-20 h-screen bg-[#1A1C1E] text-white">
        <ul className="p-4 flex flex-col justify-between items-center h-full">
            <div className="top">
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaHome className="mr-2 mb-3" size={18}/>
                    </div>
                </li>

                <li className="mb-2">
                    <div className="flex items-center">
                        <FaUser className="mr-2 mb-3" size={18}/>
                    </div>
                </li>
                
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaSearch className="mr-2 mb-3" size={18}/>
                    </div>
                </li>
            </div>

            <div className="bottom">
                <li>
                    <IoMdSettings size={20}/>
                    <BiLogOut className="mt-5" size={20}/>
                </li>
            </div>
        </ul>
    </aside>
  )
}

export default Sidebar

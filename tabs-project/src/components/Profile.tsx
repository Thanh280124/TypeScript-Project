import { useState } from "react"
import { FaCamera } from "react-icons/fa"
import Tabs from "./tabs"

const Profile = () => {
  const [banner, setBanner] = useState('https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  const [profile, setProfile] = useState('https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  
  const handleBannerChange = (e: any) =>{
    const file = e.target.files[0]

    if(file){
      setBanner(URL.createObjectURL(file))
    }
  }

  const handleProfileChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img src={banner} alt="baner" className="w-full h-45 object-cover"/>
      <button className="absolute top-2 right-2 bg-gray800 text-white p-2 rounded-full
      hover:bg-gray-600">
        <label className="cursor-pointer" htmlFor="banner-upload">
          <FaCamera size={24} className="mr-5"/>
        </label>

        <input type="file" id="banner-upload" accept="image/*" 
        className="hidden"
        onChange={handleBannerChange}/>
      </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img src={profile} alt="profile-img" className="w-40 h-40 object-cover rounded-full broder-white relative" />
        <button className="absolute  ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">HuXn WebDev</h1>
          <p>1M views</p>
          <p className="mt-2">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs/>
    </div>
  )
}

export default Profile

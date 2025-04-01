import { useState } from "react";
import toast from "react-hot-toast";
import { FaMagic, FaEraser, FaBrain } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { getResume } from "../api/ResumeService";


const GenerateResume = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      personalInformation: {
        ...prevData.personalInformation,
        [name]: value,
      },
    }));
  };

  const [data, setData] = useState({
    "personalInformation": {
        "fullName": "Vineet Kundu",
        "email": "Not provided",
        "phoneNumber": "Not provided",
        "location": "Farukh Nagar, Gurgaon, India",
        "linkedin": "https://www.linkedin.com/in/vineekundu/",
        "github": "https://github.com/VineetKundu",
        "portfolio": "https://vinkuntye.firebaseapp.com",
        "resume": "Not provided"
    },

  }); 

  const handleGenerate = async () => {
    try {
        setLoading(true);
        const responseData = await getResume(description);
        console.log(responseData);
        toast.success("Resume generated successfully!",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } catch (error) {
        console.log(error);
        toast.error("Error generating resume!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } finally {
        setLoading(false);
        setDescription("");
    }
  }

  function ShowInputField() {
    return(
      <div className="w-full max-w-2xl p-6 bg-gray-800 shadow-xl rounded-xl text-center">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
        <FaBrain className="text-accent"></FaBrain>Enter Your Resume Description
        </h1>
      <textarea
        disabled={loading}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-40 p-3 text-lg text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Describe your experience, skills, and achievements..."
      />
      <div className="flex justify-center gap-4 mt-4">
        <button    
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          onClick={handleGenerate}
        >
          {loading &&  <span className="loading loading-spinner"></span>}
          <FaMagic /> Generate Resume
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          onClick={() => setDescription("")}
        >
          <FaEraser /> Clear
        </button>
      </div>
    </div>
    )
  }

  function ShowForm() {
    

    return (
      <div className="w-full p-10">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <BiBook className="text-accent" /> Resume Form
        </h1>

        <div>
          <p className="mb-4">Personal Information</p>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Name"
                value={data.personalInformation.fullName}
                onChange={handleInputChange}
                className="input w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={data.personalInformation.email}
                onChange={handleInputChange}
                className="input w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={data.personalInformation.phoneNumber}
                onChange={handleInputChange}
                className="input w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="location" className="block mb-2">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                value={data.personalInformation.location}
                onChange={handleInputChange}
                className="input w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="linkedin" className="block mb-2">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                placeholder="Enter LinkedIn URL"
                value={data.personalInformation.linkedin}
                onChange={handleInputChange}
                className="input w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="github" className="block mb-2">GitHub</label>
              <input
                type="text"
                name="github"
                placeholder="Enter GitHub URL"
                value={data.personalInformation.github}
                onChange={handleInputChange}
                className="input w-full"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="portfolio" className="block mb-2">Portfolio</label>
              <input
                type="text"
                name="portfolio"
                placeholder="Enter Portfolio URL"
                value={data.personalInformation.portfolio}
                onChange={handleInputChange}
                className="input w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {
        ShowForm()
      }
     {ShowInputField()}
    </div>
  );
}
export default GenerateResume;

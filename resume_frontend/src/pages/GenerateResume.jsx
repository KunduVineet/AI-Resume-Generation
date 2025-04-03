import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaMagic, FaEraser, FaBrain } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { getResume } from "../api/ResumeService";

const GenerateResume = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    personalInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      linkedIn: "",
      gitHub: "",
      portfolio: "",
      resume: ""
    },
    summary: "",
    experience: {},
    education: {},
    achievements: [],
    spokenLanguages: [],
    certifications: [],
    languages: {},
    interests: [],
    contact: {}
  });

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

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const responseData = await getResume(description);
      console.log("API Response:", responseData);

      // Ensure responseData has the expected structure
      setData(responseData?.data || {});
      toast.success("Resume generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error generating resume!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  useEffect(() => {
    console.log("Current Data State:", data);
  }, [data]);

  function ShowInputField() {
    return (
      <div className="w-full max-w-2xl p-6 bg-gray-800 shadow-xl rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <FaBrain className="text-accent" /> AI Resume Description Input
        </h1>
        <textarea
          disabled={loading}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-40 p-3 text-lg text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a prompt defining Yourself, your Skills, and your Experience to Generate a better Resume Version."
        />
        <div className="flex justify-center gap-4 mt-4">
          <button
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            onClick={handleGenerate}
          >
            {loading && <span className="loading loading-spinner"></span>}
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
    );
  }

  function ShowForm() {
    console.log("Rendering Form with personalInformation:", data?.personalInformation);

    return (
      <div className="w-full p-10">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <BiBook className="text-accent" /> Resume Form
        </h1>
        <div>
          <p className="mb-4">Personal Information</p>
          <div className="grid grid-cols-12 gap-4">
            {[
              { name: "fullName", label: "Full Name" },
              { name: "email", label: "Email" },
              { name: "phoneNumber", label: "Phone Number" },
              { name: "location", label: "Location" },
              { name: "linkedin", label: "LinkedIn" },
              { name: "github", label: "GitHub" },
              { name: "portfolio", label: "Portfolio" }
            ].map(({ name, label }) => (
              <div key={name} className="col-span-12 lg:col-span-6">
                <label htmlFor={name} className="block mb-2">{label}</label>
                <input
                  type="text"
                  name={name}
                  placeholder={`Enter ${label}`}
                  value={data?.personalInformation?.[name] || ""}
                  onChange={handleInputChange}
                  className="input w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <ShowForm />
      <ShowInputField />
    </div>
  );
};

export default GenerateResume;

import { useState } from "react";
import toast from "react-hot-toast";
import { FaMagic, FaEraser } from "react-icons/fa";
import { getResume } from "../api/ResumeService";


const GenerateResume = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-2xl p-6 bg-gray-800 shadow-xl rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Enter Your Resume Description</h1>
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
    </div>
  );
}
export default GenerateResume;

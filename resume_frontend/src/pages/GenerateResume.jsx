import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaMagic, FaEraser, FaBrain, FaSave, FaPlus } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { getResume } from "../api/ResumeService";

const GenerateResume = () => {
  const defaultLanguages = {
    frontend: ["", ""],
    backend: ["", ""],
    database: ["", ""],
    devops: ["", ""],
    tools: ["", ""],
  };

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
      resume: "",
    },
    summary: "",
    experience: {
      companyName: "",
      jobTitle: "",
      duration: "",
      description: "",
      location: "",
    },
    education: {
      schoolName: "",
      degree: "",
      fieldOfStudy: "",
      graduationYear: "",
      location: "",
    },
    achievements: ["", ""],
    spokenLanguages: ["", ""],
    certifications: ["", ""],
    languages: defaultLanguages,
    interests: ["", ""],
    contact: {
      email: "",
      phone: "",
      address: "",
      website: "",
    },
  });

  const handleInputChange = (e, section = "personalInformation") => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  const handleArrayChange = (e, section, index) => {
    const { value } = e.target;
    setData((prevData) => {
      const updatedArray = [...prevData[section]];
      updatedArray[index] = value;
      return { ...prevData, [section]: updatedArray };
    });
  };

  const handleNestedArrayChange = (e, section, subsection, index) => {
    const { value } = e.target;
    setData((prevData) => {
      const updatedArray = [...(prevData[section][subsection] || [])];
      updatedArray[index] = value;
      return {
        ...prevData,
        [section]: { ...prevData[section], [subsection]: updatedArray },
      };
    });
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const responseData = await getResume(description);
      // Merge API response with default structure to prevent missing fields
      setData((prevData) => ({
        ...prevData,
        ...responseData?.data,
        languages: {
          ...defaultLanguages,
          ...(responseData?.data?.languages || {}),
        },
      }));
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

  const InputField = ({ name, label, section = "personalInformation", type = "text" }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-gray-300">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={`Enter ${label}`}
        value={data[section][name] || ""}
        onChange={(e) => handleInputChange(e, section)}
        className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:input-primary"
      />
    </div>
  );

  const ArrayInputField = ({ section, index, value, label }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-gray-300">{`${label} ${index + 1}`}</span>
      </label>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => handleArrayChange(e, section, index)}
        className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:input-primary"
      />
    </div>
  );

  const NestedArrayInputField = ({ section, subsection, index, value, label }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-gray-300">{`${label} ${index + 1}`}</span>
      </label>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => handleNestedArrayChange(e, section, subsection, index)}
        className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:input-primary"
      />
    </div>
  );

  const ShowInputField = () => (
    <div className="card w-full max-w-3xl bg-base-200 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl font-bold flex items-center justify-center gap-2 text-white mx-auto">
          <FaBrain className="text-primary" /> AI Resume Generator
        </h1>
        <textarea
          disabled={loading}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full h-40 bg-gray-700 text-white border-gray-600 focus:textarea-primary resize-none"
          placeholder="Describe yourself, your skills, and experience to generate a tailored resume..."
        />
        <div className="card-actions justify-center gap-4 mt-6">
          <button
            disabled={loading}
            className="btn btn-primary flex items-center gap-2"
            onClick={handleGenerate}
          >
            {loading ? <span className="loading loading-spinner"></span> : <FaMagic />}
            Generate
          </button>
          <button
            className="btn btn-ghost flex items-center gap-2"
            onClick={() => setDescription("")}
          >
            <FaEraser /> Clear
          </button>
        </div>
      </div>
    </div>
  );

  const ShowForm = () => (
    <div className="card w-full max-w-4xl bg-base-200 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl font-bold flex items-center justify-center gap-2 text-white mx-auto">
          <BiBook className="text-primary" /> Resume Builder
        </h1>

        {/* Personal Information */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-200">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField name="fullName" label="Full Name" />
            <InputField name="email" label="Email" type="email" />
            <InputField name="phoneNumber" label="Phone Number" type="tel" />
            <InputField name="location" label="Location" />
            <InputField name="linkedIn" label="LinkedIn" />
            <InputField name="gitHub" label="GitHub" />
            <InputField name="portfolio" label="Portfolio" />
            <InputField name="resume" label="Resume Link" />
          </div>
        </section>

        {/* Summary */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Summary</h2>
          <textarea
            name="summary"
            value={data.summary || ""}
            onChange={(e) => setData({ ...data, summary: e.target.value })}
            className="textarea textarea-bordered w-full h-24 bg-gray-700 text-white border-gray-600 focus:textarea-primary resize-none"
            placeholder="Write a brief professional summary..."
          />
        </section>

        {/* Experience */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField name="companyName" label="Company Name" section="experience" />
            <InputField name="jobTitle" label="Job Title" section="experience" />
            <InputField name="duration" label="Duration" section="experience" />
            <InputField name="location" label="Location" section="experience" />
            <div className="col-span-full">
              <label className="label">
                <span className="label-text text-gray-300">Description</span>
              </label>
              <textarea
                name="description"
                value={data.experience.description || ""}
                onChange={(e) => handleInputChange(e, "experience")}
                className="textarea textarea-bordered w-full h-24 bg-gray-700 text-white border-gray-600 focus:textarea-primary resize-none"
              />
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField name="schoolName" label="School Name" section="education" />
            <InputField name="degree" label="Degree" section="education" />
            <InputField name="fieldOfStudy" label="Field of Study" section="education" />
            <InputField name="graduationYear" label="Graduation Year" section="education" />
            <InputField name="location" label="Location" section="education" />
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.achievements.map((achievement, index) => (
              <ArrayInputField
                key={index}
                section="achievements"
                index={index}
                value={achievement}
                label="Achievement"
              />
            ))}
            <button
              className="btn btn-outline btn-primary col-span-full flex items-center gap-2"
              onClick={() => setData({ ...data, achievements: [...data.achievements, ""] })}
            >
              <FaPlus /> Add Achievement
            </button>
          </div>
        </section>

        {/* Spoken Languages */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Spoken Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.spokenLanguages.map((language, index) => (
              <ArrayInputField
                key={index}
                section="spokenLanguages"
                index={index}
                value={language}
                label="Language"
              />
            ))}
            <button
              className="btn btn-outline btn-primary col-span-full flex items-center gap-2"
              onClick={() => setData({ ...data, spokenLanguages: [...data.spokenLanguages, ""] })}
            >
              <FaPlus /> Add Language
            </button>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.certifications.map((certification, index) => (
              <ArrayInputField
                key={index}
                section="certifications"
                index={index}
                value={certification}
                label="Certification"
              />
            ))}
            <button
              className="btn btn-outline btn-primary col-span-full flex items-center gap-2"
              onClick={() => setData({ ...data, certifications: [...data.certifications, ""] })}
            >
              <FaPlus /> Add Certification
            </button>
          </div>
        </section>

        {/* Languages (Technical Skills) */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Technical Skills</h2>
          {["frontend", "backend", "database", "devops", "tools"].map((subsection) => (
            <div key={subsection} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-300 capitalize">{subsection}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(data.languages[subsection] || []).map((item, index) => (
                  <NestedArrayInputField
                    key={index}
                    section="languages"
                    subsection={subsection}
                    index={index}
                    value={item}
                    label={subsection}
                  />
                ))}
                <button
                  className="btn btn-outline btn-primary col-span-full flex items-center gap-2"
                  onClick={() =>
                    setData({
                      ...data,
                      languages: {
                        ...data.languages,
                        [subsection]: [...(data.languages[subsection] || []), ""],
                      },
                    })
                  }
                >
                  <FaPlus /> Add {subsection}
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Interests */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.interests.map((interest, index) => (
              <ArrayInputField
                key={index}
                section="interests"
                index={index}
                value={interest}
                label="Interest"
              />
            ))}
            <button
              className="btn btn-outline btn-primary col-span-full flex items-center gap-2"
              onClick={() => setData({ ...data, interests: [...data.interests, ""] })}
            >
              <FaPlus /> Add Interest
            </button>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField name="email" label="Email" section="contact" type="email" />
            <InputField name="phone" label="Phone" section="contact" type="tel" />
            <InputField name="address" label="Address" section="contact" />
            <InputField name="website" label="Website" section="contact" />
          </div>
        </section>

        {/* Save Button */}
        <div className="card-actions justify-end mt-8">
          <button className="btn btn-success flex items-center gap-2">
            <FaSave /> Save Resume
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-base-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <ShowForm />
        <ShowInputField />
      </div>
    </div>
  );
};

export default GenerateResume;
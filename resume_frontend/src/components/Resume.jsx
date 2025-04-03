import React from "react";

const Resume = ({ resumeData }) => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-3xl shadow-lg bg-white p-6 rounded-lg">
        <div>
          <h1 className="text-3xl font-bold text-center">{resumeData.personalInformation.fullName}</h1>
          <p className="text-center text-gray-600">{resumeData.personalInformation.location}</p>
          <div className="flex justify-center gap-4 my-4">
            <a
              href={resumeData.personalInformation.linkedin}
              target="_blank"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              LinkedIn
            </a>
            <a
              href={resumeData.personalInformation.github}
              target="_blank"
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              GitHub
            </a>
            <a
              href={resumeData.personalInformation.portfolio}
              target="_blank"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Portfolio
            </a>
          </div>
          <h2 className="text-xl font-semibold mt-6">Summary</h2>
          <p className="text-gray-700">{resumeData.summary}</p>
          <h2 className="text-xl font-semibold mt-6">Experience</h2>
          <p className="text-gray-700 font-medium">{resumeData.experience.companyName} - {resumeData.experience.position}</p>
          <p className="text-gray-500">{resumeData.experience.duration}</p>
          <p className="text-gray-700">{resumeData.experience.description}</p>
          <h2 className="text-xl font-semibold mt-6">Education</h2>
          <p className="text-gray-700 font-medium">{resumeData.education.schoolName}</p>
          <p className="text-gray-500">{resumeData.education.degree}</p>
          <h2 className="text-xl font-semibold mt-6">Projects</h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mt-2">
              <p className="text-gray-700 font-medium">{project.title}</p>
              <p className="text-gray-500">{project.description}</p>
            </div>
          ))}
          <h2 className="text-xl font-semibold mt-6">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {Object.entries(resumeData.skills).map(([category, skills], index) => (
              <li key={index}><strong>{category}:</strong> {skills.join(", ")}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

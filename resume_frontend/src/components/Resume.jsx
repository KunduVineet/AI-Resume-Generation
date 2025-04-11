import React from "react";

const Resume = ({ resumeData }) => {
  // Destructure the data with fallback values
  const {
    personalInformation = {},
    summary = "",
    experience = {},
    education = {},
    projects = [],
    achievements = [],
    spokenLanguages = [],
    certifications = [],
    languages = {},
    interests = [],
    contact = {},
  } = resumeData || {};

  return (
    <div className="p-10 bg-gray-900 min-h-screen flex justify-center">
      <div className="w-full max-w-3xl shadow-md bg-gray-800 p-6 rounded-lg">
        {/* Personal Information */}
        <div>
          <h1 className="text-3xl font-bold text-center text-white">
            {personalInformation.fullName || "Your Name"}
          </h1>
          <p className="text-center text-gray-400">
            {personalInformation.location || ""}
          </p>
          <div className="flex justify-center gap-4 my-4">
            {personalInformation.linkedIn && (
              <a
                href={personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            )}
            {personalInformation.gitHub && (
              <a
                href={personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            )}
            {personalInformation.portfolio && (
              <a
                href={personalInformation.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Portfolio
              </a>
            )}
          </div>

          {/* Summary */}
          {summary && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Summary</h2>
              <p className="text-gray-200">{summary}</p>
            </>
          )}

          {/* Experience */}
          {experience.companyName && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Experience</h2>
              <p className="text-gray-200 font-medium">
                {experience.companyName} - {experience.jobTitle || ""}
              </p>
              <p className="text-gray-400">{experience.duration || ""}</p>
              <p className="text-gray-200">{experience.description || ""}</p>
            </>
          )}

          {/* Education */}
          {education.schoolName && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Education</h2>
              <p className="text-gray-200 font-medium">{education.schoolName}</p>
              <p className="text-gray-400">
                {education.degree}{" "}
                {education.fieldOfStudy ? `- ${education.fieldOfStudy}` : ""}
              </p>
              <p className="text-gray-400">{education.graduationYear || ""}</p>
            </>
          )}

          {/* Projects */}
          {projects.length > 0 && projects.some((p) => p.title || p.description) && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mt-2">
                  <p className="text-gray-200 font-medium">
                    {project.title || "Untitled Project"}
                  </p>
                  {project.description && (
                    <p className="text-gray-300">{project.description}</p>
                  )}
                  {project.technologies?.length > 0 && (
                    <p className="text-gray-300">
                      <strong className="text-gray-200">Technologies:</strong>{" "}
                      {project.technologies.filter(Boolean).join(", ")}
                    </p>
                  )}
                  {project.gitHubLink && (
                    <p className="text-gray-300">
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        GitHub
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Achievements */}
          {achievements.length > 0 && achievements.some((a) => a) && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Achievements</h2>
              {achievements.map((achievement, index) =>
                achievement ? (
                  <div key={index} className="mt-2">
                    <p className="text-gray-200">{achievement}</p>
                  </div>
                ) : null
              )}
            </>
          )}

          {/* Spoken Languages */}
          {spokenLanguages.length > 0 && spokenLanguages.some((l) => l) && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Spoken Languages</h2>
              <ul className="list-disc list-inside text-gray-200">
                {spokenLanguages.map((language, index) =>
                  language ? <li key={index}>{language}</li> : null
                )}
              </ul>
            </>
          )}

          {/* Certifications */}
          {certifications.length > 0 && certifications.some((c) => c) && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Certifications</h2>
              {certifications.map((certification, index) =>
                certification ? (
                  <div key={index} className="mt-2">
                    <p className="text-gray-200">{certification}</p>
                  </div>
                ) : null
              )}
            </>
          )}

          {/* Technical Skills */}
          {Object.keys(languages).length > 0 &&
            Object.values(languages).some((arr) => arr.some((item) => item)) && (
              <>
                <h2 className="text-xl font-semibold mt-6 text-gray-100">Technical Skills</h2>
                <ul className="list-disc list-inside text-gray-200">
                  {Object.entries(languages).map(([category, skills], index) =>
                    skills.some((s) => s) ? (
                      <li key={index}>
                        <strong className="text-gray-100">{category}:</strong>{" "}
                        {skills.filter(Boolean).join(", ")}
                      </li>
                    ) : null
                  )}
                </ul>
              </>
            )}

          {/* Interests */}
          {interests.length > 0 && interests.some((i) => i) && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Interests</h2>
              <ul className="list-disc list-inside text-gray-200">
                {interests.map((interest, index) =>
                  interest ? <li key={index}>{interest}</li> : null
                )}
              </ul>
            </>
          )}

          {/* Contact */}
          {(contact.email || contact.phone || contact.address || contact.website) && (
            <>
              <h2 className="text-xl font-semibold mt-6 text-gray-100">Contact</h2>
              {contact.email && <p className="text-gray-200">Email: {contact.email}</p>}
              {contact.phone && <p className="text-gray-200">Phone: {contact.phone}</p>}
              {contact.address && (
                <p className="text-gray-200">Address: {contact.address}</p>
              )}
              {contact.website && (
                <p className="text-gray-200">
                  Website:{" "}
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {contact.website}
                  </a>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
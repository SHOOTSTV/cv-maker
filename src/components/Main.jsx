import { useState } from "react";
import "../styles/App.css";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent ";

const labelClass = "text-sm font-medium text-slate-600 mb-1.5 block";

const sectionTitleClass =
  "text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2";

const cardClass =
  "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6 last:mb-0";

const buttonClass =
  "w-full py-3 rounded-xl bg-blue-600 text-white font-medium text-sm transition-all duration-200 hover:bg-blue-500 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 cursor-pointer";

function Main() {
  const [cvData, setCvData] = useState({
    personalInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    educationalExperience: [
      { id: 1, schoolName: "", degree: "", startDate: "", endDate: "" },
    ],
    workExperience: [
      { id: 1, companyName: "", position: "", startDate: "", endDate: "" },
    ],
  });

  const addEducationalExperience = () => {
    setCvData((prev) => {
      const list = prev.educationalExperience;
      const newId = list.length
        ? Math.max(...list.map((edu) => edu.id)) + 1
        : 1;
      return {
        ...prev,
        educationalExperience: [
          ...list,
          { id: newId, schoolName: "", degree: "", startDate: "", endDate: "" },
        ],
      };
    });
  };

  const updateEducationalExperience = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      educationalExperience: prev.educationalExperience.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const addWorkExperience = () => {
    setCvData((prev) => {
      const list = prev.workExperience;
      const newId = list.length
        ? Math.max(...list.map((work) => work.id)) + 1
        : 1;
      return {
        ...prev,
        workExperience: [
          ...list,
          {
            id: newId,
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
          },
        ],
      };
    });
  };

  const updateWorkExperience = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((work) =>
        work.id === id ? { ...work, [field]: value } : work
      ),
    }));
  };

  const removeWorkExperience = (id) => {
    if (cvData.workExperience.length > 1) {
      setCvData((prev) => ({
        ...prev,
        workExperience: prev.workExperience.filter((work) => work.id !== id),
      }));
    }
  };

  const removeEducationalExperience = (id) => {
    if (cvData.educationalExperience.length > 1) {
      setCvData((prev) => ({
        ...prev,
        educationalExperience: prev.educationalExperience.filter(
          (edu) => edu.id !== id
        ),
      }));
    }
  };
  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Informations */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Your informations
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Fill in the information to generate your CV
            </p>
            <div className="space-y-6">
              {/* Personal Information */}
              <form className={cardClass} onSubmit={(e) => e.preventDefault()}>
                <h3 className={sectionTitleClass}>
                  <span className="w-1 h-5 bg-slate-800 rounded-full" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className={labelClass}>
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        id="first-name"
                        className={inputClass}
                        value={cvData.personalInformation.firstName}
                        onChange={(e) =>
                          setCvData((prev) => ({
                            ...prev,
                            personalInformation: {
                              ...prev.personalInformation,
                              firstName: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className={labelClass}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        id="last-name"
                        className={inputClass}
                        value={cvData.personalInformation.lastName}
                        onChange={(e) =>
                          setCvData((prev) => ({
                            ...prev,
                            personalInformation: {
                              ...prev.personalInformation,
                              lastName: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      id="email"
                      className={inputClass}
                      value={cvData.personalInformation.email}
                      onChange={(e) =>
                        setCvData((prev) => ({
                          ...prev,
                          personalInformation: {
                            ...prev.personalInformation,
                            email: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1234567890"
                      id="phone"
                      className={inputClass}
                      value={cvData.personalInformation.phone}
                      onChange={(e) =>
                        setCvData((prev) => ({
                          ...prev,
                          personalInformation: {
                            ...prev.personalInformation,
                            phone: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className={`${buttonClass} mt-5 bg-slate-800 hover:bg-slate-700`}
                >
                  Save
                </button>
              </form>
              {/* Educational Experience */}
              <form className={cardClass} onSubmit={(e) => e.preventDefault()}>
                <h3 className={sectionTitleClass}>
                  <span className="w-1 h-5 bg-slate-800 rounded-full" />
                  Educational Experience
                </h3>
                <div className="space-y-6">
                  {cvData.educationalExperience.map((edu) => (
                    <div
                      key={edu.id}
                      className="space-y-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor={`degree-${edu.id}`}
                            className={labelClass}
                          >
                            Degree
                          </label>
                          {cvData.educationalExperience.length > 1 && (
                            <button
                              onClick={() =>
                                removeEducationalExperience(edu.id)
                              }
                              className={`text-sm text-red-600 hover:text-red-700 cursor-pointer transition-all duration-200`}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                        <input
                          type="text"
                          id={`degree-${edu.id}`}
                          placeholder="e.g. Bachelor of Science"
                          className={inputClass}
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducationalExperience(
                              edu.id,
                              "degree",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`school-name-${edu.id}`}
                          className={labelClass}
                        >
                          School Name
                        </label>
                        <input
                          type="text"
                          id={`school-name-${edu.id}`}
                          placeholder="University name"
                          className={inputClass}
                          value={edu.schoolName}
                          onChange={(e) =>
                            updateEducationalExperience(
                              edu.id,
                              "schoolName",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor={`edu-start-date-${edu.id}`}
                            className={labelClass}
                          >
                            Start Date
                          </label>
                          <input
                            type="text"
                            placeholder="2020"
                            id={`edu-start-date-${edu.id}`}
                            className={inputClass}
                            value={edu.startDate}
                            onChange={(e) =>
                              updateEducationalExperience(
                                edu.id,
                                "startDate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <label
                            htmlFor={`edu-end-date-${edu.id}`}
                            className={labelClass}
                          >
                            End Date
                          </label>
                          <input
                            type="text"
                            placeholder="2024"
                            id={`edu-end-date-${edu.id}`}
                            className={inputClass}
                            value={edu.endDate}
                            onChange={(e) =>
                              updateEducationalExperience(
                                edu.id,
                                "endDate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className={`${buttonClass} mt-5`}
                  onClick={addEducationalExperience}
                >
                  + Add
                </button>
              </form>
              {/* Work Experience */}
              <form className={cardClass} onSubmit={(e) => e.preventDefault()}>
                <h3 className={sectionTitleClass}>
                  <span className="w-1 h-5 bg-slate-800 rounded-full" />
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {cvData.workExperience.map((work) => (
                    <div
                      key={work.id}
                      className="space-y-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor={`position-${work.id}`}
                            className={labelClass}
                          >
                            Position
                          </label>
                          {cvData.workExperience.length > 1 && (
                            <button
                              onClick={() => removeWorkExperience(work.id)}
                              className={`text-sm text-red-600 hover:text-red-700 cursor-pointer transition-all duration-200`}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                        <input
                          type="text"
                          id={`position-${work.id}`}
                          placeholder="Your job title"
                          className={inputClass}
                          value={work.position}
                          onChange={(e) =>
                            updateWorkExperience(
                              work.id,
                              "position",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`company-name-${work.id}`}
                          className={labelClass}
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id={`company-name-${work.id}`}
                          placeholder="Company name"
                          className={inputClass}
                          value={work.companyName}
                          onChange={(e) =>
                            updateWorkExperience(
                              work.id,
                              "companyName",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor={`work-start-date-${work.id}`}
                            className={labelClass}
                          >
                            Start Date
                          </label>
                          <input
                            type="text"
                            placeholder="2020"
                            id={`work-start-date-${work.id}`}
                            className={inputClass}
                            value={work.startDate}
                            onChange={(e) =>
                              updateWorkExperience(
                                work.id,
                                "startDate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <label
                            htmlFor={`work-end-date-${work.id}`}
                            className={labelClass}
                          >
                            End Date
                          </label>
                          <input
                            type="text"
                            placeholder="2024"
                            id={`work-end-date-${work.id}`}
                            className={inputClass}
                            value={work.endDate}
                            onChange={(e) =>
                              updateWorkExperience(
                                work.id,
                                "endDate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className={`${buttonClass} mt-5`}
                  onClick={addWorkExperience}
                >
                  + Add
                </button>
              </form>
            </div>
          </div>
          {/* Preview */}
          <div className="space-y-2 lg:sticky lg:top-8 lg:self-start">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Preview
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Real-time preview of your CV
            </p>
            {/* A4 page blank */}
            <div
              className="bg-white text-left text-slate-800 shadow-sm border border-slate-100 overflow-hidden flex flex-col"
              style={{
                width: "210mm",
                minHeight: "297mm",
                maxWidth: "100%",
              }}
            >
              <div className="flex-1 p-8 ">
                {/* Header / Contact */}
                <header className="border-b border-slate-200 pb-4 mb-6">
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {cvData.personalInformation.firstName ||
                    cvData.personalInformation.lastName
                      ? `${cvData.personalInformation.firstName} ${cvData.personalInformation.lastName}`.trim()
                      : "John Doe"}
                  </h1>
                  <p className="text-slate-600 text-sm mt-1">
                    {cvData.personalInformation.email || "john.doe@example.com"}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {cvData.personalInformation.phone || "+1234567890"}
                  </p>
                </header>
                {/* Educational Experience */}
                <section className="mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
                    Educational Experience
                  </h2>
                  {cvData.educationalExperience.map((edu) => (
                    <div key={edu.id} className="mb-4 last:mb-0">
                      <p className="font-semibold text-slate-900">
                        {edu.degree || "Degree"}
                      </p>
                      <p className="text-sm text-slate-600">
                        {edu.schoolName || "School Name"} •{" "}
                        {edu.startDate || "2020"} – {edu.endDate || "2024"}
                      </p>
                    </div>
                  ))}
                </section>
                {/* Work Experience */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
                    Work Experience
                  </h2>
                  {cvData.workExperience.map((work) => (
                    <div key={work.id} className="mb-4 last:mb-0">
                      <p className="font-semibold text-slate-900">
                        {work.position || "Position"}
                      </p>
                      <p className="text-sm text-slate-600">
                        {work.companyName || "Company Name"} •{" "}
                        {work.startDate || "2020"} – {work.endDate || "2024"}
                      </p>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;

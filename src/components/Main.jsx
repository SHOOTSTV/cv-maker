import { useState } from "react";
import "../styles/App.css";
import { EducationalExperienceSection } from "./EducationalExperienceSection";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { WorkExperienceSection } from "./WorkExperienceSection";

function Main() {
  const [cvData, setCvData] = useState({
    personalInformation: {
      firstName: "",
      lastName: "",
      searchedJob: "",
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

  const updatePersonalInfo = (field, value) => {
    setCvData((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [field]: value,
      },
    }));
  };

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

  const removeWorkExperience = (id) => {
    if (cvData.workExperience.length > 1) {
      setCvData((prev) => ({
        ...prev,
        workExperience: prev.workExperience.filter((work) => work.id !== id),
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
              <PersonalInfoForm
                data={cvData.personalInformation}
                onChange={updatePersonalInfo}
              />
              {/* Educational Experience */}
              <EducationalExperienceSection
                data={cvData.educationalExperience}
                onChange={updateEducationalExperience}
                onAdd={addEducationalExperience}
                onRemove={removeEducationalExperience}
              />

              {/* Work Experience */}
              <WorkExperienceSection
                data={cvData.workExperience}
                onChange={updateWorkExperience}
                onAdd={addWorkExperience}
                onRemove={removeWorkExperience}
              />
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
                  <p className="text-slate-600 text-sm">
                    {cvData.personalInformation.searchedJob ||
                      "Software Engineer"}
                  </p>
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

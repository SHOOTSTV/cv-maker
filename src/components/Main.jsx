import { useState } from "react";
import "../styles/App.css";
import CvPreview from "./CvPreview";
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
          <CvPreview cvData={cvData} />
        </div>
      </main>
    </>
  );
}

export default Main;

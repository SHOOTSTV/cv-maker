function CvPreview({ cvData }) {
  return (
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
              {cvData.personalInformation.searchedJob || "Software Engineer"}
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
                  {edu.schoolName || "School Name"} • {edu.startDate || "2020"}{" "}
                  – {edu.endDate || "2024"}
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
  );
}

export default CvPreview;

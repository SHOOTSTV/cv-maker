import { DEFAULT_VALUES } from "../constants/constants";

function CvPreview({ cvData }) {
  return (
    <div className="space-y-2 lg:sticky lg:top-8 lg:self-start">
      <div className="no-print flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            Preview
          </h2>
          <p className="text-slate-500 text-sm">
            Real-time preview of your CV
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors"
        >
          Download PDF
        </button>
      </div>
      {/* A4 page blank */}
      <div
        className="bg-white text-left text-slate-800 shadow-sm border border-slate-100 overflow-hidden flex flex-col print:shadow-none print:border-0"
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
                : DEFAULT_VALUES.fullName}
            </h1>
            <p className="text-slate-600 text-sm">
              {cvData.personalInformation.searchedJob || DEFAULT_VALUES.job}
            </p>
            <p className="text-slate-600 text-sm mt-1">
              {cvData.personalInformation.email || DEFAULT_VALUES.email}
            </p>
            <p className="text-slate-600 text-sm">
              {cvData.personalInformation.phone || DEFAULT_VALUES.phone}
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
                  {edu.degree || DEFAULT_VALUES.degree}
                </p>
                <p className="text-sm text-slate-600">
                  {edu.schoolName || DEFAULT_VALUES.school} •{" "}
                  {edu.startDate || DEFAULT_VALUES.startDate} –{" "}
                  {edu.endDate || DEFAULT_VALUES.endDate}
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
                  {work.position || DEFAULT_VALUES.position}
                </p>
                <p className="text-sm text-slate-600">
                  {work.companyName || DEFAULT_VALUES.company} •{" "}
                  {work.startDate || DEFAULT_VALUES.startDate} –{" "}
                  {work.endDate || DEFAULT_VALUES.endDate}
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

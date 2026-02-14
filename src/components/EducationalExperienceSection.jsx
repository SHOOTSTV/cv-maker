import {
  buttonClass,
  cardClass,
  inputClass,
  labelClass,
  sectionTitleClass,
} from "../constants/formStyles";

export function EducationalExperienceSection({
  data,
  onChange,
  onAdd,
  onRemove,
}) {
  return (
    <form className={cardClass} onSubmit={(e) => e.preventDefault()}>
      <h3 className={sectionTitleClass}>
        <span className="w-1 h-5 bg-slate-800 rounded-full" />
        Educational Experience
      </h3>
      <div className="space-y-6">
        {data.map((edu) => (
          <div
            key={edu.id}
            className="space-y-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100"
          >
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor={`degree-${edu.id}`} className={labelClass}>
                  Degree
                </label>
                {data.length > 1 && (
                  <button
                    onClick={() => onRemove(edu.id)}
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
                onChange={(e) => onChange(edu.id, "degree", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`school-name-${edu.id}`} className={labelClass}>
                School Name
              </label>
              <input
                type="text"
                id={`school-name-${edu.id}`}
                placeholder="University name"
                className={inputClass}
                value={edu.schoolName}
                onChange={(e) => onChange(edu.id, "schoolName", e.target.value)}
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
                    onChange(edu.id, "startDate", e.target.value)
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
                  onChange={(e) => onChange(edu.id, "endDate", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className={`${buttonClass} mt-5`} onClick={onAdd}>
        + Add
      </button>
    </form>
  );
}

import { DEFAULT_VALUES } from "../constants/constants";
import {
  buttonClass,
  cardClass,
  inputClass,
  labelClass,
  sectionTitleClass,
} from "../constants/formStyles";

export function WorkExperienceSection({ data, onChange, onAdd, onRemove }) {
  return (
    <form className={cardClass} onSubmit={(e) => e.preventDefault()}>
      <h3 className={sectionTitleClass}>
        <span className="w-1 h-5 bg-slate-800 rounded-full" />
        Work Experience
      </h3>
      <div className="space-y-6">
        {data.map((work) => (
          <div
            key={work.id}
            className="space-y-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100"
          >
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor={`position-${work.id}`} className={labelClass}>
                  Position
                </label>
                {data.length > 1 && (
                  <button
                    onClick={() => onRemove(work.id)}
                    className={`text-sm text-red-600 hover:text-red-700 cursor-pointer transition-all duration-200`}
                  >
                    Delete
                  </button>
                )}
              </div>
              <input
                type="text"
                id={`position-${work.id}`}
                placeholder={DEFAULT_VALUES.position}
                className={inputClass}
                value={work.position}
                onChange={(e) => onChange(work.id, "position", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`company-name-${work.id}`} className={labelClass}>
                Company Name
              </label>
              <input
                type="text"
                id={`company-name-${work.id}`}
                placeholder={DEFAULT_VALUES.company}
                className={inputClass}
                value={work.companyName}
                onChange={(e) =>
                  onChange(work.id, "companyName", e.target.value)
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
                  placeholder={DEFAULT_VALUES.startDate}
                  id={`work-start-date-${work.id}`}
                  className={inputClass}
                  value={work.startDate}
                  onChange={(e) =>
                    onChange(work.id, "startDate", e.target.value)
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
                  placeholder={DEFAULT_VALUES.endDate}
                  id={`work-end-date-${work.id}`}
                  className={inputClass}
                  value={work.endDate}
                  onChange={(e) => onChange(work.id, "endDate", e.target.value)}
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

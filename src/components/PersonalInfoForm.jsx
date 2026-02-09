import {
  buttonClass,
  cardClass,
  inputClass,
  labelClass,
  sectionTitleClass,
} from "../utils/formStyles";

export function PersonalInfoForm({ data, onChange }) {
  const handleChange = (field) => (e) => {
    onChange?.(field, e.target.value);
  };

  return (
    <form className={cardClass} onSubmit={(e) => e.preventDefault()}>
      <h3 className={sectionTitleClass}>
        <span className="w-1 h-5 bg-slate-800 rounded-full" />
        Personal Information
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className={labelClass}>
              First Name *
            </label>
            <input
              type="text"
              placeholder="John"
              id="first-name"
              required
              className={inputClass}
              value={data?.firstName ?? ""}
              onChange={handleChange("firstName")}
            />
          </div>
          <div>
            <label htmlFor="last-name" className={labelClass}>
              Last Name *
            </label>
            <input
              type="text"
              placeholder="Doe"
              id="last-name"
              required
              className={inputClass}
              value={data?.lastName ?? ""}
              onChange={handleChange("lastName")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="searched-job" className={labelClass}>
            Searched Job
          </label>
          <input
            type="text"
            placeholder="e.g. Software Engineer"
            id="searched-job"
            className={inputClass}
            value={data?.searchedJob ?? ""}
            onChange={handleChange("searchedJob")}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              id="email"
              className={inputClass}
              value={data?.email ?? ""}
              onChange={handleChange("email")}
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
              value={data?.phone ?? ""}
              onChange={handleChange("phone")}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`${buttonClass} mt-5 bg-slate-800 hover:bg-slate-700`}
      >
        Save
      </button>
    </form>
  );
}

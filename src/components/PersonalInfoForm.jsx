import { useState } from "react";
import {
  buttonClass,
  cardClass,
  inputClass,
  labelClass,
  sectionTitleClass,
} from "../constants/formStyles";

export function PersonalInfoForm({ data, onChange }) {
  const [isLocked, setIsLocked] = useState(false);

  const handleChange = (field) => (e) => {
    onChange?.(field, e.target.value);
  };

  const handleLockToggle = () => {
    setIsLocked((prev) => !prev);
  };

  return (
    <form
      className={`${cardClass} transition-all duration-200 ${
        isLocked
          ? "border-slate-300 bg-slate-50/80 shadow-md ring-2 ring-slate-200 ring-inset"
          : ""
      }`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        className={
          isLocked
            ? "opacity-75 transition-opacity duration-200 pointer-events-none"
            : ""
        }
      >
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
                disabled={isLocked}
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
                disabled={isLocked}
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
              disabled={isLocked}
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
                disabled={isLocked}
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
                disabled={isLocked}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleLockToggle}
        className={`${buttonClass} mt-5 ${isLocked ? " bg-slate-800" : ""} `}
      >
        {isLocked ? "Edit" : "Save"}
      </button>
    </form>
  );
}

import { useState } from "react";
import styles from "./EnrollmentForm.module.css";

export default function EnrollmentForm() {
  const [programType, setProgramType] = useState("");
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    programType: "",
    timeSlot: "",
    additionalInfo: "",
  });

  const timings = {
    "Activity Centre": [
      "9:30 am – 11:30 am",
      "01:00 pm – 3:00 pm",
      "4:00 pm – 6:00 pm",
    ],
    "Full Activity Plan": [
      "8:30 am – 11:30 am",
      "12:00 pm – 3:00 pm",
      "4:00 pm – 7:00 pm",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleProgramChange = (e) => {
    const value = e.target.value;
    setProgramType(value);
    setFormData((p) => ({
      ...p,
      programType: value,
      timeSlot: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbwhPWN21oyxWWuwGKbJrrDutrAPFb77qFYEyET8WUVGtMqLRfLQHSCz7VohcYeNx8PI/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      mode: "no-cors",
    });

    alert("Enrollment submitted successfully!");

    setFormData({
      childName: "",
      age: "",
      parentName: "",
      phone: "",
      email: "",
      programType: "",
      timeSlot: "",
      additionalInfo: "",
    });
    setProgramType("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Enroll Today</h2>

      <input
        name="childName"
        placeholder="Child Name"
        value={formData.childName}
        onChange={handleChange}
        required
      />

      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <input
        name="parentName"
        placeholder="Parent Name"
        value={formData.parentName}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Program */}
      <select value={programType} onChange={handleProgramChange} required>
        <option value="">Select Program</option>
        <option value="Activity Centre">Activity Centre</option>
        <option value="Full Activity Plan">Full Activity Plan</option>
      </select>

      {/* Timings */}
      {programType && (
        <select
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
          required
        >
          <option value="">Select Time Slot</option>
          {timings[programType].map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      )}

      <textarea
        name="additionalInfo"
        placeholder="Additional Information (optional)"
        value={formData.additionalInfo}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

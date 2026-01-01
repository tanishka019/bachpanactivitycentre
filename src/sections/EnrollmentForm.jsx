import { useState } from "react";
import styles from "./EnrollmentForm.module.css";

const initialForm = {
  childName: "",
  dob: "",
  age: "",
  gender: "",

  parentName: "",
  relationship: "",
  phone: "",
  alternatePhone: "",
  email: "",
  address: "",

  emergencyName: "",
  emergencyRelation: "",
  emergencyPhone: "",

  allergies: "",
  medicalConditions: "",
  medications: "",
  doctorName: "",
  doctorPhone: "",

  programType: "",
  timeSlot: "",

  firstAidConsent: false,
  activityConsent: false,
  photoConsent: "",
};

export default function EnrollmentForm() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbwhPWN21oyxWWuwGKbJrrDutrAPFb77qFYEyET8WUVGtMqLRfLQHSCz7VohcYeNx8PI/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      mode: "no-cors",
    });

    alert("Submitted");
    setFormData(initialForm);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Child Information</h2>
      <input name="childName" value={formData.childName} onChange={handleChange} placeholder="Child Name" />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />

      <label><input type="radio" name="gender" value="Male" onChange={handleChange}/> Male</label>
      <label><input type="radio" name="gender" value="Female" onChange={handleChange}/> Female</label>
      <label><input type="radio" name="gender" value="Other" onChange={handleChange}/> Other</label>

      <h2>Parent Details</h2>
      <input name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Parent Name" />
      <input name="relationship" value={formData.relationship} onChange={handleChange} placeholder="Relationship" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input name="alternatePhone" value={formData.alternatePhone} onChange={handleChange} placeholder="Alternate Phone" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" />

      <h2>Program</h2>
      <select name="programType" value={formData.programType} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Daily Activity Center">Daily Activity Center</option>
        <option value="Full Activity Plan">Full Activity Plan</option>
        <option value="Weekend Activity">Weekend Activity</option>
      </select>

      <select name="timeSlot" value={formData.timeSlot} onChange={handleChange}>
        <option value="">Select Time</option>
        <option value="9:30–11:30">9:30–11:30</option>
        <option value="1:00–3:00">1:00–3:00</option>
        <option value="4:00–6:00">4:00–6:00</option>
      </select>

      <h2>Consent</h2>
      <label><input type="checkbox" name="firstAidConsent" onChange={handleCheckbox}/> First Aid</label>
      <label><input type="checkbox" name="activityConsent" onChange={handleCheckbox}/> Activities</label>

      <select name="photoConsent" value={formData.photoConsent} onChange={handleChange}>
        <option value="">Photo Consent</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

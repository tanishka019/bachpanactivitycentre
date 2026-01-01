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

const EnrollmentForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwhPWN21oyxWWuwGKbJrrDutrAPFb77qFYEyET8WUVGtMqLRfLQHSCz7VohcYeNx8PI/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      alert("Enrollment submitted successfully!");
      setFormData(initialForm);
    } catch (err) {
      alert("Submission failed");
    }

    setSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Enrollment Form</h1>

      {/* Child Information */}
      <section className={styles.section}>
        <h2>Child Information</h2>

        <input name="childName" placeholder="Child's Name" value={formData.childName} onChange={handleChange} required />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />

        <div className={styles.radioGroup}>
          <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
        </div>
      </section>

      {/* Parent Info */}
      <section className={styles.section}>
        <h2>Parent / Guardian Information</h2>

        <input name="parentName" placeholder="Parent / Guardian Name" onChange={handleChange} required />
        <input name="relationship" placeholder="Relationship to Child" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="alternatePhone" placeholder="Alternate Phone Number" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>
      </section>

      {/* Emergency */}
      <section className={styles.section}>
        <h2>Emergency Contact</h2>

        <input name="emergencyName" placeholder="Contact Name" onChange={handleChange} />
        <input name="emergencyRelation" placeholder="Relationship" onChange={handleChange} />
        <input name="emergencyPhone" placeholder="Phone Number" onChange={handleChange} />
      </section>

      {/* Medical */}
      <section className={styles.section}>
        <h2>Medical Information</h2>

        <input name="allergies" placeholder="Known Allergies" onChange={handleChange} />
        <input name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />
        <input name="medications" placeholder="Medications (if any)" onChange={handleChange} />
        <input name="doctorName" placeholder="Doctor's Name" onChange={handleChange} />
        <input name="doctorPhone" placeholder="Doctor's Phone" onChange={handleChange} />
      </section>

      {/* Program */}
      <section className={styles.section}>
        <h2>Program Selection</h2>

        <select name="programType" onChange={handleChange} required>
          <option value="">Select Program</option>
          <option value="Daily Activity Center">Daily Activity Center</option>
          <option value="Full Activity Plan">Full Activity Plan</option>
          <option value="Weekend Activity">Weekend Activity</option>
        </select>

        <select name="timeSlot" onChange={handleChange} required>
          <option value="">Select Time Slot</option>
          <option value="9:30 am – 11:30 am">9:30 am – 11:30 am</option>
          <option value="1:00 pm – 3:00 pm">1:00 pm – 3:00 pm</option>
          <option value="4:00 pm – 6:00 pm">4:00 pm – 6:00 pm</option>
          <option value="8:30 am – 11:30 am">8:30 am – 11:30 am (Full)</option>
          <option value="12:00 pm – 3:00 pm">12:00 pm – 3:00 pm (Full)</option>
          <option value="4:00 pm – 7:00 pm">4:00 pm – 7:00 pm (Full)</option>
        </select>
      </section>

      {/* Consent */}
      <section className={styles.section}>
        <h2>Permissions & Consent</h2>

        <label className={styles.checkbox}>
          <input type="checkbox" name="firstAidConsent" onChange={handleCheckbox} />
          I authorize first aid if required
        </label>

        <label className={styles.checkbox}>
          <input type="checkbox" name="activityConsent" onChange={handleCheckbox} />
          I consent to participation in activities
        </label>

        <select name="photoConsent" onChange={handleChange} required>
          <option value="">Photo / Video Consent</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </section>

      <button className={styles.submit} type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Enrollment"}
      </button>
    </form>
  );
};

export default EnrollmentForm;

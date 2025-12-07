import React, { useState } from "react";
import styles from "./EnrollmentForm.module.css";

const initialForm = {
  childName: "",
  childAge: "",
  ageGroup: "",
  parentName: "",
  phone: "",
  email: "",
  program: "",
  timeSlot: "",
  notes: "",
};

const EnrollmentForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccessMsg("");
    setErrorMsg("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.childName.trim()) newErrors.childName = "Please enter your child's name.";
    if (!formData.childAge.trim()) newErrors.childAge = "Please enter age.";
    if (!formData.ageGroup) newErrors.ageGroup = "Please select an age group.";
    if (!formData.parentName.trim()) newErrors.parentName = "Please enter parent's name.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter a phone number.";
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter an email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.program) newErrors.program = "Please select a program.";
    if (!formData.timeSlot) newErrors.timeSlot = "Please choose a time slot.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      // adjust URL if your backend runs on a different server
      const res = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      setSuccessMsg("Form submitted successfully! We'll get in touch soon.");
      setFormData(initialForm);
      setErrors({});
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enrollment" className={styles.section}>
      {/* floating toys in background */}
      <div className={styles.floatingBg}>
        <span className={`${styles.toy} ${styles.t1}`}>🧸</span>
        <span className={`${styles.toy} ${styles.t2}`}>🎈</span>
        <span className={`${styles.toy} ${styles.t3}`}>🪁</span>
      </div>

      <div className="container">
        <div className={styles.dottedBox}>
          <h2 className={styles.heading}>Enrollment Form</h2>
          <p className={styles.subtext}>
            Share a few details and we’ll help you pick the best batch for your child.
          </p>

          {successMsg && <div className={styles.successBox}>{successMsg}</div>}
          {errorMsg && <div className={styles.errorBox}>{errorMsg}</div>}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Child Details */}
            <div className={styles.groupTitle}>Child's Details</div>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label htmlFor="childName">Child’s Name *</label>
                <input
                  id="childName"
                  name="childName"
                  type="text"
                  value={formData.childName}
                  onChange={handleChange}
                />
                {errors.childName && <p className={styles.errorText}>{errors.childName}</p>}
              </div>

              <div className={styles.field}>
                <label htmlFor="childAge">Child’s Age *</label>
                <input
                  id="childAge"
                  name="childAge"
                  type="text"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="e.g. 4.5 years"
                />
                {errors.childAge && <p className={styles.errorText}>{errors.childAge}</p>}
              </div>

              <div className={styles.field}>
                <label htmlFor="ageGroup">Age Group *</label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                >
                  <option value="">Select age group</option>
                  <option value="Toddlers (2–3 yrs)">Toddlers (2–3 yrs)</option>
                  <option value="Nursery (3–4 yrs)">Nursery (3–4 yrs)</option>
                  <option value="Kinder (4–6 yrs)">Kinder (4–6 yrs)</option>
                  <option value="Juniors (6–8 yrs)">Juniors (6–8 yrs)</option>
                </select>
                {errors.ageGroup && <p className={styles.errorText}>{errors.ageGroup}</p>}
              </div>
            </div>

            {/* Parent Details */}
            <div className={styles.groupTitle}>Parent’s Details</div>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label htmlFor="parentName">Parent’s Name *</label>
                <input
                  id="parentName"
                  name="parentName"
                  type="text"
                  value={formData.parentName}
                  onChange={handleChange}
                />
                {errors.parentName && <p className={styles.errorText}>{errors.parentName}</p>}
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                />
                {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}
              </div>
            </div>

            {/* Program & Timing */}
            <div className={styles.groupTitle}>Program & Timing</div>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label htmlFor="program">Preferred Program *</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="">Select a program</option>
                  <option value="Daily Activity Centre">Daily Activity Centre</option>
                  <option value="Weekend Activity Club">Weekend Activity Club</option>
                  <option value="Evening Enrichment Classes">
                    Evening Enrichment Classes
                  </option>
                </select>
                {errors.program && <p className={styles.errorText}>{errors.program}</p>}
              </div>

              <div className={styles.field}>
                <label htmlFor="timeSlot">Preferred Time Slot *</label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                >
                  <option value="">Select time slot</option>
                  <option value="9:30 am – 11:30 am">9:30 am – 11:30 am</option>
                  <option value="12:00 pm – 2:00 pm">12:00 pm – 2:00 pm</option>
                  <option value="4:00 pm – 6:00 pm">4:00 pm – 6:00 pm</option>
                </select>
                {errors.timeSlot && <p className={styles.errorText}>{errors.timeSlot}</p>}
              </div>
            </div>

            {/* Notes */}
            <div className={styles.field}>
              <label htmlFor="notes">Any Notes / Special Requirements</label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Anything we should know about your child (allergies, preferences, etc.)"
              />
            </div>

            <div className={styles.actions}>
              <button type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Enrollment"}
              </button>
              <p className={styles.helperText}>
                We’ll contact you within 1–2 working days to confirm batch and details.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;

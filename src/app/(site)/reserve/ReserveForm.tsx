"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const SESSION_TYPES = [
  "The Headshot", "The Portrait Session", "The Brand Session",
  "Editorial Half Day", "Full Day Campaign",
];

const ALL_TIMES = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

// Demo availability, mirroring the production availability engine:
// the studio is closed on Sundays, and Saturdays offer morning sessions only.
function getDemoTimes(date: string): string[] {
  if (!date) return [];
  const day = new Date(`${date}T12:00:00`).getDay();
  if (day === 0) return [];
  if (day === 6) return ALL_TIMES.slice(0, 2);
  return ALL_TIMES;
}

export default function ReserveForm() {
  const form = useRef<HTMLFormElement>(null);
  const startTimeRef = useRef(Date.now());

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    preferredContact: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    sessionType: "",
    locationType: "",
    portfolio: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);

  const availableTimes = getDemoTimes(formData.date);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "date" ? { time: "" } : {}),
      }));
    setError("");
    setFieldError(null);
  };

  /* SUBMIT */
  const handleSubmit = async ( e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    const fd = new FormData(form.current);

    const firstName = fd.get("firstName")?.toString().trim();
    const lastName = fd.get("lastName")?.toString().trim();

    // honeypot
    const company = fd.get("company")?.toString().trim();
    if (company) {
      setLoading(false);
      return;
    }

    // bot speed check
    const timeTaken = Date.now() - startTimeRef.current;
    if (timeTaken < 3000) {
      setError("Please take a moment to review your request before submitting.");
      setLoading(false);
      return;
    }

    if (!firstName || !lastName) {
      setError("Name required");
      if (!firstName) setFieldError("firstName");
      if (!lastName) setFieldError("lastName");
      setLoading(false);
      return;
    }

    if (formData.preferredContact === "email" &&
      !isValidEmail(formData.email)
      ) {
        setError("Enter a valid email");
        setLoading(false);
        setFieldError("email");
        return;
    }

    if (formData.preferredContact === "phone" &&
      !isValidPhone(formData.phone)
      ) {
        setError("Enter a valid phone number");
        setLoading(false);
        setFieldError("phone");
        return;
    }

    if (!formData.date) {
      setError("Select a date");
      setLoading(false);
      setFieldError("date");
      return;
    }
    if (!formData.time) {
      setError("Select a time");
      setLoading(false);
      setFieldError("time");
      return;
    }
    if (!formData.sessionType) {
      setError("Select a session type");
      setLoading(false);
      setFieldError("sessionType");
      return;
    }
    if (!formData.locationType) {
      setError("Select a location type");
      setLoading(false);
      setFieldError("locationType");
      return;
    }

    try {
      // Showcase build: inquiries are stored locally in the browser.
      // The production version of this form writes to a bookings
      // database and sends a notification email on submit.
      const inquiries = JSON.parse(localStorage.getItem("vera-rose-inquiries") || "[]");
      inquiries.push({ ...formData, submittedAt: new Date().toISOString(), status: "pending" });
      localStorage.setItem("vera-rose-inquiries", JSON.stringify(inquiries));

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        preferredContact: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        sessionType: "",
        locationType: "",
        portfolio: "",
        notes: "",
      });
    } catch (err) {
      console.error("ERROR:", err);
      setError("Failed to submit request");
    }
    setLoading(false);
  };

  return (

    <section className="bg-background min-h-screen text-foreground px-6 py-40">
        <motion.section
          className="relative opacity-0 "
          initial= {{ opacity:0 }}
          animate={{  opacity:1 }}
          transition={{ duration: 1}}
          style={{ willChange:"transform, opacity"}}
        >

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="mt-6 text-5xl heading-wider md:text-6xl heading-wider">
            Reserve
          </h2>

          <div className="w-20 h-px bg-primary/40 mx-auto my-8" />

          <p className="text-lg text-foreground/65 body-relaxed">
            Replies typically within two business days.
          </p>
        </div>


        {/* Form */}
        <div className="max-w-3xl mx-auto ">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="rounded-2xl text-sm p-10 md:p-14 shadow-xl"
          >
            {/* NAME */}
            <div className="grid md:grid-cols-2 gap-8">
              <Input
                label="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="tracking-[0.10]"
              />
              <Input
                label="Last Name *"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="tracking-[0.10]"
              />
            </div>

            {/* CONTACT */}
            <div className="mt-8">
              <label className="block text-sm uppercase tracking-[0.10em] mb-3">
                Preferred Contact *
              </label>

              <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="appearance-none rounded-xl w-full border border-foreground/35 text-md bg-background px-5 py-4 focus:outline-none focus:border-primary"
                required
              >
                <option value="">Select one</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>

            {formData.preferredContact === "email" && (
              <div className="mt-8">
                <Input
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={fieldError === "email"}
                  required
                />
              </div>
            )}

            {formData.preferredContact === "phone" && (
              <div className="mt-8">
                <Input
                  label="Phone *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={fieldError === "phone"}
                  required
                />
              </div>
            )}

            {/*  DATE */}
            <div className="mt-8">
              <Input
                label="Requested Date *"
                type="date"
                value={formData.date}
                name="date"
                onChange={handleChange}
                error={fieldError === "date"}
                required
              />

              {/* LOCATION TYPE */}
              <div className="mt-8">
                <p className="uppercase tracking-[0.10em] text-sm">
                  Location Type *
                </p>
                <div className="gap-5 mt-2 text-md">
                  <label className="ml-10">
                    <input
                      type="checkbox"
                      className="mr-2 border border-primary"
                      name="locationType"
                      value="In Studio"
                      checked={formData.locationType === "In Studio"}
                      onChange={handleChange}
                    />
                    In Studio
                  </label>
                  <br></br>
                  <label className="ml-10">
                    <input
                      type="checkbox"
                      className="mr-2 border border-primary"
                      name="locationType"
                      value="On Location"
                      checked={formData.locationType === "On Location"}
                      onChange={handleChange}
                    />
                    On Location (New York)
                  </label>
                </div>
              </div>
            </div>

            {/*  TIME */}
            <div className="mt-10">
              <p className="mb-4 uppercase tracking-[0.10em] text-sm">
                Available times (ET) *
              </p>
              <div>
                {!formData.date && (
                  <p className="text-sm opacity-70">
                    Choose a date to see available times
                  </p>
                )}

                {formData.date && availableTimes.length === 0 && (
                  <p className="text-sm opacity-70">
                    The studio is closed on Sundays — please choose another date
                  </p>
                )}
              </div>
            {/* AVAIL TIMES BUTTONS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 w-full max-w-3xl">
              {availableTimes.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() =>
                    setFormData(prev => ({
                      ...prev,
                      time: slot
                    }))
                  }
                  className={`w-full
                    px-2 sm:px-3
                    py-2 sm:py-3
                    text-md
                    sm:text-lg
                    border rounded-xl
                    transition-all duration-300
                    whitespace-nowrap
                    ${
                      formData.time === slot
                        ? "bg-primary text-background border-primary"
                        : "border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    }`}
                  >
                    {slot}
                  </button>
              ))}
            </div>
          </div>

            {/* SESSION TYPE */}
            <div className="mt-10">
              <p className="mb-4 uppercase tracking-[0.10em] text-sm">
                Requested Session *
              </p>
              <div className="flex-col grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 w-full max-w-3xl">
                {SESSION_TYPES.map((sessionType) => (
                  <button
                    key={sessionType}
                    type="button"
                    onClick={() => setFormData(prev=> ({
                      ...prev,
                      sessionType,
                    }))}

                    className={`px-2 py-2 border rounded-xl text-md

                      ${
                        formData.sessionType === sessionType
                          ? "bg-primary text-background border-primary"
                          : "border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                      }`}
                  >
                    {sessionType}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-10 tracking-[0.10]">
              <Input
                label="Website, LinkedIn, or Instagram"
                name="portfolio"
                type="text"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>
            <div className="mt-10 tracking-[0.10]">
              <Input
                label="Tell us about your session"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="text-center mt-6 text-foreground tracking-wide font-bold text-md">
                {error}
              </p>

            )}

            {success && (
              <p className="text-center mt-8 text-md font-bold text-(--color-foreground) tracking-wide">
                Session request sent. The studio will reply shortly.
              </p>
            )}

            <button
              className="w-full text-md rounded-xl mt-10 bg-primary py-4 text-background hover:bg-primary/90 transition duration-500"
            >
              {loading
                ? "Sending..."
                : "Submit Request"}
            </button>

            {/* part of honey pot - hidden input for spam protection */}
            <input
              name="company"
              autoComplete="off"
              className="hidden"
            />
          </form>
        </div>
      </div>
      </motion.section>
    </section>
  );
}


const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
const isValidPhone = (phone: string) => {
  return /^\+?[0-9\s()-]{7,20}$/.test(phone);
}

type InputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: boolean;
};

function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-[0.10em] text-foreground/90 mb-3">
        {label}
      </label>

      <input
        {...props}
        className={`w-full rounded-xl bg-transparent border px-5 py-4 text-lg focus:outline-none transition
          ${
            error
              ? "border-red-500"
              : "focus:border-primary border-foreground/30"
          }`}
      />
    </div>
  );
}

"use client";
import { useState } from "react";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  ChevronDown,
  CheckCircle,
  Loader2,
} from "lucide-react";

const INQUIRY_TYPES = [
  "Recruitment Inquiry",
  "Sponsorship Opportunity",
  "Media Request",
  "General Inquiry",
];

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    inquiryType: INQUIRY_TYPES[0],
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  const [loadedAt] = useState(() => Date.now());

  const displayName = profile?.name || "this athlete";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _t: loadedAt }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setFormData({
        inquiryType: INQUIRY_TYPES[0],
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="section-surface py-5" id="contact">
      <div className="container py-4">
        <p className="section-heading">Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <hr className="section-divider" />

        <div className="row g-4 tw-mt-8">
          {/* Left - Info */}
          <div className="col-lg-5">
            <p className="tw-text-gray-400 tw-text-sm tw-leading-relaxed tw-mb-8 tw-max-w-md">
              Interested in recruiting {displayName}? Reach out directly or send
              a message through the form.
            </p>

            {/* Email card */}
            <div>
              <label className="tw-block tw-text-[11px] tw-uppercase tw-tracking-[0.15em] tw-text-gray-500 tw-font-semibold tw-mb-2">
                Email
              </label>
              <div className="tw-flex tw-items-center tw-bg-white/[0.05] tw-border tw-border-white/10 tw-rounded-lg tw-px-4 tw-py-3 focus-within:tw-border-[#c5f82a]/40 tw-transition-colors">
                <Mail
                  size={14}
                  className="tw-text-amber-400 tw-shrink-0 tw-mr-3"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="tw-w-full tw-bg-transparent tw-border-none tw-outline-none tw-text-sm tw-text-white placeholder:tw-text-gray-600 tw-p-0"
                />
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="tw-space-y-4">
              {/* Inquiry Type */}
              <div>
                <label className="tw-block tw-text-[11px] tw-uppercase tw-tracking-[0.15em] tw-text-gray-500 tw-font-semibold tw-mb-2">
                  Inquiry Type
                </label>
                <div className="tw-relative">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="tw-w-full tw-appearance-none tw-bg-white/[0.05] tw-border tw-border-white/10 tw-rounded-lg tw-px-4 tw-py-3 tw-text-sm tw-text-white tw-outline-none focus:tw-border-[#c5f82a]/40 tw-transition-colors tw-cursor-pointer"
                  >
                    {INQUIRY_TYPES.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="tw-bg-gray-900"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-text-gray-500 tw-pointer-events-none"
                  />
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="tw-block tw-text-[11px] tw-uppercase tw-tracking-[0.15em] tw-text-gray-500 tw-font-semibold tw-mb-2">
                  Your Name
                </label>
                <div className="tw-flex tw-items-center tw-bg-white/[0.05] tw-border tw-border-white/10 tw-rounded-lg tw-px-4 tw-py-3 focus-within:tw-border-[#c5f82a]/40 tw-transition-colors">
                  <User
                    size={14}
                    className="tw-text-gray-600 tw-shrink-0 tw-mr-3"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Scout / Coach name"
                    className="tw-w-full tw-bg-transparent tw-border-none tw-outline-none tw-text-sm tw-text-white placeholder:tw-text-gray-600 tw-p-0"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="tw-block tw-text-[11px] tw-uppercase tw-tracking-[0.15em] tw-text-gray-500 tw-font-semibold tw-mb-2">
                  Message
                </label>
                <div className="tw-flex tw-items-start tw-bg-white/[0.05] tw-border tw-border-white/10 tw-rounded-lg tw-px-4 tw-py-3 focus-within:tw-border-[#c5f82a]/40 tw-transition-colors">
                  <MessageSquare
                    size={14}
                    className="tw-text-gray-600 tw-shrink-0 tw-mr-3 tw-mt-0.5"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell the athlete what you're looking for..."
                    className="tw-w-full tw-bg-transparent tw-border-none tw-outline-none tw-text-sm tw-text-white placeholder:tw-text-gray-600 tw-p-0 tw-resize-none"
                  />
                </div>
              </div>

              {/* honeypot */}
              <div className="tw-absolute tw-opacity-0 tw-h-0 tw-overflow-hidden" aria-hidden="true" tabIndex={-1}>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {status === "error" && (
                <p className="tw-text-red-400 tw-text-sm tw-m-0">
                  {errorMsg}
                </p>
              )}

              {status === "sent" ? (
                <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-emerald-600 tw-text-white tw-font-bold tw-text-sm tw-uppercase tw-tracking-wider tw-py-3.5 tw-px-6 tw-rounded-lg">
                  <CheckCircle size={16} />
                  Message Sent!
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="tw-w-full tw-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-amber-500 hover:tw-bg-amber-400 tw-text-gray-900 tw-font-bold tw-text-sm tw-uppercase tw-tracking-wider tw-py-3.5 tw-px-6 tw-rounded-lg tw-border-none tw-cursor-pointer tw-transition-all tw-duration-300 hover:tw-shadow-[0_8px_25px_rgba(245,158,11,0.3)] disabled:tw-opacity-60 disabled:tw-cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <Loader2 size={16} className="tw-animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {status === "sending"
                    ? "Sending..."
                    : "Send Recruitment Message"}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

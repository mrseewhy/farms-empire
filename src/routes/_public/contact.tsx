import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Farms Empire" },
      { name: "description", content: "Reach out by phone, email, or visit any of our farm locations today." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/contact` },
      { property: "og:title", content: "Contact Us | Farms Empire" },
      { property: "og:description", content: "Reach out by phone, email, or visit any of our farm locations today." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Us | Farms Empire" },
      { name: "twitter:description", content: "Reach out by phone, email, or visit any of our farm locations today." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/contact` },
    ],
  }),
  component: ContactPage,
});

const farmLocations = [
  "Chidi Akaya Compound, by Old Police Station, Beside Anglican Church, Okoloma Afam, Rivers State.",
  "7 David Lane, Poultry Road, Oyigbo West, Oyigbo, Rivers State.",
  "Well 8 Close, off Shell Location Road, Rumuepirikom, Port Harcourt, Rivers State.",
  "Federal Government Girls' College road, Abuloma, Port Harcourt, Rivers State.",
  "Lagos State Farm Estate, Odogunyan, Ikorodu, Lagos State.",
  "Arigbawo Road, Off Mowe-Ofada Road, Mowe, Ogun State.",
];

const partnerTypes = [
  "Landowner / Property Investor",
  "Community Representative",
  "Cooperative or Farmers Group",
  "Impact Investor",
  "Government / Development Agency",
  "Media / Researcher",
  "Other",
];

interface FormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  partnerType: string;
  subject: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  partnerType?: string;
  subject?: string;
  message?: string;
}

const initialFormData: FormData = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  partnerType: "",
  subject: "",
  message: "",
  honeypot: "",
};

function ContactPage() {
  useDocumentTitle("Contact Us | Farms Empire");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.partnerType.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "" &&
    formData.honeypot === "";

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d\s\-+()]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.partnerType)
      newErrors.partnerType = "Please select your role.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot !== "") return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with your EmailJS credentials
      // import emailjs from "@emailjs/browser";
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   {
      //     fullName: formData.fullName,
      //     organization: formData.organization,
      //     email: formData.email,
      //     phone: formData.phone,
      //     partnerType: formData.partnerType,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   "YOUR_PUBLIC_KEY",
      // );

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="Reach out by phone, email, or visit any of our farm locations today."
      />

      {/* Hero Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Let's Grow Something Together
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Whether you are a landowner ready to activate your asset, a
                  community seeking agricultural partnership, an investor
                  exploring impact opportunities, or a development agency
                  looking for a field-proven implementation partner - the
                  conversation starts here.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/contact.jpg"
                    alt="Contact Farms Empire"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Farm Locations */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our Farm Locations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Active agricultural operations across Nigeria.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {farmLocations.map((location, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <div className="group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {location}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-2 text-muted-foreground">
              Reach out through any of the channels below.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/con-2.jpg"
                    alt="Get in touch with Farms Empire"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex gap-3">
                  {[
                    {
                      icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                      url: siteConfig.social.twitter,
                    },
                    {
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                      url: siteConfig.social.instagram,
                    },
                    {
                      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                      url: siteConfig.social.linkedin,
                    },
                    {
                      icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
                      url: siteConfig.social.youtube,
                    },
                  ].map((social) => (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-200 hover:bg-primary/20 hover:scale-110"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Branch Offices
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nigeria. Kenya. Uganda. Ghana. South Africa
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Mobile/WhatsApp
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    General Enquiries
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email.general}`}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.contact.email.general}
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Partnership & Landowner
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email.partnerships}`}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.contact.email.partnerships}
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Media & Publications
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email.media}`}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.contact.email.media}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form Grid */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we will get back to you.
                </p>
                <form
                  className="mt-8 space-y-5"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Honeypot field - hidden from real users */}
                  <div
                    className="absolute left-[-9999px] top-[-9999px] opacity-0"
                    style={{ height: 0, width: 0, overflow: "hidden" }}
                    aria-hidden="true"
                  >
                    <label htmlFor="website">Leave this blank</label>
                    <input
                      type="text"
                      id="website"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-border focus:border-primary focus:ring-primary/20"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Organization / Community Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter organization or community name"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-2 w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-border focus:border-primary focus:ring-primary/20"
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`mt-2 w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-border focus:border-primary focus:ring-primary/20"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="partnerType"
                      className="block text-sm font-semibold text-foreground"
                    >
                      I am a: <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="partnerType"
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground transition-all focus:outline-none focus:ring-2 ${
                        errors.partnerType
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-border focus:border-primary focus:ring-primary/20"
                      }`}
                    >
                      <option value="">Select your role</option>
                      {partnerTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.partnerType && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.partnerType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-border focus:border-primary focus:ring-primary/20"
                      }`}
                      placeholder="Enter subject"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`mt-2 w-full resize-none rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-border focus:border-primary focus:ring-primary/20"
                      }`}
                      placeholder="Enter your message"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Success/Error messages */}
                  {submitStatus === "success" && (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                      <p className="text-sm font-medium text-green-800">
                        Your message has been sent successfully. We will get
                        back to you soon.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                      <p className="text-sm font-medium text-red-800">
                        Something went wrong. Please try again later or contact
                        us directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] sm:w-auto disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="lg:sticky lg:top-24">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/con-3.jpg"
                    alt="Send us a message"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}

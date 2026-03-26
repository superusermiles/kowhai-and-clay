'use client'

import { useEffect, useMemo, useState } from 'react';

const enquiryTypes = [
  'Commission enquiry',
  'Workshop booking',
  'Studio visit',
  'Press or collaboration',
] as const;

const budgetRanges = [
  'Under NZ$500',
  'NZ$500–1,500',
  'NZ$1,500–3,000',
  'NZ$3,000+',
] as const;

const timelineOptions = [
  'Within 2 weeks',
  'Within 1–2 months',
  'Within 3–6 months',
  'Just exploring',
] as const;

const contactMethods = ['Email', 'Instagram DM'] as const;
const studioEmail = 'hello@kowhaiandclay.co.nz';
const instagramHandle = '@kowhaiandclay';
const instagramUrl = 'https://instagram.com/kowhaiandclay';
const formEndpoint = 'https://formsubmit.co/hello@kowhaiandclay.co.nz';
const successRedirect = 'https://kowhai-and-clay.vercel.app/contact/?submitted=true';

type SubmitState = 'idle' | 'submitting';

type FormState = {
  name: string;
  email: string;
  enquiryType: (typeof enquiryTypes)[number];
  project: string;
  timeline: (typeof timelineOptions)[number];
  budget: (typeof budgetRanges)[number];
  contactMethod: (typeof contactMethods)[number];
  message: string;
  website: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  enquiryType: enquiryTypes[0],
  project: '',
  timeline: timelineOptions[3],
  budget: budgetRanges[1],
  contactMethod: contactMethods[0],
  message: '',
  website: '',
};

function createMailtoLink(formData: FormState) {
  const subject = `${formData.enquiryType} — ${formData.name || 'New enquiry'}`;
  const body = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Enquiry type: ${formData.enquiryType}`,
    `Project or workshop interest: ${formData.project}`,
    `Desired timing: ${formData.timeline}`,
    `Budget range: ${formData.budget}`,
    `Preferred contact method: ${formData.contactMethod}`,
    '',
    'Project details:',
    formData.message,
  ].join('\n');

  return `mailto:${studioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    if (url.searchParams.get('submitted') !== 'true') return;

    setIsSubmitted(true);
    url.searchParams.delete('submitted');
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }, []);

  const draftMailto = useMemo(() => createMailtoLink(formData), [formData]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = 'Please add your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please add your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.project.trim()) {
      nextErrors.project = 'Please describe the project or booking you have in mind.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Please share a few project details for the studio.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      event.preventDefault();
      setSubmitState('idle');
      return;
    }

    if (formData.website.trim()) {
      event.preventDefault();
      setSubmitState('idle');
      setFormData(initialFormState);
      return;
    }

    setIsSubmitted(false);
    setSubmitState('submitting');
    setErrors({});
  };

  return (
    <div className="mt-8 space-y-5">
      {isSubmitted ? (
        <div className="rounded-[20px] border border-kowhai/30 bg-kowhai/12 px-5 py-4 text-sm leading-7 text-iron/78">
          Thank you. Your enquiry has been sent to the studio. You can expect a reply with availability, lead times,
          and the best next step.
        </div>
      ) : null}

      <form
        className="grid gap-5"
        action={formEndpoint}
        method="POST"
        onSubmit={handleSubmit}
        noValidate
      >
        <input type="hidden" name="_subject" value="New Kōwhai & Clay enquiry" />
        <input type="hidden" name="_next" value={successRedirect} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_replyto" value={formData.email} />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for contacting Kōwhai & Clay. Your enquiry has arrived in the studio inbox and we will reply with availability, lead times, and the best next step soon."
        />

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
          aria-hidden="true"
        />

        <label className="grid gap-2 text-sm text-iron/74">
          Name
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
          />
          {errors.name ? (
            <span id="name-error" className="text-sm text-umber">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm text-iron/74">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
          />
          {errors.email ? (
            <span id="email-error" className="text-sm text-umber">
              {errors.email}
            </span>
          ) : null}
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-iron/74">
            Enquiry type
            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
            >
              {enquiryTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-iron/74">
            Preferred contact
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
            >
              {contactMethods.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm text-iron/74">
          Project or workshop interest
          <input
            required
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="For example: a dinner set for a new home, or two places in a weekend workshop"
            aria-invalid={errors.project ? 'true' : 'false'}
            aria-describedby={errors.project ? 'project-error' : undefined}
            className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
          />
          {errors.project ? (
            <span id="project-error" className="text-sm text-umber">
              {errors.project}
            </span>
          ) : null}
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-iron/74">
            Desired timing
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
            >
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-iron/74">
            Budget range
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
            >
              {budgetRanges.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm text-iron/74">
          Project details
          <textarea
            required
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share the mood, quantity, occasion, workshop size, or anything else that will help the studio respond well."
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3 outline-none transition focus:border-kowhai focus:ring-2 focus:ring-kowhai/35"
          />
          {errors.message ? (
            <span id="message-error" className="text-sm text-umber">
              {errors.message}
            </span>
          ) : null}
        </label>

        <div className="rounded-[24px] border border-kowhai/25 bg-kowhai/10 px-5 py-4 text-sm leading-7 text-iron/76">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Complete enquiry flow</p>
          <p className="mt-2">
            Send the form directly to the studio inbox, then expect a follow-up with availability, lead times, and the
            most suitable next step. If you would rather review the wording first, open the ready-made email draft and
            send it from your own mail app.
          </p>
        </div>

        <div className="grid gap-4 rounded-[24px] bg-clay/35 p-5 text-sm leading-7 text-iron/74 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Direct inbox submission</p>
            <p className="mt-2">
              Best for commissions, workshop requests, and studio appointments when you want the studio to receive
              every detail in one step.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Instagram route</p>
            <p className="mt-2">
              Prefer DMs? Complete the same enquiry details here, then continue the conversation with {instagramHandle}.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-iron/10 pt-2 text-sm text-iron/68 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition duration-300 hover:-translate-y-0.5 hover:bg-umber disabled:cursor-not-allowed disabled:opacity-70"
            disabled={submitState === 'submitting'}
          >
            {submitState === 'submitting' ? 'Sending enquiry…' : 'Send enquiry to the studio'}
          </button>
          <a
            href={draftMailto}
            className="inline-flex items-center justify-center rounded-full border border-iron/14 px-6 py-3 text-sm uppercase tracking-[0.2em] text-iron transition duration-300 hover:-translate-y-0.5 hover:border-umber hover:text-umber"
          >
            Review email draft
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-iron/14 px-6 py-3 text-sm uppercase tracking-[0.2em] text-iron transition duration-300 hover:-translate-y-0.5 hover:border-umber hover:text-umber"
          >
            Message on Instagram
          </a>
        </div>

        <p className="text-sm leading-7 text-iron/70">
          Direct email:{' '}
          <a className="underline decoration-umber/60 underline-offset-4" href={`mailto:${studioEmail}`}>
            {studioEmail}
          </a>
        </p>
      </form>
    </div>
  );
}

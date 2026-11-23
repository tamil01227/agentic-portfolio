"use client";
import type { FormEvent } from "react";
import { useState } from "react";

const fieldClass = "mt-2 w-full rounded-xl border border-hair bg-white px-4 py-3 text-sm text-ink transition placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result: unknown = await response.json();

      if (!response.ok) {
        const message = typeof result === "object" && result !== null && "error" in result && typeof result.error === "string"
          ? result.error
          : "We couldn't send your message. Please try again.";
        setStatus("error");
        setNotice(message);
        return;
      }

      setStatus("sent");
      setNotice("Thanks! Your message has been sent.");
      form.reset();
    } catch {
      setStatus("error");
      setNotice("We couldn't send your message. Please try again.");
    }
  }

  return (
    <section id="contact-form" className="scroll-mt-24 rounded-card border border-hair bg-white p-6 shadow-card md:p-10">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Tell us what you need.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">Share what is slowing your business down. We’ll take it from there.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
            <input id="contact-name" name="name" autoComplete="name" required className={fieldClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required className={fieldClass} placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-sm font-medium">What would you like to build?</label>
            <textarea id="contact-message" name="message" required rows={4} className={fieldClass} placeholder="Tell us a little about your challenge or idea." />
          </div>
          <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-white shadow-btn transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60">
            {status === "sending" ? "Sending..." : "Send Enquiry"}
          </button>
          {notice && <p role="status" aria-live="polite" className={`text-sm ${status === "error" ? "text-red-600" : "text-muted"}`}>{notice}</p>}
        </form>
      </div>
    </section>
  );
}

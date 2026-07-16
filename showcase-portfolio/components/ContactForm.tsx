"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    setStatus("sending");

    if (!endpoint) {
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Contact request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} id="contact-form">
      <div className="field-row"><label><span>Your name</span><input name="name" autoComplete="name" placeholder="How should I address you?" required /></label><label><span>Email address</span><input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label></div>
      <label><span>What can we create together?</span><select name="project" defaultValue=""><option value="" disabled>Select a project type</option><option>Product design</option><option>Website design & development</option><option>Brand identity</option><option>Something else</option></select></label>
      <label><span>Tell me about the opportunity</span><textarea name="message" rows={5} placeholder="A little context, your goals and your ideal timeline…" required minLength={20} /></label>
      <div className="form-footer"><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send project enquiry"}<span>↗</span></button><p aria-live="polite">{status === "success" && "Thanks—this demo enquiry is ready to be connected to your inbox."}{status === "error" && "Something went wrong. Please try the email link instead."}</p></div>
    </form>
  );
}

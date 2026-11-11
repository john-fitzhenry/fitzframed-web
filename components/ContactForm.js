"use client";
import { useState } from "react";
import { site } from "@/data/site";

// Posts to Formspree. Without JavaScript it still works as a normal form post.
export default function ContactForm({ topics, defaultTopic, subject, topicLabel = "What do you need?", extra, messagePlaceholder = "Dates, location, and anything else that helps." }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>Thanks, your message is on its way.</h3>
        <p>I usually reply within a day or two.</p>
        <button className="btn btn-ghost" onClick={() => setStatus("idle")}>Send another</button>
      </div>
    );
  }

  return (
    <form className="contact-form" action={site.formEndpoint} method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value={subject} />
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-topic">{topicLabel}</label>
        <select id="cf-topic" name="topic" defaultValue={defaultTopic}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      {extra && (
        <div className="field field-wide">
          <label htmlFor="cf-extra">{extra.label}</label>
          <input id="cf-extra" name={extra.name} type="text" placeholder={extra.placeholder} />
        </div>
      )}
      <div className="field field-wide">
        <label htmlFor="cf-message">Details</label>
        <textarea id="cf-message" name="message" rows={5} required placeholder={messagePlaceholder} />
      </div>
      <div className="field-wide form-actions">
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="form-note" role="status" aria-live="polite">
          {status === "error" && (
            <>
              That didn&apos;t send. Email me at <a href={`mailto:${site.email}`}>{site.email}</a> instead.
            </>
          )}
        </p>
      </div>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";

const projectTypes = [
  "Landing page",
  "Custom website",
  "Web app / product UI",
  "Not sure yet",
];

type Status = "idle" | "loading" | "sent" | "error";

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          business: data.get("business"),
          type: data.get("type"),
          budget: data.get("budget"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        throw new Error(payload.error || "Could not send your application.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-2xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Business / brand" name="business" required />
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">
            Project type
          </span>
          <select
            name="type"
            required
            className="w-full rounded-xl border border-line bg-cream-panel px-4 py-3 text-ink outline-none transition-shadow focus:ring-2 focus:ring-teal/40"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <Field
          label="Budget range"
          name="budget"
          placeholder="e.g. $2k–$5k"
        />
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-ink">
          Tell me about the project
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Where are you stuck? What does success look like?"
          className="w-full resize-y rounded-xl border border-line bg-cream-panel px-4 py-3 text-ink outline-none transition-shadow placeholder:text-muted focus:ring-2 focus:ring-teal/40"
        />
      </label>

      {/* Honeypot — leave empty */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-ink px-8 py-4 text-base font-semibold text-lime transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send application"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-teal">
          Got it — your application is in my inbox. I usually reply within a
          day.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-[#a33a1a]">
          {error} Or email me directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-cream-panel px-4 py-3 text-ink outline-none transition-shadow placeholder:text-muted focus:ring-2 focus:ring-teal/40"
      />
    </label>
  );
}

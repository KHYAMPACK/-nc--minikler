"use client";

import { FormEvent, useState } from "react";
import { siteConfig, whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Merhaba, ben ${name || "bir veli"}.`,
      phone ? `Telefon: ${phone}` : null,
      message || "Kreş hakkında bilgi almak istiyorum.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Adınız
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none ring-leaf/30 focus:ring-2"
          placeholder="Ad Soyad"
          autoComplete="name"
        />
      </div>
      <div className="hidden sm:block">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none ring-leaf/30 focus:ring-2"
          placeholder="05xx xxx xx xx"
          autoComplete="tel"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none ring-leaf/30 focus:ring-2"
          placeholder="Çocuğunuzun yaşı, tam gün / yarım gün tercihi..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-dark sm:w-auto"
      >
        WhatsApp ile gönder
      </button>
      <p className="text-xs text-muted">
        Form, WhatsApp üzerinden {siteConfig.phoneDisplay} numarasına yönlendirir.
        Kişisel verileriniz{" "}
        <a href="/gizlilik" className="underline hover:text-leaf">
          gizlilik metnimiz
        </a>{" "}
        kapsamında işlenir.
      </p>
    </form>
  );
}

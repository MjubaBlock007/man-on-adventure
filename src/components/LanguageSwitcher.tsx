"use client";
import React from "react";

const langs = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
];

export default function LanguageSwitcher() {
  const [val, setVal] = React.useState<string>("en");

  React.useEffect(() => {
    const cookieValue = document.cookie.match(/(?:^|; )lang=([^;]+)/)?.[1];
    if (cookieValue) {
      setVal(cookieValue);
    }
  }, []);

  return (
    <select
      aria-label="Change language"
      className="rounded-md bg-white/5 border border-white/15 px-2 py-1 text-sm"
      value={val}
      onChange={(e) => {
        const v = e.target.value;
        setVal(v);
        document.cookie = `lang=${v}; path=/; max-age=31536000`;
        location.reload();
      }}
    >
      {langs.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
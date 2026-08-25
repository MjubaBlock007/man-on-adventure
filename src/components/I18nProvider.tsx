"use client";
import React from "react";
import type { Dict } from "@/locales/en";

export const I18nContext = React.createContext<Dict | null>(null);

export default function I18nProvider({ dict, children }: { dict: Dict; children: React.ReactNode }) {
  return <I18nContext.Provider value={dict}>{children}</I18nContext.Provider>;
}

export function useDict() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useDict must be used within I18nProvider");
  return ctx;
}
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useTranslations } from "next-intl";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact_section.form");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Server error");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error");
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 border-[1.5px] border-border bg-white font-main text-[14px] text-charcoal outline-none transition-all duration-200 placeholder:text-[#B0B4B9] focus:border-cobalt focus:shadow-[0_0_0_3px_rgba(26,115,232,0.1)]";
  const labelClass =
    "font-mono text-[10px] tracking-[0.16em] uppercase text-slate mb-1.5 block";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
      noValidate
    >
      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t("name")} *</label>
          <input
            {...register("name")}
            type="text"
            placeholder={t("namePlaceholder")}
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className="text-[12px] text-red-500">{t("nameError")}</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t("company")}</label>
          <input
            {...register("company")}
            type="text"
            placeholder={t("companyPlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t("email")} *</label>
          <input
            {...register("email")}
            type="email"
            placeholder={t("emailPlaceholder")}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="text-[12px] text-red-500">{t("emailError")}</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>{t("phone")}</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder={t("phonePlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>{t("service")}</label>
        <input
          {...register("service")}
          type="text"
          placeholder={t("servicePlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>{t("message")} *</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} resize-y min-h-[120px]`}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <span className="text-[12px] text-red-500">{t("messageError")}</span>
        )}
      </div>

      {status === "error" && (
        <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 px-4 py-3">
          {errorMessage || t("error")}
        </p>
      )}

      {status === "success" && (
        <p className="text-[13px] text-green-700 bg-green-50 border border-green-200 px-4 py-3">
          {t("success")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-orange hover:bg-orange-dark text-white font-main font-bold text-[14px] tracking-[0.1em] uppercase border-none cursor-pointer relative overflow-hidden transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}

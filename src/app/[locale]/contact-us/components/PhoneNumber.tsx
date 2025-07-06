"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import CountryDropdown from "./Country";

interface TextFieldProps {
  name: string;
  register: UseFormRegister<any>;
  placeholder: string;
  errors: FieldErrors;
  phonenumber?: boolean;
  email?: boolean;
  label?: boolean;
  required?: boolean;
}

const PhoneNumber: React.FC<TextFieldProps> = ({
  name,
  register,
  placeholder,
  errors,
  phonenumber = false,
  email,
  label = true,
  required = false,
}) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2 ">
      {label && (
        <label className="text-sm font-medium text-gray-700 flex gap-1 items-center">
          {t(name)} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {phonenumber ? (
        <div
          className={` flex items-center  bg-gray-100 px-4 py-2 rounded-md ${
            errors[name] ? "border border-red-500" : "border border-gray-200"
          }`}
        >
          <CountryDropdown />
          <input
            dir="ltr"
            type="tel"
            placeholder="00 000 0000"
            maxLength={9}
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
            className="w-f me-8 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-end"
            {...register(name)}
          />
        </div>
      ) : (
        <input
          type={email ? "email" : "text"}
          onInput={(e: React.FormEvent<HTMLInputElement>) => {
            const input = e.currentTarget;
            if (input.value.startsWith(" ")) {
              input.value = input.value.trimStart();
            }
          }}
          className={`w-full border p-4 rounded-md ${
            errors[name]
              ? "text-red-500 border-red-500"
              : "text-black border-gray-300"
          } focus:outline-none`}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
    </div>
  );
};

export default PhoneNumber;

interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  topic: string;
  help: string;
}

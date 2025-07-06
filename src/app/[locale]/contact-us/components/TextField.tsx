import { useTranslations } from "next-intl";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface TextFieldProps {
  name: string;
  register: UseFormRegister<any>;
  placeholder: string;
  errors: FieldErrors;
  textarea?: boolean;
  label?: string;
  required?: boolean;
  minLength?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  register,
  placeholder,
  errors,
  textarea = false,

  required = false,
}) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2">
      <label className="flex gap-1 text-sm font-medium text-gray-700">
        {required && <span className="text-red-500">*</span>} {t(name)}
      </label>

      {textarea ? (
        <textarea
          rows={8}
          className={`w-full bg-gray-100 p-4 rounded-md resize-none ${
            errors[name]
              ? "text-red-500 border-red-500"
              : "text-black focus:border-primary_yellow"
          } focus:outline-none`}
          placeholder={placeholder}
          {...register(name, {
            required: required ? t("error") : false,
            minLength: {
              value: 9,
              message: t("Minimum length is 10 characters"),
            },
          })}
        />
      ) : (
        <input
          className={`w-full bg-gray-100 p-4 rounded-md ${
            errors[name]
              ? "text-red-500 border-red-500"
              : "text-black border-gray-300 focus:border-primary_yellow"
          } focus:outline-none`}
          placeholder={placeholder}
          {...register(name, {
            required: required ? t("error") : false,
          })}
        />
      )}

      {/* Optionally show error message */}
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default TextField;

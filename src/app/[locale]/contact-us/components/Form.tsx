"use client";
import React from "react";
import TextField from "./TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "use-intl";
import PhoneNumber from "./PhoneNumber";

const Form = () => {
  const {
    register,

    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    mode: "onChange",
  });

  const t = useTranslations();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:max-w-[65%] max-w-[90%] mx-auto w-full flex flex-col gap-7 mt-16 pt-16 md:border-t border-gray-200"
    >
      {/* Name Fields */}
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-1/2 w-full">
          <TextField
            label={"first_name"}
            name={"first name"}
            register={register}
            required
            placeholder={t("enter first name")}
            errors={errors}
            minLength={3}
          />
        </div>

        <div className="md:w-1/2 w-full">
          <TextField
            label={"last_name"}
            name={"last name"}
            register={register}
            required
            placeholder={t("enter last name")}
            errors={errors}
            minLength={3}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-1/2 w-full">
          <TextField
            label={"email"}
            name={"email"}
            register={register}
            required
            placeholder={t("enter your email")}
            errors={errors}
            minLength={5}
          />
        </div>

        <div className="md:w-1/2 w-full">
          <PhoneNumber
            name={"phone"}
            register={register}
            required
            placeholder={t("Phone Number placeholder")}
            errors={errors}
            phonenumber
          />
        </div>
      </div>

      {/* Topic */}
      <TextField
        label={"topic"}
        name={"topic"}
        register={register}
        placeholder={t("Write your topic")}
        errors={errors}
        minLength={3}
      />

      {/* Help Textarea */}
      <TextField
        label={"help"}
        name={"help"}
        register={register}
        placeholder={t(
          "Write how we can help you or explain your problem here"
        )}
        errors={errors}
        minLength={10}
        textarea
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isValid}
        className={`mt-4 py-3 px-6 w-32  rounded-md text-white font-medium  transition ${
          isValid
            ? "bg-primary-ai cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {t("Submit")}
      </button>
    </form>
  );
};

export default Form;

interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  topic: string;
  help: string;
}

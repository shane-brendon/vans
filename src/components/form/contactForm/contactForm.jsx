"use client";
import React from "react";
import styles from "./contactForm.module.scss";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ButtonCustom from "../../lib/button/ButtonCustom";

function ContactForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className={styles.bookingForm}
      noValidate={true}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Controller
          name="name"
          control={control}
          render={({ fields }) => (
            <Input
              type="text"
              placeholder="Your Name"
              id="name"
              {...fields}
              {...register("name", { required: true })}
            />
          )}
        />
        {errors.name?.type === "required" && (
          <p role="alert">name is required</p>
        )}
        <Label htmlFor="name" />
      </div>
      <div>
        {" "}
        <Controller
          name="Email"
          control={control}
          render={({ fields }) => (
            <Input
              type="Email"
              placeholder="Your Email"
              id="Email"
              {...fields}
              {...register("Email", { required: true })}
            />
          )}
        />
        {errors.Email?.type === "required" && (
          <p role="alert">name is required</p>
        )}
        <Label htmlFor="email" />
      </div>

      <div>
        <Label htmlFor="subjet" />

        <Controller
          name="subjet"
          control={control}
          render={({ fields }) => (
            <Input
              type="subjet"
              placeholder="Your subjet"
              id="subjet"
              {...fields}
              {...register("subjet", { required: true })}
            />
          )}
        />
        {errors.subjet?.type === "required" && (
          <p role="alert">name is required</p>
        )}
      </div>
      <div>
        <Label htmlFor="message" />{" "}
        <Controller
          name="Message"
          control={control}
          render={({ fields }) => (
            <Textarea
              type="Message"
              placeholder="Your Message"
              id="Message"
              {...fields}
              {...register("Message", { required: true })}
            />
          )}
        />
        {errors.Message?.type === "required" && (
          <p role="alert">name is required</p>
        )}
      </div>
      <div>
        <ButtonCustom text={"Send Message"} isFill />
      </div>
    </form>
  );
}

export default ContactForm;

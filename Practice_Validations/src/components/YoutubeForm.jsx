import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    console.log("Form submited data: ", data);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-field-div">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p>{errors.username?.message}</p>
        </div>

        <div className="form-field-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Not a valid Email",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-field-div">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel name is required",
              },
            })}
          />
          <p>{errors.channel?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;

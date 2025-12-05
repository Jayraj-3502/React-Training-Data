import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
  const form = useForm({
    defaultValues: {
      username: "name",
      email: "user@example.com",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

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
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email"
                  );
                },
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

        <div className="form-field-div">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: {
                value: true,
                message: "Twitter link is required",
              },
            })}
          />
          <p>{errors?.social?.twitter?.message}</p>
        </div>

        <div className="form-field-div">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: {
                value: true,
                message: "Facebook is required",
              },
            })}
          />
          <p>{errors?.social?.facebook?.message}</p>
        </div>

        <div className="form-field-div">
          <label htmlFor="phoneNumbers">Primary Phone Number</label>
          <input
            type="text"
            id="phoneNumbers"
            {...register("phoneNumbers.0", {
              required: {
                value: true,
                message: "Primary Phone number is required",
              },
            })}
          />
          {/* <p>{errors?.phoneNumbers[0]?.message}</p> */}
        </div>

        <div className="form-field-div">
          <label htmlFor="phoneNumbers">Secondary Phone Number</label>
          <input
            type="text"
            id="phoneNumbers"
            {...register("phoneNumbers.1", {
              required: {
                value: true,
                message: "Secondary Phone number is required",
              },
            })}
          />
          {/* <p>{errors?.phoneNumbers?.message}</p> */}
        </div>

        <div className="form-field-div">
          <label htmlFor="">List of Phone Numbers</label>
          <div className="dynamic-number-container">
            {fields.map((field, index) => {
              return (
                <div key={field?.id} className="dynamic-number">
                  <div>
                    <input
                      type="text"
                      {...register(`phNumbers.${index}?.number`, {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    />
                    {/* <p>{errors?.phNumbers[index]?.message}</p> */}
                  </div>
                  {index > 0 && (
                    <div>
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: "" })}>
              Add Phone Number
            </button>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;

import React, { useState, useEffect } from "react";
import { useForm as formValidation } from "react-hook-form";
import { useForm } from "@formspree/react";

function FormComponent() {
  const [nameInput, setNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [msgInput, setMsgInput] = useState(false);
  const [successSend, setSuccessSend] = useState(false);

  const [, handleSubmit] = useForm(process.env.REACT_APP_EMAIL_KEY);

  const {
    register,
    handleSubmit: handleValidation,
    errors,
    getValues,
    clearErrors,
  } = formValidation();

  useEffect(() => {
    setTimeout(() => setSuccessSend(false), 2000);
  }, [successSend]);

  async function submitForm(data, e) {
    await handleSubmit(data);
    setSuccessSend(true);
    setNameInput(false);
    setEmailInput(false);
    setMsgInput(false);
    e.target.reset();
  }

  function checkUnfocus() {
    const values = getValues();
    values["name"] ? setNameInput(true) : setNameInput(false);
    values["email"] ? setEmailInput(true) : setEmailInput(false);
    values["msg"] ? setMsgInput(true) : setMsgInput(false);
  }
  return (
    <div className="contact-controller">
      <p className="success-msg">
        {successSend && "Message is sent, you will get response soon"}
      </p>
      <form
        onSubmit={handleValidation(submitForm)}
        className="contact-form"
        method="POST"
      >
        <label className="form-label">
          <input
            type="text"
            className="form-label-input"
            name="name"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
            onFocus={() =>
              setTimeout(() => clearErrors(["email", "msg"]), 2000)
            }
            onBlur={checkUnfocus}
          />
          <p
            className="label-input-text"
            style={{
              top: nameInput && "-8px",
              fontSize: nameInput && "0.7rem",
            }}
          >
            <small>Name</small>
          </p>
          <p className="error-msg">
            {errors?.name?.type === "maxLength" &&
              "Your input exceed maxLength"}
            {errors?.name?.type === "minLength" &&
              "Your input must be at least 3 characters long, sorry jo"}
          </p>
        </label>
        <label className="form-label">
          <input
            type="email"
            name="email"
            className="form-label-input"
            ref={register({
              required: true,
            })}
            onFocus={() => setTimeout(() => clearErrors(["name", "msg"]), 2000)}
            onBlur={checkUnfocus}
          />
          <p
            className="label-input-text"
            style={{
              top: emailInput && "-8px",
              fontSize: emailInput && "0.7rem",
            }}
          >
            Email
          </p>
          <p className="error-msg">
            {errors?.email?.type === "required" &&
              "Your need to put valid email"}
          </p>
        </label>
        <label className="form-label">
          <textarea
            name="msg"
            id=""
            cols="30"
            rows="10"
            className="form-label-input"
            ref={register({
              minLength: {
                value: 10,
                message:
                  "Thank you for message me, please put more than 2-3 words",
              },
            })}
            onFocus={() =>
              setTimeout(() => clearErrors(["email", "name"]), 2000)
            }
            onBlur={checkUnfocus}
          ></textarea>
          <p
            className="label-input-text"
            style={{ top: msgInput && "-8px", fontSize: msgInput && "0.7rem" }}
          >
            Message
          </p>
          <p className="error-msg">{errors.msg?.message}</p>
        </label>
        <button className="form-button" onClick={() => console.log(errors)}>
          Send Me Message{" "}
        </button>
      </form>
    </div>
  );
}

export default FormComponent;

"use client";
import emailjs from "@emailjs/browser";
import { Alert, Collapse, IconButton, SelectChangeEvent } from "@mui/material";
import React, { FormEvent, ReactNode, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./form.css";

function SubscribeForm() {
  const form = useRef(null);
  const [email, setEmail] = useState<string>("");
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_SEC;
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_SEC;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_SEC;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 10000);

    if (form.current) {
      emailjs
        .sendForm(serviceId as string, templateId as string, form.current, {
          publicKey: publicKey as string,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setEmail("");
            setValue("");
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="w-full">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-full rounded-full p-4 mb-6 bg-transparent border-2 border-white text-white"
        />
        <button className={`${open ? "hidden" : "btn"}`}>Subscribe</button>
        <div className="relative left-0  w-full ">
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{
                mb: 2,
                p: 0,
                px: 10,
              }}
              className="items-center flex text-gray-400"
            >
              <h6 className="text-gray-400 text-lg md:text-xl ">Success!</h6>
            </Alert>
          </Collapse>
        </div>
      </div>
    </form>
  );
}

export default SubscribeForm;

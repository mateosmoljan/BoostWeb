"use client";

import emailjs from "@emailjs/browser";
import {
  Alert,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { FormEvent, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function ContactForm() {
  const form = useRef(null);
  const [email, setEmail] = useState<string>("");
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  const [industry, setIndustry] = React.useState("");

  const handleChangeIndustry = (event: SelectChangeEvent) => {
    setIndustry(event.target.value as string);
  };

  const [budget, setBudget] = React.useState("");

  const handleChangeBudget = (event: SelectChangeEvent) => {
    setBudget(event.target.value as string);
  };

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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 w-full relative"
    >
      <div>
        <input
          className="text-white bg-gray2 placeholder-gray xl:w-[80%] w-full rounded-md py-3 px-8"
          required
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          className="text-white bg-gray2 placeholder-gray xl:w-[80%] w-full rounded-md py-3 px-8"
          required
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Industry</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={industry}
          label="Industry"
          name="industry"
          onChange={handleChangeIndustry}
        >
          <MenuItem value="Crypto">Ten</MenuItem>
          <MenuItem value="Custom Software">Twenty</MenuItem>
          <MenuItem value="Booking">Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Budget</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={industry}
          label="Budget"
          name="budget"
          onChange={handleChangeBudget}
        >
          <MenuItem value="500">500</MenuItem>
          <MenuItem value="1000">1000</MenuItem>
          <MenuItem value="Booking">10000</MenuItem>
        </Select>
      </FormControl>
      <div>
        <textarea
          className="text-white resize-none h-52 bg-gray2 placeholder-gray xl:w-[80%] w-full rounded-md py-3 px-8"
          name="message"
          placeholder="Message"
        />
      </div>
      <div className="flex items-start ">
        <button className={`${open ? "hidden" : ""}`}>
          <input
            className="btn "
            type="submit"
            placeholder="Send"
            value="Send"
          />
        </button>
        <div className="relative left-0 xl:w-[80%] w-full">
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
              sx={{ mb: 2, p: 0, px: 10, height: 40 }}
            >
              Success!
              <p>
                Thank you for your inquiry! We have received your message and
                sent a confirmation email to your inbox.
              </p>
            </Alert>
          </Collapse>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;

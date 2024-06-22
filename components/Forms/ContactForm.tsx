"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import PeopleIcon from "@mui/icons-material/People";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PersonIcon from "@mui/icons-material/Person";
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
import React, { FormEvent, ReactNode, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./form.css";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);

  const handleChangeService = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const value = event.target.value as string[];
    setSelectedServices(value);
  };

  const [source, setSource] = React.useState("");

  const handleChangeSource = (event: SelectChangeEvent) => {
    setSource(event.target.value as string);
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
      <div className="flex gap-3 flex- justify-between">
        <div className=" w-full md:w-1/2">
          <input
            className="text-white border-white_hover border-2 bg-transparent placeholder-gray-400 w-full rounded-md py-4 px-8"
            required
            type="text"
            name="first_name"
            placeholder="First Name*"
          />
        </div>
        <div className="w-full md:w-1/2">
          <input
            className="text-white bg-transparent border-white_hover border-2 placeholder-gray-400 w-full rounded-md py-4 px-8"
            required
            type="text"
            name="last_name"
            placeholder="Last Name*"
          />
        </div>
      </div>
      <div>
        <input
          className="text-white bg-transparent border-white_hover border-2 placeholder-gray-400 w-full rounded-md py-4 px-8"
          type="text"
          name="business_name"
          placeholder="Business Name"
        />
      </div>
      <div>
        <input
          className="text-white bg-transparent border-white_hover border-2 placeholder-gray-400 w-full rounded-md py-4 px-8"
          required
          type="email"
          name="email"
          placeholder="Email*"
        />
      </div>
      <FormControl>
        <InputLabel id="demo-simple-select-label" className="!text-gray-400">
          Industry*
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={industry}
          label="Industry"
          name="industry"
          className="bg-transparent border-white_hover border-2 !text-white !pl-4"
          onChange={handleChangeIndustry}
          sx={{
            paddingLeft: 32,
          }}
        >
          <MenuItem value="E-commerce">🛒 E-commerce</MenuItem>
          <MenuItem value="Healthcare">🏥 Healthcare</MenuItem>
          <MenuItem value="Education">📚 Education</MenuItem>
          <MenuItem value="Finance">💼 Finance</MenuItem>
          <MenuItem value="Entertainment">🎬 Entertainment</MenuItem>
          <MenuItem value="Technology">💻 Technology</MenuItem>
          <MenuItem value="Real Estate">🏠 Real Estate</MenuItem>
          <MenuItem value="Travel">✈️ Travel</MenuItem>
          <MenuItem value="Food & Beverage">🍔 Food & Beverage</MenuItem>
          <MenuItem value="Automotive">🚗 Automotive</MenuItem>
          <MenuItem value="Fashion">👗 Fashion</MenuItem>
          <MenuItem value="Sports">⚽ Sports</MenuItem>
          <MenuItem value="Crypto/Blockchain">🔗 Crypto/Blockchain</MenuItem>
          <MenuItem value="AI">🤖 AI</MenuItem>
          <MenuItem value="Custom">✏️ Custom</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label" className="!text-gray-400">
          Services*
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          multiple
          value={selectedServices}
          label="Service"
          name="service"
          className="bg-transparent border-white_hover border-2 !text-white !pl-4"
          onChange={
            handleChangeService as (
              event: SelectChangeEvent<string[]>,
              child: ReactNode
            ) => void
          }
          sx={{
            paddingLeft: 32,
          }}
        >
          <MenuItem value="Web Development">🌐 Web Development</MenuItem>
          <MenuItem value="E-commerce Solutions">
            🛒 E-commerce Solutions
          </MenuItem>
          <MenuItem value="UI/UX Design">🎨 UI/UX Design</MenuItem>
          <MenuItem value="Custom Software Development">
            🛠️ Custom Software Development
          </MenuItem>
          <MenuItem value="Cloud Services">☁️ Cloud Services</MenuItem>
          <MenuItem value="Digital Marketing">📈 Digital Marketing</MenuItem>
          <MenuItem value="SEO">🔍 SEO (Search Engine Optimization)</MenuItem>
          <MenuItem value="Blockchain Development">
            🔗 Blockchain Development
          </MenuItem>
          <MenuItem value="AI Solutions">🤖 AI Solutions</MenuItem>
          <MenuItem value="Content Management Systems">
            📄 Content Management Systems
          </MenuItem>
          <MenuItem value="Maintenance & Support">
            🛠️ Maintenance & Support
          </MenuItem>
          <MenuItem value="Other">🔧 Other (Please Specify)</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label" className="!text-gray-400">
          Budget ($)*
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={budget}
          label="Budget"
          name="budget"
          className="bg-transparent border-white_hover border-2 !text-white !pl-4"
          onChange={handleChangeBudget}
        >
          <MenuItem value="< 500">{"< "}500</MenuItem>
          <MenuItem value="500-1000">500-1000</MenuItem>
          <MenuItem value="1000-5000">1000-5000</MenuItem>
          <MenuItem value="5000-10000">5000-10000</MenuItem>
          <MenuItem value="10000-100000">10000-100000</MenuItem>
          <MenuItem value="100000+">100000+</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label" className="!text-gray-400">
          How did you hear about BoostWeb?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={source}
          label="Source"
          name="source"
          className="bg-transparent border-white_hover border-2 !text-white !pl-4"
          onChange={handleChangeSource}
        >
          <MenuItem value="Facebook">
            <FacebookIcon style={{ marginRight: "10px" }} /> Facebook
          </MenuItem>
          <MenuItem value="Instagram">
            <InstagramIcon style={{ marginRight: "10px" }} /> Instagram
          </MenuItem>
          <MenuItem value="Google">
            <GoogleIcon style={{ marginRight: "10px" }} /> Google
          </MenuItem>
          <MenuItem value="Friend or Family">
            <PeopleIcon style={{ marginRight: "10px" }} /> Friend or Family
          </MenuItem>
          <MenuItem value="Referral">
            <ThumbUpIcon style={{ marginRight: "10px" }} /> Referral
          </MenuItem>
          <MenuItem value="Current Client">
            <PersonIcon style={{ marginRight: "10px" }} /> Current Client
          </MenuItem>
          <MenuItem value="Other">Other (Please Specify)</MenuItem>
        </Select>
      </FormControl>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{
              color: "white",
            }}
          >
            <DatePicker
              label="I want to launch my project on:"
              name="start_date"
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div>
        <textarea
          className="text-white resize-none h-52 bg-transparent border-white_hover border-2 w-full rounded-md py-4 px-8"
          name="message"
          placeholder="Message"
        />
      </div>
      <div className="w-full md:flex items-center">
        <button className={` cursor-pointer w-full ${open ? "hidden" : ""}`}>
          <input
            className="w-full btn cursor-pointer "
            type="submit"
            placeholder="Send"
            value="Send"
          />
        </button>
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
            >
              <h6 className="text-black text-lg md:text-xl ">Success!</h6>
              <p className="leading-[100%]">
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

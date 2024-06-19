"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { FaqData } from "@/lib/FaqData";

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="flex flex-col divide-y divide-gray-200">
      {FaqData.data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${item.panelNumber}`}
          onChange={handleChange(`panel${item.panelNumber}`)}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: "5px 0",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${item.panelNumber}` ? (
                <RemoveIcon className="text-white" />
              ) : (
                <AddIcon className="text-white" />
              )
            }
            aria-controls={`panel${item.panelNumber}-content`}
            id={`panel${item.panelNumber}-header"`}
            sx={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
            }}
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#9E9E9E", paddingTop: "20px" }}>
            <div dangerouslySetInnerHTML={{ __html: item.des }} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

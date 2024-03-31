// "use client"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const faqs = [
  {
    question: "What is GlobalDuniya?",
    answer:
      "GlobalDuniya offers a platform for creating bookable experiences, ranging from guided tours to surf lessons, which travelers worldwide can purchase online. Suppliers selling products through us gain access to customers via TripAdvisor, the TripAdvisor App, Viator.com, and thousands of partner sites.",
  },
  {
    question: "Who can register?",
    answer:
      "Whether you're a large tour operator, a family-run vineyard, or a local expert offering walking tours, anyone aged 18 or over can join. Just ensure compliance with all relevant laws and regulations in your operating area.",
  },
  {
    question: "What do I get when I sign up?",
    answer:
      "Upon registration, you'll receive a business listing if you don't already have one—a personalized page on TripAdvisor spotlighting your business and customer reviews. Additionally, you'll gain complimentary entry to the Viator Management Center. Here, you can publish your products on both TripAdvisor and Viator, oversee bookings and reviews, and ensure seamless management. All products you create will seamlessly integrate into your TripAdvisor listing, enhancing your visibility and accessibility to potential customers.",
  },
  // Add more FAQ items as needed
];

export default function Faq() {
  return (
    <div className="xs:w-full sm:w-1/2 lg:w-1/2 mx-auto mb-10">
      <h1 className=" font-home text-center font-bold text-lg m-8">FAQs</h1>
      <hr className="border  border-gray-200"></hr>
      {faqs.map((faq, index) => (
        <Accordion
          elevation={0}
          sx={{ boxShadow: "none", border: "none" }}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`panel-content-${index}`}
            id={`panel-header-${index}`}
          >
            <h2 className=" font-home font-bold">{faq.question}</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className=" font-home">{faq.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

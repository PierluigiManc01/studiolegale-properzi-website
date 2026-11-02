import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/practice-areas";

// Native <details> keeps every answer in the server-rendered HTML (crawlers and
// AI assistants read it) and works before hydration or without JavaScript.
const FaqList = ({ faqs }: { faqs: Faq[] }) => (
  <div className="divide-y divide-properzi-navy/15 border-y border-properzi-navy/15">
    {faqs.map((faq) => (
      <details key={faq.question} className="group py-5">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-cinzel text-lg md:text-xl text-properzi-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-properzi-navy focus-visible:ring-offset-4 rounded-sm [&::-webkit-details-marker]:hidden">
          <h3 className="font-cinzel">{faq.question}</h3>
          <ChevronDown
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-shrink-0 text-properzi-navy/60 transition-transform duration-300 group-open:rotate-180"
          />
        </summary>
        <p className="mt-4 max-w-[68ch] leading-relaxed text-properzi-navy/85">{faq.answer}</p>
      </details>
    ))}
  </div>
);

export default FaqList;

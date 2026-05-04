"use client";
import { faqs } from "@/utils/config";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Faqs = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (question) => {
        setOpenFaq(openFaq === question ? null : question);
    };

    return (
        <div>
            <h2 className="lg:text-3xl text-2xl font-semibold leading-7 tracking-normal text-gray-900">
                Frequently Asked Questions - Hotels in Mumbai
            </h2>
            <section className="space-y-6 mt-4" aria-label="FAQ list">
                {faqs.map((faq) => (
                    <article
                        key={faq.question}
                        className="border-b border-[#EAECF0] py-[24px] last:border-b-0"
                    >
                        <button
                            className="w-full text-left flex justify-between items-start cursor-pointer bg-transparent border-none p-0"
                            onClick={() => toggleFaq(faq.question)}
                            aria-expanded={openFaq === faq.question}
                            aria-controls={`faq-answer-${faq.question}`}
                        >
                            <h3 className="font-[700] text-lg leading-none tracking-normal text-[#333333] flex-1">
                                {faq.question}
                            </h3>
                            {openFaq === faq.question ? (
                                <ChevronUp size={26} color="#333333" />
                            ) : (
                                <ChevronDown size={26} color="#333333" />
                            )}
                        </button>

                        {openFaq === faq.question && (
                            <div
                                id={`faq-answer-${faq.question}`}
                                className="text-justify mt-4 text-gray-600 text-base leading-6 tracking-normal [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:ml-6 [&_li]:mb-2 [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800 [&_a]:transition-colors"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        )}
                    </article>
                ))}
            </section>
        </div>
    );
}

export default Faqs;
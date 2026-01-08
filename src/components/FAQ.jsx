import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/data';

const FAQItem = ({ item, isOpen, onToggle, index }) => {
    const contentRef = useRef(null);
    const buttonId = `faq-button-${index}`;
    const panelId = `faq-panel-${index}`;

    return (
        <div className="border-b border-amber-200">
            <h3>
                <button
                    id={buttonId}
                    onClick={onToggle}
                    className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-amber-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                >
                    <span className="font-medium text-amber-900 pr-4">{item.question}</span>
                    {isOpen ? (
                        <ChevronUp className="flex-shrink-0 text-amber-600" size={24} />
                    ) : (
                        <ChevronDown className="flex-shrink-0 text-amber-600" size={24} />
                    )}
                </button>
            </h3>
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px'
                }}
            >
                <div ref={contentRef} className="px-6 pb-5 text-gray-600">
                    {item.reponse}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 px-6 bg-amber-50" aria-labelledby="faq-title">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider">FAQ</p>
                    <h2 id="faq-title" className="text-3xl md:text-4xl font-serif text-amber-900">
                        Questions fréquentes
                    </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

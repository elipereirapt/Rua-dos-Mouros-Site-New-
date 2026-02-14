import React, { FormEvent } from 'react';
import { MessageSquare, Mail, Download } from 'lucide-react';

interface ContactFormProps {
  content: any;
}

const ContactForm: React.FC<ContactFormProps> = ({ content }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest. In a production environment, this would send your inquiry securely.");
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate download for demo purposes
    alert("In a production environment, this would initiate the PDF download.");
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <div>
        <h3 className="font-serif text-3xl mb-6">{content.contact.title}</h3>
        <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
          {content.contact.text}
        </p>
        
        <div className="space-y-4">
           {/* WhatsApp Button */}
           <a 
            href="https://wa.me/351910000000" // Placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full md:w-auto bg-[#25D366] text-white px-8 py-4 space-x-3 hover:bg-[#20bd5a] transition-colors"
          >
            <MessageSquare size={20} />
            <span className="uppercase tracking-widest text-xs font-bold">{content.contact.whatsapp}</span>
          </a>

          {/* Floor Plan Download Button */}
          <a 
            href="#" 
            onClick={handleDownload}
            className="flex items-center justify-center w-full md:w-auto border border-charcoal text-charcoal px-8 py-4 space-x-3 hover:bg-charcoal hover:text-white transition-colors"
          >
            <Download size={20} />
            <span className="uppercase tracking-widest text-xs font-bold">{content.contact.downloadFloorPlan}</span>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest text-charcoal/50 ml-1">Name</label>
          <input 
            type="text" 
            placeholder={content.contact.namePlaceholder}
            className="w-full bg-transparent border-b border-charcoal/20 py-3 px-1 focus:outline-none focus:border-gold transition-colors font-serif"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
             <label className="text-xs uppercase tracking-widest text-charcoal/50 ml-1">Email</label>
            <input 
              type="email" 
              placeholder={content.contact.emailPlaceholder}
              className="w-full bg-transparent border-b border-charcoal/20 py-3 px-1 focus:outline-none focus:border-gold transition-colors font-serif"
              required
            />
          </div>
          <div className="space-y-1">
             <label className="text-xs uppercase tracking-widest text-charcoal/50 ml-1">Phone</label>
            <input 
              type="tel" 
              placeholder={content.contact.phonePlaceholder}
              className="w-full bg-transparent border-b border-charcoal/20 py-3 px-1 focus:outline-none focus:border-gold transition-colors font-serif"
            />
          </div>
        </div>
        <div className="space-y-1 pt-4">
           <label className="text-xs uppercase tracking-widest text-charcoal/50 ml-1">Message</label>
          <textarea 
            rows={4}
            placeholder={content.contact.messagePlaceholder}
            className="w-full bg-transparent border-b border-charcoal/20 py-3 px-1 focus:outline-none focus:border-gold transition-colors font-serif resize-none"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-charcoal text-white py-4 uppercase tracking-widest text-xs hover:bg-gold transition-colors duration-300"
        >
          {content.contact.submit}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
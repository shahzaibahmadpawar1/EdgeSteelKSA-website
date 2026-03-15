import Image from "next/image";

export default function FloatingActions() {
  return (
    <>
      {/* Vision 2030 — rectangular side tab */}
      <a
        href="https://www.vision2030.gov.sa"
        target="_blank"
        rel="noopener noreferrer"
        title="Saudi Vision 2030"
        className="vision2030-tab fixed right-0 bottom-44 max-md:bottom-36 z-[999] flex items-center bg-transparent no-underline transition-all duration-500 ease-in-out animate-slideInRight hover:translate-x-0 group"
      >
        <Image
          src="/media/2030-logo.png"
          alt="Saudi Vision 2030"
          width={440}
          height={200}
          className="h-24 max-md:h-20 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
        />
      </a>

      {/* WhatsApp & Email */}
      <div className="fixed bottom-8 right-8 max-md:bottom-5 max-md:right-4 flex flex-col gap-2.5 z-[999]">
        <a
          href="https://wa.me/966576106246"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-12 h-12 max-md:w-11 max-md:h-11 flex items-center justify-center no-underline transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
        >
          <Image
            src="/media/whatapp.jpg"
            alt="WhatsApp"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </a>
        <a
          href="mailto:info@edgesteelksa.com"
          title="Send Email"
          className="w-12 h-12 max-md:w-11 max-md:h-11 flex items-center justify-center no-underline transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
        >
          <Image
            src="/media/email.png"
            alt="Email"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </a>
      </div>
    </>
  );
}

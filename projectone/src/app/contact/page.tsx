"use client"
// import { Meteors } from "@/components/ui/meteors";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function page() {
  return (
    <div className="min-h-screen w-full rounded-md  bg-gray-100 dark:bg-gray-900 relative flex flex-col items-center justify-center antialiased py-36">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl    text-white  text-center font-sans font-bold pb-5">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <input
          type="text"
          placeholder="Your email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 px-3 w-full h-14 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 outline-none"
        />
        <textarea
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 px-3 py-3 w-full h-52 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 outline-none"
          placeholder="Your message"
        ></textarea>
        <button className="px-5 py-3 bg-teal-600  rounded-lg mt-2 cursor-pointer  text-white font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ">
          Send Message
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}

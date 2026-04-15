import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HowItWorks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const steps = [
    {
      title: "Structured Security Operations",
      desc: "Shelter Guard helps us run security operations in a more organized and systematic way. Every patrol activity, checkpoint movement, and field report is managed within one integrated system, making daily operations more controlled and easier to oversee.",
      images: "/step/step1.jpg",
    },
    {
      title: "Real-Time Visibility",
      desc: "All security activities are recorded digitally and monitored in real time. This gives us clear visibility over what is happening on the ground, ensuring that operations are not only running, but also visible, trackable, and accountable.",
      images: "/step/step2.png",
    },
    {
      title: "Faster Incident Reporting",
      desc: "Any finding or incident in the field can be reported instantly with complete supporting details. This allows follow-up actions to be carried out faster, with better accuracy and stronger coordination across the operation.",
      images: "/step/step3.jpg",
    },
    {
      title: "Measurable Performance",
      desc: "Shelter Guard transforms routine security activities into measurable performance. Instead of depending on manual reports or assumptions, we use real-time data to ensure every task is completed properly and every service delivered has clear proof of execution.",
      images: "/step/step4.jpg",
    },
    {
      title: "Stronger Operational Control",
      desc: "With better data and documentation, we gain stronger control over the entire security operation. Every activity becomes easier to track, every issue becomes easier to trace, and every decision can be made based on actual field information.",
      images: "/step/step5.jpg",
    },
    {
      title: "Professional and Transparent Service",
      desc: "More than just a monitoring tool, Shelter Guard helps us deliver a security service that is more disciplined, more responsive, and more professional. It also builds greater client confidence because every service is consistently documented, verifiable, and transparent.",
      images: "/step/step6.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-8 font-sans lg:px-16 lg:py-24 xl:px-10 xl:py-16">
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-16 xl:mb-12"
      >
        {/* Tombol Kembali - kiri atas */}
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        {/* Tombol Home - kanan atas */}
        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      {/* Header Halaman */}
      <div className="mb-10 text-center lg:mb-20 xl:mb-16">
        <h1 className="text-primary text-2xl font-black tracking-tight lg:text-7xl xl:text-3xl">
          The Seamless Security Patrol Journey
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 lg:mt-10 lg:text-5xl xl:mt-2 xl:text-lg">
          How we turn manual guarding into a fully accountable, digital
          operation.
        </p>
      </div>

      {/* Container Step */}
      <div className="mx-auto flex max-w-5xl flex-col gap-20 lg:gap-20 xl:gap-0">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col items-center gap-10 border-b border-slate-500 pb-20 lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Bagian Teks */}
            <div className="flex-1 space-y-4 text-left">
              {/* <span className="bg-primary inline-block rounded-full px-6 py-2 text-sm font-bold text-white lg:text-4xl xl:text-lg">
                {item.step}
              </span> */}
              <div className="space-y-1">
                <h2 className="text-primary text-3xl font-black leading-tight lg:text-6xl xl:text-3xl">
                  {item.title}
                </h2>
                <p className="text-lg font-extrabold leading-tight text-slate-500 lg:text-5xl xl:text-2xl">
                  {item.subtitle}
                </p>
              </div>
              <p className="max-w-md text-sm text-justify font-medium leading-relaxed text-black lg:text-4xl xl:text-xl">
                {item.desc}
              </p>
            </div>

            {/* Phone Frame Section */}
            <div className="flex w-full flex-1 justify-center">
              <div className="max-w-62.5 lg:max-w-100 xl:max-w-80 w-full">
                <PhoneFrame screenshot={item.images} index={index} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

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
      step: "STEP 01",
      title: "Route Planning",
      subtitle: "Smart Shift & Patrol Scheduling",
      desc: "The system schedules guard shifts and creates precise patrol routes— assigning specific digital checkpoints for every hour of the day.",
      images: ["/step/step01.jpg", "/step/step01-2.jpg"],
    },
    {
      step: "STEP 02",
      title: "Digital Check-In",
      subtitle: "GPS & Facial Recognition Attendance",
      desc: "Security personnel arrive on-site and clock in via the mobile app using GPS location and facial recognition to verify their attendance.",
      images: "/step/step02.jpg",
    },
    {
      step: "STEP 03",
      title: "Verified Patrolling",
      subtitle: "QR Code & NFC Tag Scanning",
      desc: "Guards walk the perimeter and scan physical QR codes or NFC tags at each checkpoint to prove their exact location and presence.",
      images: "/step/step03.png",
    },
    {
      step: "STEP 04",
      title: "Live Monitoring",
      subtitle: "Real-Time Command Center Tracking",
      desc: "As guards patrol, data syncs instantly. The command center tracks live patrol progress — knowing exactly which areas have been cleared.",
      images: ["/step/step04-2.jpg", "/step/step04.png"],
    },
    {
      step: "STEP 05",
      title: "Incident Resolution",
      subtitle: "Instant Digital Reporting & Alerts",
      desc: "If anomalies are found, guards capture photos and submit instant digital reports — triggering immediate alerts to management.",
      images: ["/step/step05.jpg", "/step/step05-2.jpg"],
    },
    {
      step: "STEP 06",
      title: "Automated Reporting",
      subtitle: "Transparent Daily Security Logs",
      desc: "At shift end, all patrol data, incident logs, and attendance records are automatically compiled into a secure, untampered digital report.",
      images: "/step/step06.png",
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
        <p className="mt-4 text-sm font-semibold text-black lg:mt-10 lg:text-5xl xl:mt-2 xl:text-lg">
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
              <span className="bg-primary inline-block rounded-full px-6 py-2 text-sm font-bold text-white lg:text-4xl xl:text-lg">
                {item.step}
              </span>
              <div className="space-y-1">
                <h2 className="text-primary text-3xl font-black leading-tight lg:text-7xl xl:text-5xl">
                  {item.title}
                </h2>
                <p className="text-lg font-extrabold leading-tight text-slate-500 lg:text-5xl xl:text-2xl">
                  {item.subtitle}
                </p>
              </div>
              <p className="max-w-md text-sm font-medium leading-relaxed text-black lg:text-4xl xl:text-xl">
                {item.desc}
              </p>
            </div>

            {/* Phone Frame Section */}
            <div className="flex w-full flex-1 justify-center">
              <div className="max-w-62.5 lg:max-w-100 xl:max-w-65 w-full">
                <PhoneFrame screenshot={item.images} index={index} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

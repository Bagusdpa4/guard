import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { BiChip } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { IoShieldCheckmark, IoEye, IoLayers } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";

export const WhatIs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const coreFeatures = [
    {
      title: "Patrol Management",
      description:
        "Ensure absolute area coverage. Digitize guard tours with real-time GPS tracking, checkpoint verification, and instant anomaly reporting to maintain strict operational compliance.",
      icon: <FaLocationDot />,
      bgIcon: "bg-blue-900",
    },
    {
      title: "Posko",
      subtitle: "Command Center Hub",
      description:
        "Centralize security operations. Functioning as the tactical core, this feature streamlines real-time incident reporting, shift handovers, and seamless coordination across all facility sectors.",
      icon: <LuBuilding2 />,
      bgIcon: "bg-blue-900",
    },
    {
      title: "SIS",
      subtitle: "Shelter Inteliguard System",
      description:
        "The next generation of intelligent surveillance. Powered by advanced analytics, this smart CCTV proactively secures your environment. Featuring automated perimeter protection, harmful object detection, and real-time anomaly alerts, SIS mitigates threats before they escalate.",
      icon: <BiChip />,
      bgIcon: "bg-blue-900",
    },
  ];

  const benefits = [
    {
      title: "Uncompromised Accountability",
      description:
        "Replace manual logbooks with tamper-proof digital records, ensuring total transparency for patrols, incident reports, and administrative audits.",
      icon: <IoShieldCheckmark />,
      bgIcon: "bg-blue-900",
    },
    {
      title: "Real-Time Operational Visibility",
      description:
        "Gain immediate, centralized insights into ground operations, personnel deployment, and facility status at any given moment.",
      icon: <IoEye />,
      bgIcon: "bg-blue-900",
    },
    {
      title: "Proactive Risk Mitigation",
      description:
        "Shift from reactive security measures to a preventative defense strategy through intelligent alerts and AI-powered monitoring.",
      icon: <MdElectricBolt />,
      bgIcon: "bg-blue-900",
    },
    {
      title: "Optimized Efficiency",
      description:
        "Streamline communication and reporting workflows, allowing security personnel to focus on active protection rather than administrative tasks.",
      icon: <IoLayers />,
      bgIcon: "bg-blue-900",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-12 lg:py-16">
      {/* Background Decor */}
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

      {/* Main Content */}
      <div className="mx-auto w-full max-w-6xl grow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-10"
        >
          {/* Headline */}
          <section className="space-y-6 border-b border-slate-500 pb-6 text-center">
            <h1 className="text-primary text-3xl font-black lg:text-7xl xl:text-4xl">
              Integrated Security Management Platform
            </h1>
            <p className="mx-auto max-w-6xl text-base font-medium leading-relaxed text-slate-500 lg:text-3xl xl:text-lg">
              A comprehensive digital ecosystem designed to modernize and
              optimize facility protection. By integrating advanced technology
              with on-the-ground operations, the system delivers total
              visibility, rapid response capabilities, and uncompromised
              security management.
            </p>
          </section>

          {/* Section Label */}
          <span className="text-primary border-primary border-l-10 pl-3 text-5xl font-extrabold uppercase">
            Core Features
          </span>

          {/* Core Features Cards */}
          <div className="flex flex-col gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-blue-700 bg-slate-200 p-5 shadow-xl"
              >
                <div
                  className={`${feature.bgIcon} flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-5xl text-white`}
                >
                  {feature.icon}
                </div>
                <div className="flex flex-col gap-1 px-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-primary text-lg font-extrabold lg:text-5xl xl:text-2xl">
                      {feature.title}
                    </h3>
                    {feature.subtitle && (
                      <span className="rounded-full bg-sky-200 px-4 py-1 text-3xl font-semibold text-sky-700">
                        {feature.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-justify text-3xl font-medium leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Label */}
          <span className="text-primary border-primary border-l-10 pl-3 text-5xl font-extrabold uppercase">
            Benefits
          </span>

          {/* Benefits Cards */}
          <div className="grid grid-cols-2 gap-6 p-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-4xl flex flex-col gap-3 border border-blue-700 p-5 shadow-xl"
              >
                <div
                  className={`${benefit.bgIcon} flex h-20 w-20 items-center justify-center rounded-full text-5xl text-white`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-primary text-lg font-extrabold lg:text-4xl xl:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-3xl font-medium leading-relaxed text-slate-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

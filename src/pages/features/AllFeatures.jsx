import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FeatureTabs } from "../../components/assets/features/FeatureTabs";
import { FaArrowLeft, FaHome, FaCar } from "react-icons/fa";
import { CiDeliveryTruck, CiMail, CiWarning } from "react-icons/ci";
import { IoIosKey } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { IoBook, IoVideocam } from "react-icons/io5";

export const AllFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Transporter");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const features = [
    {
      id: "Transporter",
      icon: <CiDeliveryTruck />,
      contents: [
        {
          title: "Transporter",
          desc: "Real-time surveillance of goods transporters within secured zones to safeguard assets and eliminate traffic-related fraud.",
          image: "/features/fitur1.png",
        },
      ],
    },
    {
      id: "Key Management",
      icon: <IoIosKey />,
      contents: [
        {
          title: "Keys Control & Management",
          desc: "To ensure all company assets remain secure while providing authorized personnel with necessary access.",
          image: "/features/fitur2.png",
        },
      ],
    },
    {
      id: "Visitor Management",
      icon: <FiUsers />,
      contents: [
        {
          title: "Visitor Management",
          desc: "Elevate front-desk security and guest experience. Systematically log, screen, and monitor facility visitors from arrival to departure, ensuring complete visibility of personnel on-site.",
          image: "/features/fitur3.png",
        },
      ],
    },
    {
      id: "Mail & Docs",
      icon: <CiMail />,
      contents: [
        {
          title: "Mail & Document Tracking",
          desc: "Digitalize the flow of incoming and outgoing correspondence. Prevent misplaced items with a systematic, traceable logging protocol for all essential documents, letters, and packages.",
          image: "/features/fitur4.jpg",
        },
      ],
    },
    {
      id: "Project Monitor",
      icon: <LuNotebookText />,
      contents: [
        {
          title: "Construction Project Security Monitoring",
          desc: "Oversee site-specific operations with precision. Track ongoing maintenance, vendor activities, or construction projects within the facility to ensure strict adherence to safety standards.",
          image: "/features/fitur5.jpg",
        },
      ],
    },
    {
      id: "Call Log",
      icon: <MdPhone />,
      contents: [
        {
          title: "Call Log Operator",
          desc: "Monitor facility communication lines. Maintain accurate, centralized records of telephone usage to optimize resource allocation and provide a clear audit trail for administrative review.",
          image: "/features/fitur6.jpg",
        },
      ],
    },
    {
      id: "Incident Report",
      icon: <CiWarning />,
      contents: [
        {
          title: "Incident Reporting",
          desc: "Standardize official documentation. Swiftly record, categorize, and archive detailed incident reports to ensure prompt administrative action, transparency, and compliance with operational protocols.",
          image: "/features/fitur7.jpg",
        },
      ],
    },
    {
      id: "Daily Log",
      icon: <IoBook />,
      contents: [
        {
          title: "Security Daily Activity Log",
          desc: "Digitize the traditional guard logbook. Accurately record shift activities, routine patrols, and critical operational milestones in a centralized, easily accessible digital format.",
          image: "/features/fitur8.jpg",
        },
      ],
    },
    {
      id: "Vehicle Log",
      icon: <FaCar />,
      contents: [
        {
          title: "Vehicle Log",
          desc: "Secure the facility perimeter. Monitor the entry, exit, and on-site parking of all vehicles, providing comprehensive oversight of traffic flow and physical asset security.",
          image: "/features/fitur9.jpg",
        },
      ],
    },
    {
      id: "Smart CCTV",
      icon: <IoVideocam />,
      contents: [
        {
          title: "Smart CCTV (Upcoming)",
          desc: "Enhance perimeter protection with AI- powered surveillance. This advanced module continuously monitors facility grounds, automatically detecting anomalies and unauthorized access to deliver real-time alerts and enable proactive threat mitigation.",
          image: "/features/fitur10.png",
        },
      ],
    },
  ];

  const currentData = features.find((f) => f.id === activeTab);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-8 font-sans lg:py-0 xl:py-12">
      {/* Background Decor - Lingkaran Blur Halus */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full items-center justify-between px-6 lg:px-12 xl:px-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      <div className="flex w-full max-w-7xl flex-col">
        {/* Header Section */}
        <div className="px-12 py-6 text-center lg:py-10 xl:py-6">
          <h1 className="text-primary py-2 text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-4xl">
            All Features
          </h1>
          <p className="mt-4 text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            Explore all Shelter Guard features for seamless cleaning operations.
          </p>
        </div>

        {/* Dynamic Tab Navigation Component */}
        <div className="w-full overflow-hidden">
          <FeatureTabs
            items={features}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Content Section */}
        <div className="flex w-full items-center justify-center bg-blue-50 p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-10"
            >
              {currentData.contents.map((content, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-2 xl:gap-16"
                >
                  {/* LEFT - Details Section */}
                  <div className="w-full flex-1 space-y-5 text-left">
                    {/* Title */}
                    <h2 className="text-primary text-4xl font-black leading-tight lg:text-[68px] xl:text-5xl">
                      {content.title}
                    </h2>

                    {/* Divider */}
                    <div className="h-2 w-40 rounded-full bg-black" />

                    {/* Description */}
                    <p className="text-sm font-bold leading-relaxed text-slate-500 lg:text-4xl xl:text-xl">
                      {content.desc}
                    </p>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2 pt-4">
                      {features.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setActiveTab(f.id)}
                          className={`h-6 rounded-full transition-all duration-300 ${
                            activeTab === f.id
                              ? "bg-primary w-20"
                              : "w-10 cursor-pointer bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* RIGHT - Phone Frame */}
                  <div className="flex w-full flex-1 justify-center">
                    <div className="max-w-62.5 lg:max-w-100 w-full xl:max-w-80">
                      <PhoneFrame screenshot={content.image} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

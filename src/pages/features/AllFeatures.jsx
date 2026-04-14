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
import { CiCircleCheck } from "react-icons/ci";

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
          key: "Logistics Security",
          title: "Transporter",
          subtitle: "Dispatches Today",
          count: "14",
          desc: "Streamline logistics and supply chain security. This feature provides comprehensive tracking and management of transport assets, ensuring secure and efficient dispatch operations across facilities.",
          capabilities: [
            "Vehicle dispatch tracking",
            "Driver assignment log",
            "Delivery confirmation",
            "Route compliance check",
          ],
        },
      ],
    },
    {
      id: "Key Management",
      icon: <IoIosKey />,
      contents: [
        {
          key: "Key Loan",
          title: "Key Management",
          subtitle: "Keys In Circulation",
          count: "7",
          desc: "Maintain strict access control. This module accurately records the checkout and return of facility keys, enforcing accountability and restricting unauthorized entry to highly secured areas.",
          capabilities: [
            "Key checkout records",
            "Return timestamp log",
            "Unauthorized access alert",
            "Key holder history",
          ],
        },
      ],
    },
    {
      id: "Visitor",
      icon: <FiUsers />,
      contents: [
        {
          key: "Guest",
          title: "Visitor Management",
          subtitle: "Visitors On-site",
          count: "5",
          desc: "Elevate front-desk security and the guest experience. Systematically log, screen, and monitor facility visitors from arrival to departure, ensuring complete visibility of personnel on-site.",
          capabilities: [
            "Guest identity verification",
            "Visit purpose logging",
            "Host confirmation",
            "Departure sign-out",
          ],
        },
      ],
    },
    {
      id: "Mail & Docs",
      icon: <CiMail />,
      contents: [
        {
          key: "Mail",
          title: "Mail & Document Tracking",
          subtitle: "Items Logged Today",
          count: "23",
          desc: "Digitize the flow of incoming and outgoing correspondence. Prevent misplaced items with a systematic, traceable logging protocol for all essential documents, letters, and packages.",
          capabilities: [
            "Inbound mail logging",
            "Outbound dispatch record",
            "Recipient confirmation",
            "Parcel tracking ID",
          ],
        },
      ],
    },
    {
      id: "Project",
      icon: <LuNotebookText />,
      contents: [
        {
          key: "Project",
          title: "Project Monitoring",
          subtitle: "Active Projects",
          count: "3",
          desc: "Oversee site-specific operations with precision. Track ongoing maintenance, vendor activities, or construction projects within the facility to ensure strict adherence to safety standards.",
          capabilities: [
            "Vendor activity log",
            "Milestone tracking",
            "Safety compliance check",
            "Project completion report",
          ],
        },
      ],
    },
    {
      id: "Telephone Log",
      icon: <MdPhone />,
      contents: [
        {
          key: "Telephone Use",
          title: "Telephone Log",
          subtitle: "Calls Logged",
          count: "41",
          desc: "Monitor facility communication lines. Maintain accurate, centralized records of telephone usage to optimize resource allocation and provide a clear audit trail for administrative review.",
          capabilities: [
            "Call duration records",
            "Extension usage log",
            "Outbound call tracking",
            "Administrative audit trail",
          ],
        },
      ],
    },
    {
      id: "Incident",
      icon: <CiWarning />,
      contents: [
        {
          key: "News",
          title: "Incident Reporting",
          subtitle: "Reports This Month",
          count: "8",
          desc: "Standardize official documentation. Swiftly record, categorize, and archive detailed incident reports to ensure prompt administrative action, transparency, and compliance with operational protocols.",
          capabilities: [
            "Incident categorization",
            "Photo evidence upload",
            "Escalation workflow",
            "Compliance archiving",
          ],
        },
      ],
    },
    {
      id: "Daily Log",
      icon: <IoBook />,
      contents: [
        {
          key: "Daily Log",
          title: "Daily Log",
          subtitle: "Entries Today",
          count: "29",
          desc: "Digitize the traditional guard logbook. Accurately record shift activities, routine patrols, and critical operational milestones in a centralized, easily accessible digital format.",
          capabilities: [
            "Shift activity entries",
            "Patrol milestone log",
            "Guard handover notes",
            "Digital signature capture",
          ],
        },
      ],
    },
    {
      id: "Vehicle Log",
      icon: <FaCar />,
      contents: [
        {
          key: "Vehicle",
          title: "Vehicle Logging",
          subtitle: "Vehicles On-site",
          count: "18",
          desc: "Secure the facility perimeter. Monitor the entry, exit, and on-site parking of all vehicles, providing comprehensive oversight of traffic flow and physical asset security.",
          capabilities: [
            "Plate number scanning",
            "Entry & exit timestamp",
            "Parking slot assignment",
            "Unauthorized vehicle alert",
          ],
        },
      ],
    },
    {
      id: "AI Surveillance",
      icon: <IoVideocam />,
      contents: [
        {
          key: "AI Surveillance",
          title: "Smart CCTV",
          subtitle: "Cameras Online",
          count: "32",
          desc: "Enhance perimeter protection with AI- powered surveillance. This advanced module continuously monitors facility grounds, automatically detecting anomalies and unauthorized access to deliver real-time alerts and enable proactive threat mitigation.",
          capabilities: [
            "AI anomaly detection",
            "Unauthorized access alert",
            "Real-time monitoring feed",
            "Threat event archiving",
          ],
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
        <div className="px-12 py-6 text-left lg:py-10 xl:py-6">
          <h1 className="text-primary py-2 text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-4xl">
            Features
          </h1>
          <p className="mt-4 text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            See what Guard can do
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
        <div className="flex w-full items-center border-t border-primary justify-center px-10 py-10">
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
                  className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-12"
                >
                  {/* Details Section - Kiri */}
                  <div className="w-full flex-1 space-y-4 text-left">
                    {/* Badge */}
                    <span className="text-primary inline-flex items-center gap-2 rounded-full border border-blue-700 bg-indigo-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest lg:px-6 lg:py-4 lg:text-2xl xl:px-4 xl:py-2 xl:text-sm">
                      {content.key}
                    </span>

                    {/* Title */}
                    <h2 className="text-primary text-3xl font-black leading-tight lg:text-7xl xl:text-5xl">
                      {content.title}
                    </h2>

                    {/* Divider */}
                    <div className="bg-primary h-1 w-16 rounded-full lg:w-32 xl:w-20" />

                    {/* Description */}
                    <p className="text-sm font-medium leading-relaxed text-slate-500 lg:text-3xl xl:text-base">
                      {content.desc}
                    </p>
                  </div>

                  {/* Card Kanan */}
                  <div className="w-full flex-1 space-y-3 lg:space-y-5 xl:space-y-4">
                    {/* Stats Card */}
                    <div className="bg-primary flex items-center justify-between rounded-2xl px-5 py-4 lg:px-6 lg:py-6 xl:px-6 xl:py-4">
                      <div className="flex items-center gap-3 lg:gap-4 xl:gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white lg:h-16 lg:w-16 xl:h-10 xl:w-10">
                          {React.cloneElement(currentData.icon, {
                            className: "text-base lg:text-4xl xl:text-xl",
                          })}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white/70 lg:text-3xl xl:text-sm">
                            {content.subtitle}
                          </p>
                          <p className="text-2xl font-black text-white lg:text-4xl xl:text-4xl">
                            {content.count}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 animate-ping rounded-full bg-green-400 lg:h-4 lg:w-4" />
                        <span className="text-xs font-bold text-white/70 lg:text-xl xl:text-xs">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* Key Capabilities */}
                    <div className="rounded-2xl bg-slate-200 px-4 py-10">
                      <p className="text-primary mb-3 text-xs font-bold uppercase tracking-widest lg:mb-8 lg:text-3xl xl:mb-3 xl:text-xs">
                        Key Capabilities
                      </p>
                      <div className="space-y-2 lg:space-y-4 xl:space-y-2">
                        {content.capabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="border-primary flex items-center gap-3 border-b pb-4 lg:gap-4 xl:gap-3"
                          >
                            <CiCircleCheck className="text-primary shrink-0 text-sm lg:text-5xl xl:text-base" />
                            <span className="py-2 text-sm font-semibold text-slate-600 lg:text-3xl xl:text-sm">
                              {cap}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Dots Indicator */}
              <div className="flex w-full items-center justify-center gap-2 pt-10">
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

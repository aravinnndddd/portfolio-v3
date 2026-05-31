import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Rocket,
  ShoppingBag,
  Laptop,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "../data";

export default function ServicesList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "web":
        return <Globe className="h-10 w-10 text-black mb-5" />;
      case "rocket_launch":
        return <Rocket className="h-10 w-10 text-black mb-5" />;
      case "shopping_bag":
        return <ShoppingBag className="h-10 w-10 text-black mb-5" />;
      case "devices":
        return <Laptop className="h-10 w-10 text-black mb-5" />;
      default:
        return <Globe className="h-10 w-10 text-black mb-5" />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 text-black border-t border-neutral-200"
    >
      <div className="space-y-2 mb-12">
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold flex items-center gap-1.5ClassName">
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
          Solutions
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          Services I Do
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="p-8 bg-white border border-neutral-200 hover:border-black transition-colors duration-300 flex flex-col justify-between group relative [border-radius:4px]"
            >
              <div>
                {getServiceIcon(service.icon)}

                <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-900 group-hover:text-black mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#5e5e5e] leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              {/* Expansion Details Button widget */}
              <div className="pt-4 border-t border-dashed border-neutral-100">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between text-left font-mono text-[10px] font-bold uppercase text-neutral-600 hover:text-black tracking-wider cursor-pointer"
                  aria-label={`View deliverables included in ${service.title}`}
                >
                  <span>{isExpanded ? "Hide Specs" : "Show Deliverables"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mt-4 pt-1">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 font-mono text-[9px] text-[#5e5e5e] leading-tight uppercase font-medium"
                          >
                            <CheckCircle2 className="h-3 w-3 text-black shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

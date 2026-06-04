import React from "react";
import { constructionProjects } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ConstructionSection() {
  return (
    <section
      id="construction"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏗️ Construction Projects
          </h2>
        </MotionWrapper>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {constructionProjects.filter(p => !p.hideFromConstruction).map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <a href={`/construction/${project.slug}`}>
                <GlassCard className="p-5 h-full cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                  {project.images && project.images[0] && (
                    <img
                      src={project.images[0].src}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                      {project.type}
                    </span>
                    <h3 className="text-lg font-bold leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                    {project.location && (
                      <p className="text-xs text-muted-foreground">{project.location}</p>
                    )}
                    {project.period && (
                      <p className="text-xs text-muted-foreground">{project.period}</p>
                    )}
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

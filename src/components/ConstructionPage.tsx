import React from "react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

interface ConstructionProject {
  title: string;
  type: string;
  role: string;
  value?: string;
  location?: string;
  period?: string;
  images?: { src: string; caption: string }[];
  description: string[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ConstructionPage({ project }: { project: ConstructionProject }) {
  return (
    <main className="min-h-screen py-16">
      <div className="container max-w-3xl mx-auto px-6 md:px-4">

        {/* Back link */}
        <MotionWrapper>
          <a
           href="/#construction"
    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
  >
          
            ← Back to Construction Projects
          </a>
        </MotionWrapper>

        {/* Type badge + Title */}
        <MotionWrapper>
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            {project.type}
          </span>
          <h1 className="text-3xl font-bold mt-2 mb-2">{project.title}</h1>
        </MotionWrapper>

        {/* Meta info */}
        <MotionWrapper>
          <GlassCard className="p-5 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Role</span>
                <p className="font-medium">{project.role}</p>
              </div>
              {project.location && (
                <div>
                  <span className="text-muted-foreground">Location</span>
                  <p className="font-medium">{project.location}</p>
                </div>
              )}
              {project.period && (
                <div>
                  <span className="text-muted-foreground">Period</span>
                  <p className="font-medium">{project.period}</p>
                </div>
              )}
              {project.value && (
                <div>
                  <span className="text-muted-foreground">Project Value</span>
                  <p className="font-medium">{project.value}</p>
                </div>
              )}
            </div>
          </GlassCard>
        </MotionWrapper>

{/* Images */}
{project.images && project.images.slice(1).map((image, index) => (          <MotionWrapper key={index}>
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full object-contain max-h-96 rounded-xl"
              />
              <p className="text-muted-foreground italic text-sm mt-2">{image.caption}</p>
            </div>
          </MotionWrapper>
        ))}

        {/* Description — each paragraph animates in separately */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {project.description.map((paragraph, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="p-5">
                <p className="text-sm leading-relaxed">{paragraph}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}

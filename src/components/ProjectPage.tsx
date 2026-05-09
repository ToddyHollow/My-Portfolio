import React from "react";
import { motion } from "framer-motion";

interface ProjectImage {
  src: string;
  caption: string;
}

interface ProjectPageProps {
  title: string;
  description: string[];
  images?: ProjectImage[];
  pdf?: string;
}

export default function ProjectPage({ title, description, images, pdf }: ProjectPageProps) {
  return (
    <main className="min-h-screen container max-w-4xl mx-auto px-6 py-12">
      <motion.a
        href="/#projects"
        className="inline-block mb-8 text-purple-500 hover:text-purple-400 transition-colors"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        ← Back to Projects
      </motion.a>

      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h1>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description.map((desc, i) => (
          <p key={i} className="text-muted-foreground mb-4">{desc}</p>
        ))}
      </motion.div>

      {images && images.map((image, index) => (
        <motion.div
          key={index}
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <p className="text-muted-foreground italic">{image.caption}</p>
        </motion.div>
      ))}

      {pdf && (
        <motion.a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          View Full PDF
        </motion.a>
      )}
    </main>
  );
}

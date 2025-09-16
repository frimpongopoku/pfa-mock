"use client";

import { motion } from "framer-motion";
import { Heart, Star, Zap, Sparkles, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const technologies = [
    {
      name: "Next.js 15",
      description: "The React Framework for the Web with App Router",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      features: ["Server Components", "App Router", "Turbopack", "TypeScript"],
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development",
      icon: <Sparkles className="h-8 w-8 text-cyan-500" />,
      features: ["Utility Classes", "Responsive Design", "Dark Mode", "Custom Themes"],
    },
    {
      name: "Framer Motion",
      description: "A production-ready motion library for React",
      icon: <Star className="h-8 w-8 text-purple-500" />,
      features: ["Animations", "Gestures", "Layout Animations", "SVG Support"],
    },
    {
      name: "Shadcn/ui",
      description: "Beautiful and accessible components built with Radix UI",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      features: ["Accessible", "Customizable", "Copy & Paste", "TypeScript"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            PFA Mock
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern Next.js setup with TypeScript, Tailwind CSS, Framer Motion, Shadcn/ui, and Lucide Icons
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View on GitHub
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Twitter className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {technologies.map((tech) => (
            <motion.div key={tech.name} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {tech.name}
                      </CardTitle>
                      <CardDescription>{tech.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                Hover over the icon below to see Framer Motion in action!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "hsl(var(--primary))",
                }}
                whileTap={{ scale: 0.9 }}
                className="p-6 rounded-full bg-secondary cursor-pointer"
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                <Sparkles className="h-8 w-8 text-primary" />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 text-center text-muted-foreground"
        >
          <p>Built with ❤️ using modern web technologies</p>
        </motion.footer>
      </main>
    </div>
  );
}

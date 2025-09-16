import React from "react";
import { Button, buttonVariants } from "./button";
import { motion } from "framer-motion";
import { VariantProps } from "class-variance-authority";
function CustomButton(
  props: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
) {
  const { children, className, ...rest } = props;
  return (
    <motion.div
      //   className="bg-[#137fec] text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 hover:bg-[#3b82f6] transition-colors duration-200 shadow-lg shadow-blue-500/30"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button className={` ${className}`} {...rest}>
        {children}
      </Button>
    </motion.div>
  );
}

export default CustomButton;

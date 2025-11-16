"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-6 px-4">
      <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg w-full max-w-3xl relative z-10">
        <div className="flex items-center">
          <motion.div
            className="w-12 h-12 mr-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-12 w-12 rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center">
              <img
                src="/am-text-logo.png"
                alt="AM Studios logo"
                className="h-full w-full object-cover scale-125"
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "About", "Testimonials", "Pricing", "Contact"].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium">
                {item}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="https://wa.me/919990975812?text=Hi,%20I%20want%20to%20book%20your%20studio%20for%20a%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            Get Started
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {["Home", "Services", "About", "Testimonials", "Pricing", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="https://wa.me/918539053555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black rounded-full hover:bg-gray-800 transition-colors "
                  onClick={toggleMenu}
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export { Navbar1 }
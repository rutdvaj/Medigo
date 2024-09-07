"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedModalDemo() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="rounded-xl px-6 bg-main dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="text-[20px] font-sans group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book Now!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}

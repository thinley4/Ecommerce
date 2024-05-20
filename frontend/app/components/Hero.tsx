"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";
import { Featurescard } from "./FeaturesCards";
import FastDelivery from "./assets/fastdelivery.jpg";
import Trust from "./assets/trust.jpeg"
import Growth from "./assets/growth.png";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <AuroraBackground className="bg-black/10">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Products That Always Meets Expectation
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Get The Most Out Of Your Money
          </div>
          <button className="bg-black dark:bg-white hover:text-xl rounded-full w-fit text-white dark:text-black px-4 py-2">
            <Link href={"/viewproducts"}>Go To Products</Link>
          </button>
        </motion.div>
      </AuroraBackground>
      <div className="lg:flex items-center justify-around bg-neutral-100 dark:bg-black">
        <div className="text-5xl md:text-6xl lg:text-7xl md:flex justify-center ">Free Delivery Till 7th ✨</div>
        <Featurescard
          title="Flash Delivery"
          description="Get yours Now"
          image={FastDelivery}
        />
      </div>
      <div className="lg:flex items-center justify-around bg-neutral-300 dark:bg-black">
        <div className="text-5xl md:text-6xl lg:text-7xl md:flex justify-center lg:hidden">Trust And Relation ✨</div>
        <Featurescard
          title="Flash Delivery"
          description="Get yours Now"
          image={Trust}
        />
        <div className="hidden md:hidden text-5xl md:text-6xl lg:text-7xl lg:block">Trust And Relation ✨</div>
      </div>
      <div className="lg:flex items-center justify-around bg-neutral-200 dark:bg-black">
        <div className="text-5xl md:text-6xl lg:text-7xl md:flex justify-center">Growing Ecommerce ✨</div>
        <Featurescard
          title="Flash Delivery"
          description="Get yours Now"
          image={Growth}
        />
      </div>
    </>
  );
}

"use client";

import React from "react";

import { motion } from "framer-motion";

import { IoLeafOutline } from "react-icons/io5";
import { PiHandshakeLight, PiInfinityLight } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { LiaCanadianMapleLeaf } from "react-icons/lia";

import { slideIn } from "@/app/animations/animations";

export default function ProductFeaturesList() {
  return (
    <motion.ul
      className="grid grid-cols-2 gap-10 md:grid-cols-3"
      initial="initial"
      whileInView="enter"
      viewport={{ once: true }}
      variants={{
        enter: { transition: { staggerChildren: 0.06 } },
      }}
    >
      <FeatureItem icon={<IoLeafOutline />}>
        organic <br />
        yerba mate
      </FeatureItem>
      <FeatureItem icon={<PiInfinityLight />}>no crash</FeatureItem>
      <FeatureItem icon={<BsCupHot />}>
        equivalent <br />
        to an espresso
      </FeatureItem>
      <FeatureItem icon={<WiStars />}>
        awakens <br />
        the mind
      </FeatureItem>
      <FeatureItem icon={<PiInfinityLight />}>
        sports <br />
        recovery
      </FeatureItem>
      <FeatureItem icon={<PiHandshakeLight />}>fair trade</FeatureItem>
      <FeatureItem icon={<LiaCanadianMapleLeaf />}>
        proudly <br />
        canadian
      </FeatureItem>
      <FeatureItem icon={<PiHandshakeLight />}>no jilters</FeatureItem>
    </motion.ul>
  );
}

function FeatureItem({ icon, children }) {
  return (
    <motion.li className="" variants={slideIn}>
      <span className="text-4xl lg:text-5xl">{icon}</span>
      <p className="mt-4 text-lg/none lg:text-xl/none">{children}</p>
    </motion.li>
  );
}

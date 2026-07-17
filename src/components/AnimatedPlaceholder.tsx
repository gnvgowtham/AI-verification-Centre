"use client";

import { useEffect, useState } from "react";

const placeholders = [
  "Verify an Instagram Reel...",
  "Verify a WhatsApp Forward...",
  "Verify Breaking News...",
  "Verify an AI Image...",
  "Verify a Viral Tweet...",
  "Verify a Government Announcement...",
];

export default function AnimatedPlaceholder() {
  const [text, setText] = useState(placeholders[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setText(placeholders[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return text;
}
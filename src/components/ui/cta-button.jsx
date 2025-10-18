import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Reusable CTA Button (UI/UX aligned)
 *
 * @param {string} label - Visible text (action-oriented, e.g. "Get Started")
 * @param {string} path - Navigation target
 * @param {"primary"|"secondary"} variant - Button type for hierarchy
 */
const CTAButton = ({ label, path, variant = "primary" }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  // --- Brand colors ---
  const colors = {
    primary: {
      base: "#355E3B", // deep green (safety + trust)
      hover: "#5d8a64ff", // slightly darker for hover feedback
      text: "#f0ebebff",
      border: "transparent",
    },
    secondary: {
      base: "transparent",
      hover: "rgba(34, 36, 34, 0.1)", // soft green overlay
      text: "#eff5f1ff",
      border: "#dbc870ff",
    },
    tertiary: {
      base: "#c9ad33ff",
      hover: "#ecda7eff", // soft green overlay
      text: "#141414ff",
      border: "transparent",
    },
  };

  const palette = colors[variant];

  const baseStyle = {
    backgroundColor: hover ? palette.hover : palette.base,
    color: palette.text,
    fontWeight: 480,
    
    border: `1px solid ${palette.border}`,
    padding: window.innerWidth >= 768 ? "16px 32px" : "12px 24px",
    boxShadow:
      variant === "primary"
        ? hover
          ? "0 4px 12px rgba(53, 94, 59, 0.35)"
          : "0 2px 6px rgba(0,0,0,0.15)"
        : "none",
    cursor: "pointer",
    //transform: hover ? "scale(1.04)" : "scale(1)",
    transform: hover ? "scale(1.01)" : "scale(1)",
    transition: "all 0.2s ease",
    outlineOffset: "2px",
  };

  return (
    <Button
      size="lg"
      style={baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={() => navigate(path)}
      aria-label={label}
    >
      {label}
    </Button>
  );
};

export default CTAButton;

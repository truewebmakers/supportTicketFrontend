import React, { useState } from "react";

export default function Header() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleSidebar = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <a
      href="https://webpixels.io/components?ref=codepen"
      className="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative"
      style={{ zIndex: 1000 }}
    >
      <strong>Crafted with Webpixels CSS:</strong> The design system for
      Bootstrap 5. Browse all components →
    </a>
  );
}

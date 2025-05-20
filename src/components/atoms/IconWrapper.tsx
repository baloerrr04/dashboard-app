import React from "react";

interface IconWrapperProps {
  icon: React.ReactNode;
  bgColor?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, bgColor }) => (
  <div style={{ backgroundColor: bgColor, padding: 8, borderRadius: "50%" }}>
    {icon}
  </div>
);

export default IconWrapper;
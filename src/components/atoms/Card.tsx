import { Card as AntCard, CardProps as AntCardProps } from "antd";
import React from "react";
import clsx from "clsx";
import "../../index.css";

interface CustomCardProps extends AntCardProps {
  padding?: string;
  className?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ padding, className, ...rest }) => {
  return (
    <AntCard
      className={clsx("card", className)}
      bodyStyle={{ padding }}
      {...rest}
    />
  );
};

export default CustomCard;

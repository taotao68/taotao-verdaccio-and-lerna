import React from "react";
import cn from "classnames";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 *  这是一个按钮组件 注释生成文档
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={cn(
        "bg-primary dark:bg-cyan-200 text-red-300 px-2 w-[100px] h-5",
        "after:content-['']",
        "hover:bg-blue-300 transition duration-150 first-letter:text-red-500"
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

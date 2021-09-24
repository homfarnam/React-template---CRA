import React from "react"

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "black" | "white" | string
  noPaddings?: boolean
  fontSize?: string
  text: string
}

const Button: React.FC<ButtonProps> = ({
  variant = "",
  className = "",
  fontSize,
  noPaddings = false,
  disabled,
  text,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-full font-bold sm:leading-9
       ${fontSize ? fontSize : "text-lg"} ${noPaddings ? "" : "py-3 px-8"} ${
        variant === "black"
          ? "bg-black"
          : variant === "white"
          ? "bg-white"
          : null
      } ${variant === "black" ? "text-white" : "text-black"} ${
        disabled ? "opacity-50" : ""
      } ${className}`}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button

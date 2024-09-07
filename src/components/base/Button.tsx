interface ButtonProps {
  variant?: "dark" | "primary" | "outline";
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: string;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  customClass?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variants = {
  dark: "bg-mainDark  hover:bg-[#d8d8d8] hover:text-black",
  primary: "bg-[#F62559] hover:bg-[#FA0738] hover:shadow-lg",
  outline: "bg-transparent",
};

const Button: React.FC<ButtonProps> = ({
  variant = "dark",
  iconLeft = false,
  iconRight = false,
  text = "button",
  loading,
  icon,
  disabled = false,
  customClass = "",
  type = "button",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group cursor-pointer capitalize rounded-lg transition text-white duration-200 h-11 px-3 flex items-center justify-center gap-1 text-[15px] leading-6  ${variants[variant]} ${customClass}`}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        <>
          {iconLeft && icon && <i className={`${icon}`}></i>}
          {text && <span className="mt-0.5">{text}</span>}
          {iconRight && icon && <i className={`${icon}`}></i>}
        </>
      )}
    </button>
  );
};

export default Button;

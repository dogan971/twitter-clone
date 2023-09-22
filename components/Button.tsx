type ButtonProps = {
  label: string;
  onClick: () => void;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${props.fullWidth ? "w-full" : "w-fit"}
        ${props.large ? "text-xl" : "text-md"}
        ${props.large ? "px-5" : "px-4"}
        ${props.large ? "py-3" : "py-2"}
        ${props.secondary ? "bg-white" : "bg-sky-500"}
        ${props.secondary ? "text-black" : "text-white"}
        ${props.secondary ? "border-black" : "border-sky-500"}
        ${props.outline ? "bg-transparent" : ""}
        ${props.outline ? "border-white" : ""}
        ${props.outline ? "text-white" : ""}

        `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Button;

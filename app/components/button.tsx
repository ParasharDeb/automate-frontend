export default function Custombutton({
  varient,
  size,
  onClick,
  content,
  classname
}: {
  varient: "darkmode" | "lightmode";
  size: "sm" | "lg";
  onClick: (e: any) => void;
  content: string;
  classname?:string
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none mt-5 cursor-pointer";

  const variantStyles = {
    darkmode:
      "bg-grey-300 text-white hover:bg-grey-400 focus:ring-gray-700 ring-offset-gray-900",
    lightmode:
      "bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-300 ring-offset-white",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    lg: "px-29 py-1 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[varient]} ${sizeStyles[size]} ${classname}`}
      type="button"
    >
      {content}
    </button>
  );
}

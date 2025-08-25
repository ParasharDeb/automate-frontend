export default function CustomInputbox({
  type,
  onChange,
  placeholder,
  value,
  name,
}: {
  type: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
  name: string;
}) {
  return (
    <div className="my-5">
      <div className="px-1">{name}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="
          bg-grey-300 
          px-3 py-2 
          w-full 
          rounded-lg
          mt-2 

          border border-transparent 
          focus:border-grey-400 
          focus:ring-3
          focus:ring-gray-500 
          focus:ring-opacity-50 

          transition 
          duration-300 
          ease-in-out 
          outline-none
          placeholder:text-grey-500
        "
      />
    </div>
  );
}

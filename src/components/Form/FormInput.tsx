interface FormInputProps {
  id: string;
  type: string;
  placeholder: string;
  parentClass?: string;
  inputClass?: string;
  error?: boolean;
  //   value: string;
  before: string;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  placeholder = "",
  parentClass = "",
  inputClass = "",
  error,
  //   value,
  before,
  //   onChange,
}) => {
  return (
    <div
      className={`flex items-center transition duration-300 ${parentClass} `}
    >
      <span className="mx-[10px] text-[20px] leading-none">
        {before ? <i className={before}></i> : null}
      </span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        // value={value}
        // onChange={onChange}
        className={`transition-[1s] text-[15px] font-normal ${
          error ? "border-red-500" : "border-grayPrimary"
        } ${inputClass} rounded-md`}
      />
      {/* <button type="reset" className="mx-[10px] text-[20px] leading-none">
        <i className="icon-close-circle"></i>
      </button> */}
    </div>
  );
};

export default FormInput;

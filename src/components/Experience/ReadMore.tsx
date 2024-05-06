import { useState, ReactNode } from "react";

export default function ReadMore({ children }: { children: ReactNode }) {
  const [isEnabled, setisEnabled] = useState(false);

  const handleOnClick = () => {
    setisEnabled(!isEnabled);
  };

  return (
    <>
      <div className={`${isEnabled ? "auto" : "h-[70px] overflow-y-hidden"}`}>
        {children}
      </div>
      <button
        className="border-2 border-accent-color-0 mt-3 py-1 px-2 text-accent-color-0
      hover:text-white hover:bg-accent-color-0"
        onClick={handleOnClick}
      >
        <span>{isEnabled ? "Read Less" : "Read More"}</span>
      </button>
    </>
  );
}

import React from "react";

interface ModalProps<T> {
  setIsOpen: (value: T) => void;
  content: React.ReactNode;
}

const Modal = <T,>({ setIsOpen, content }: ModalProps<T>) => {
  return (
    <div className="fixed  inset-0 z-[9999] flex  justify-center bg-black/60">
      {/* ✅ Modal Box */}
      <div className=" p-5 rounded-md shadow-lg  w-full relative">
        {content} {/* ✅ Now it can accept JSX Components */}
        <button
          className="mt-4 cursor-pointer px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setIsOpen({ open: false, content: null } as T)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

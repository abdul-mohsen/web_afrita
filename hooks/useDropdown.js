import { useState, useRef, useEffect } from "react"
function useDropdown() {


const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef(null);
const iconRef = useRef(null);


const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
};

const handleCloseDropdown = (e) => {
  
  if (
    dropdownRef.current &&
    !dropdownRef.current.contains(e.target) &&
    iconRef.current &&
    !iconRef.current.contains(e.target)
  ) {
    setIsOpen(false);
  }
};

useEffect(() => {
  document.addEventListener("mousedown", handleCloseDropdown);

  return () => {
    document.removeEventListener("mousedown", handleCloseDropdown);
  };
}, []);



  return {isOpen,handleClick,dropdownRef,iconRef }
    
  
}

export default useDropdown
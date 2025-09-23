import { useCallback, useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  return { isOpen, toggle, open, close };
};

export default useToggle;

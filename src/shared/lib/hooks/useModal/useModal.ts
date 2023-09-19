import { useCallback, useState } from 'react';

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen((state) => !state);
  }, []);

  return {
    isModalOpen,
    toggleModal,
  };
}

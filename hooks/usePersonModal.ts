import { create } from "zustand";
import React from 'react'

interface PersonModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePersonModal = create<PersonModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePersonModal;

import { create } from 'zustand'

export const useSidebarStore = create((set) => ({
    isOpen: false,
    type: '',
    setIsOpen: (isOpen) => set({ isOpen }),
    setType: (type) => set({ type })
}))

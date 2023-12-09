import { create } from 'zustand';

export const useContacts = create((set) => ({
  contacts: [],
  addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] }))
}))

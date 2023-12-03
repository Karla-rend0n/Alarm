import { create } from 'zustand';

export const useUser = create((set) => ({
    user: null,
    login: (user) => set((state) => ({
        user
    })),
    edit_info: (user) => set((state) => (
        {
            user
        }
    )),
    edit_address: (user) => set((state) => (
        {
            user
        }
    ))
}))

import { create } from 'zustand'

type TBearStore = {
  user: {
    name: string
    phone: number
  }
  getUserInfo: () => Promise<string>
}

export const useBearStore = create<TBearStore>()((set) => ({
  user: {
    name: 'yi',
    phone: 13246566447
  },
  getUserInfo: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await res.json()
    set((state) => ({
      user: {
        ...state.user,
        name: user.name
      }
    }))
    return user.name
  }
}))

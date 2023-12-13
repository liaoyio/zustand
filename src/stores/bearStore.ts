import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TBearStore = {
  bears: number
  color: string
  size: string
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useBearStore = create<TBearStore>()(persist(
  (set) => ({
    bears: 0,
    color: 'pink',
    size: 'big',
    increasePopulation: () => set((state) => ({
      ...state,
      bears: state.bears + 1
    })),
    removeAllBears: () => set({ bears: 0 }),
    reset: () => set({
      bears: 0,
      color: 'pink',
      size: 'big',
    })
  }),
  {
    // 设置存储的key名称, 且必须是唯一的
    name: 'bear Store',
  }
))

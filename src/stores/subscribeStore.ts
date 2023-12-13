
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

type TBearStore = {
  bears: number
  color: string
  size: string
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useBearStore = create<TBearStore>()(
  (set) => ({
    bears: 0,
    color: 'pink',
    size: 'big',
    increasePopulation: () => set((state) => ({
      ...state,
      bears: state.bears + 1
    })),
    removeAllBears: () => set({ bears: 0 })
  })
)


type TFishStoreState = {
  fish: number;
  addOneFish: () => void;
  removeOneFish: () => void;
  removeAllFish: () => void;
}

export const useFoodStore = create<TFishStoreState>()(
  subscribeWithSelector(
    (set) => ({
      fish: 0,
      addOneFish: () => set((state) => ({ fish: state.fish + 1 })),
      removeOneFish: () => set((state) => ({ fish: state.fish - 1 })),
      removeAllFish: () => set({ fish: 0 }),
    })
  )
)


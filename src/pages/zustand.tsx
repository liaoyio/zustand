// import { BearBox } from "@/components/zustand/BearBox"
// import { CatBox } from "@/components/zustand/CatBox"
// import { CatBox2 } from "@/components/zustand/CatBox2"
import { BearBox, FoodBox } from "@/components/zustand/boxReactive"

const Zustand = () => {
  return (
    <div className="container mx-auto !max-w-screen-2xl px-8 pb-20 pt-8">
      <div className="demo">
        <h1 className="text-center">Zustand Tutorial</h1>
        <div>
          <BearBox />
          <FoodBox />
        </div>
      </div>
    </div>
  )
}

export default Zustand

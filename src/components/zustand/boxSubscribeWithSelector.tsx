import { useBearStore, useFoodStore } from "@/stores/subscribeStore";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

export const BearBox = () => {
  const { bears, increasePopulation, removeAllBears } = useBearStore();
  const [bgColor, setBgColor] = useState<string | undefined>();

  useEffect(() => {
    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        // 如果组件是第一次运行，那么本次状态 fish和上次状态 prevFish 就是一样的
        // 所以: 如果 fireImmediately 为 false，那么下面的判断就不会执行
        /* if (fish === prevFish) {
          fish > 5 ? setBgColor("lightgreen") : setBgColor("lightpink");
        } */
        if (prevFish <= 5 && fish > 5) {
          setBgColor("lightgreen");
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor("lightpink");
        }
      },
      {
        equalityFn: shallow, // 判断两个对象是否相等
        fireImmediately: true, // 是否在第一次（初始化时）立刻执行
      }
    );
    return unsub;
  }, []);

  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove all bears</button>
      </div>
    </div>
  );
};

/* export const FoodBox = () => {
  const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore();

  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish: {fish}</p>
      <div>
        <button onClick={addOneFish}>🐟 + 1</button>
        <button onClick={removeOneFish}>🐟 — 1</button>
        <button onClick={removeAllFish}>Remove all fish 🗑️ </button>
      </div>
    </div>
  );
};
 */

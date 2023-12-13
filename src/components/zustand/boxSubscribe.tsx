import { useBearStore, useFoodStore } from "@/stores/reactiveStore";
import { useEffect, useState } from "react";


export const BearBox = () => {
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  // const fish = useFoodStore((state) => state.fish);
  const [bgColor, setBgColor] = useState('lightpink');

  useEffect(() => {
    const unsub = useFoodStore.subscribe((state, prevState) => {
      if (prevState.fish <= 5 && state.fish > 5) {
        setBgColor("lightgreen");
      } else if (prevState.fish > 5 && state.fish <= 5) {
        setBgColor("lightpink");
      }
    }
    )
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
        <button onClick={useBearStore.persist.clearStorage}>
          clear storage
        </button>
      </div>
    </div>
  );
};

export const FoodBox = () => {
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

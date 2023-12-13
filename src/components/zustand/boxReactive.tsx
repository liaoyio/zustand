import { useBearStore, useFoodStore } from "@/stores/reactiveStore";


export const BearBox = () => {
  const { bears, increasePopulation, removeAllBears } = useBearStore();
  const fish = useFoodStore((state) => state.fish);

  return (
    <div className="box" style={{ backgroundColor: fish > 5 ? 'lightgreen' : 'lightpink' }}>
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

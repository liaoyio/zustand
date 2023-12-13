import { useBearStore } from "@/stores/bearStore";
import { randomNum } from "@/utils/lib";

export const BearBox = () => {
  /* const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears); */

  const { bears, increasePopulation, removeAllBears } = useBearStore();

  return (
    <div className="box">
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{randomNum(1, 100)}</p>
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

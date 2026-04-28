import { counterStore } from "@/store/store";
import { Button } from "./ui/button"
// import { useShallow } from "zustand/shallow";

export const CounterActions = () => {
    const actions = counterStore((state) => state.actions);

    // Why do we need to separate actions from the main state?
    // Separating actions from the main state can help in organizing the code better, especially when the state has a lot of properties and actions. If we use action, it doesn't require useShallow to prevent unnecessary re-renders in components that only use actions, as the actions object reference will remain the same unless the actions themselves change. 

    // const { increment, decrement, reset } = counterStore(
    //   useShallow((state) => ({
    //     increment: state.increment,
    //     decrement: state.decrement,
    //     reset: state.reset,
    //   }))
    // );

    return (
        <div className="flex justify-between w-full">
            <div className="flex gap-2">
                <Button onClick={actions.increment}>+</Button>
                <Button onClick={actions.reset}>Reset</Button>
                <Button onClick={actions.decrement}>-</Button>
                {/* <Button onClick={increment}>+</Button>
                <Button onClick={reset}>Reset</Button>
                <Button onClick={decrement}>-</Button> */}
            </div>
        </div>
    )
}

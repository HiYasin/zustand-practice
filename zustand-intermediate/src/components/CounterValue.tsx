import { counterStore } from "@/store/store";

export const CounterValue = () => {
    const count = counterStore((state) => state.count);

    return (
        <p>Count Value : {count}</p>
    )
}

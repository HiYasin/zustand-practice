import { counterStore } from "@/store/store";
import { CounterActions } from "./CounterActions"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export const CounterCoupled = () => {
    const count = counterStore((state) => state.count);
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Counter </CardTitle>
                <CardDescription>
                    A simple counter application using Zustand for state management.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Count Value : {count}</p>
            </CardContent>
            <CardFooter>
                <CounterActions />
            </CardFooter>
        </Card>
    )
}


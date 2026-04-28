import { CounterActions } from "./CounterActions"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { CounterValue } from "./CounterValue";

export const Counter = () => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Counter </CardTitle>
                <CardDescription>
                    A simple counter application using Zustand for state management.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CounterValue />
            </CardContent>
            <CardFooter>
                <CounterActions />
            </CardFooter>
        </Card>
    )
}

// Counter =  CounterValue + CounterActions
// CounterValue and CounterAction is de-coupled from each other to avoid unnecessary re-rendering of CounterValue when we click on CounterActions and vice versa.
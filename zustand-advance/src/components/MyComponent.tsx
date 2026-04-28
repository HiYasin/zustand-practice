import { UpdateUser } from "./UpdateUser";
import { DisplayUser } from "./DisplayUser";

export const MyComponent = () => {
    return (
        <div className="space-y-3">
            <DisplayUser />
            <UpdateUser />
        </div>
    );
};
import { useUserStore } from "@/store/store";
import { useShallow } from "zustand/shallow";

export const DisplayUser = () => {
    const { name, address, streetNo } = useUserStore(
        useShallow((state) => ({
            name: state.name,
            address: state.address,
            streetNo: state.address.street.streetNo,
        }))
    );
    return (
        <div className="border border-primary border-2 p-5 rounded">
            <p>{name}</p>
            <p>{address.city}</p>
            <p>{address.zip}</p>
            <p>{address.street.houseNo}</p>
            <p>{streetNo}</p>
        </div>
    )
}

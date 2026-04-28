import { createImmerPersistStore } from "@/lib/zustand";
import type { StateCreator } from "zustand/vanilla";

type UserAddress = {
    street: {
        streetNo: number;
        houseNo: number;
    };
    city: string;
    zip: string;
}

type UserState = {
    name: string;
    email: string;
    address: UserAddress;
};

// Important: Add the Immer type hint here! [["zustand/immer", never]]
const userStore: StateCreator<UserState, [["zustand/immer", never]]> = () => ({
    name: "",
    email: "",
    address: {
        street: {
            streetNo: 0,
            houseNo: 0,
        },
        city: "",
        zip: "",
    }
});

// Without immer and persistence, we would need to spread the state to update nested properties. See the documentation for more details.
// With immer, we can directly mutate the state without spreading

const updateName = (name: string) => {
    useUserStore.setState((state) => {
        state.name = name;
    });
};
const updateCity = (city: string) => {
    useUserStore.setState((state) => {
        state.address.city = city;
    });
};
const updateZip = (zip: string) => {
    useUserStore.setState((state) => {
        state.address.zip = zip;
    });
};
const updateHouseNo = (houseNo: number) => {
    useUserStore.setState((state) => {
        state.address.street.houseNo = houseNo;
    });
};
const updateStreetNo = (streetNo: number) => {
    useUserStore.setState((state) => {
        state.address.street.streetNo = streetNo;
    });
};

export const userActions = {
    updateName,
    updateCity,
    updateZip,
    updateHouseNo,
    updateStreetNo,
};

export const useUserStore = createImmerPersistStore<UserState>()(userStore, "user-store");


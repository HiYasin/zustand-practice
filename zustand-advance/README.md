## Store Creation

### Immutable generic store with immer (without persistence)
```typescript
export const createImmerStore = <storeType>() =>
    (store: StateCreator<storeType, [["zustand/immer", never]]>) =>
        create<storeType>()(
            immer(store)
        );
```

### Immutable generic store with immer + persistence (saves to localStorage)
```typescript
export const createImmerPersistStore = <storeType>() =>
    (store: StateCreator<storeType, [["zustand/immer", never]]>, name: string) =>
        create<storeType>()(
            devtools(
                persist(
                    immer(store),
                    {
                        name,
                    }
                )
            )
        );
```

## Define Your Store
```typescript
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
```

## Define Actions Explicitly

### Pattern 01: With immer immutation
This is the best practiced pattern. With immer, we can directly mutate the state without spreading.

```typescript
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
```
### Pattern 02: Without immer
Without immer and persistence, we would need to spread the state to update nested properties which is incredibly painful and error-prone.
```typescript
const setName = (name: string) => {
    useUserStore.setState((state) => ({
        ...state,
        name,
    }));
};
const setCity = (city: string) => {
    useUserStore.setState((state) => ({
        ...state,
        address: {
            ...state.address,
            city,
        },
    }));
};

const setStreetNo = (streetNo: number) => {
    useUserStore.setState((state) => ({
        ...state,
        address: {
            ...state.address,
            street: {
                ...state.address.street,
                streetNo,
            },
        },
    }));
};
```

## Usage
### Access values
```typescript
const { name, address, streetNo } = useUserStore(
    useShallow((state) => ({
        name: state.name,
        address: state.address,
        streetNo: state.address.street.streetNo,
    }))
);
```

### Access actions
```typescript
const { updateName, updateCity, updateZip, } = userActions;
const handleUpdate = () => {
    updateName("Faisal");
    updateCity("New York");
    updateZip("10001");
};
```
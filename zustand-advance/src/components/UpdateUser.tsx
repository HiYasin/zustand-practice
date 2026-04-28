import { userActions } from '@/store/store';
import { Button } from './ui/button'

export const UpdateUser = () => {
    const { updateName, updateCity, updateZip, updateHouseNo, updateStreetNo } = userActions;

    const handleUpdate = () => {
        updateName("Faisal");
        updateCity("New York");
        updateZip("10001");
        updateHouseNo(456);
        updateStreetNo(456);

    };
    return (
        <Button onClick={handleUpdate}>Update</Button>
    )
}

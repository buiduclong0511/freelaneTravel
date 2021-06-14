import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';

export const CheckBoxComponent = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <Checkbox
            checked={isChecked}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
    );
};
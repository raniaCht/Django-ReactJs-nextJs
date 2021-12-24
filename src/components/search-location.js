import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Wilayas } from '../lists/wilayas';

export const SearchLocation = ({ onChange, location }) => {
    const handlaNewLocation = (e) => {
        e.preventDefault()

    }
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={location}
                label="Age"
                onChange={handlaNewLocation}
            >
                <MenuItem value="">
                    <em>All Wilaya</em>
                </MenuItem>
                {Wilayas.map(wilaya => (<MenuItem value={wilaya}>{wilaya}</MenuItem>))}
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
    )
}
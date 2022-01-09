import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Wilayas } from '../lists/wilayas';

export const SearchLocation = ({ onChange, location, className }) => {
    const handlaNewLocation = (e) => {
        e.preventDefault()
        onChange(e)
    }
    return (
        <FormControl className={className} sx={{ my: 2, mx: 3, width: "90%" }}>
            <InputLabel id="select-wilaya-label">Wilaya</InputLabel>
            <Select
                labelId="select-wilaya-label"
                id="select-wilaya"
                value={location}
                label="Wilaya"
                name='wilaya'
                onChange={handlaNewLocation}
                color='secondary'
                fullWidth
            >
                <MenuItem value="All Willaya">
                    <em>All Wilaya</em>
                </MenuItem>
                {Wilayas.map(wilaya => (<MenuItem value={wilaya}>{wilaya}</MenuItem>))}
            </Select>
        </FormControl>
    )
}
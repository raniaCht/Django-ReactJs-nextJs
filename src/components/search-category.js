import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Caterories } from '../lists/categories';

export const SearchCategory = ({ onChange, category }) => {
    const handlaNewCategory = (e) => {
        e.preventDefault()
        onChange(e)
        console.log('category' + category);
    }
    return (
        <FormControl className='dz-fetes-select' sx={{ my: 2, mx: 3, width: "100%" }}>
            <InputLabel id="select-category-label">category</InputLabel>
            <Select
                labelId="select-category-label"
                id="select-category"
                value={category}
                label="category"
                name='category'
                onChange={handlaNewCategory}
                color='secondary'
                fullWidth
            >
                <MenuItem value="-1" >
                    <em>All categories</em>
                </MenuItem>
                {Caterories.map(item => (<MenuItem value={item}>{item}</MenuItem>))}
            </Select>
        </FormControl>
    )
}
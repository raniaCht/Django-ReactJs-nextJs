import SearchIcon from '@material-ui/icons/Search';
import { Search, StyledInputBase } from './search-components'
import { Button } from "@mui/material";
import { useState } from 'react';

export const SearchBox = ({ onSearch }) => {
    const [value, setValue] = useState("")
    return (
        <form
            className="services__box"
            onSubmit={e => {
                e.preventDefault()
                onSearch(value)
            }}
        >
            <Search className="services__box__input">
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    fullWidth
                />
            </Search>
            <Button type='submit' variant="outlined" color='secondary'>
                <SearchIcon />
            </Button>
        </form>
    )
}
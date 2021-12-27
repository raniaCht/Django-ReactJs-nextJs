import SearchIcon from '@material-ui/icons/Search';
import { Search, StyledInputBase } from './search-components'
import { Button } from "@mui/material";
import { useState } from 'react';
import Grid from "@material-ui/core/Grid";

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
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <Search className="services__box__input">
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={e => setValue(e.target.value)}
                            value={value}
                            fullWidth
                        />
                    </Search>
                </Grid>
                <Grid item xs={2}>
                    <Button type='submit' variant="outlined" color='secondary'>
                        <SearchIcon />
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
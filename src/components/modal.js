import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { SearchLocation } from "../components/search-location";
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

const Input = styled('input')({
    display: 'none',
});

export const Modal = ({ type, poste, concelMethod, confirmMethod, msgError, loading }) => {
    const [formData, setFormData] = useState(poste)
    const { title, wilaya, description, price, category, unit_price } = formData;

    const onsubmit = (e) => {
        e.preventDefault()
        confirmMethod(
            poste.id,
            { title, wilaya, description, price, category, unit_price }
        )
    }

    const onChange = (e) => (
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    )
    const Dialog = (
        <>
            <h2 className="title">Are you sure about delete this poste?</h2>
            <div className="footer">
                <Button onClick={() => concelMethod()} variant="outlined" color='error'>
                    Cancel
                </Button>
                <Button onClick={() => confirmMethod(poste.id, {})} variant="outlined" color='secondary'>
                    confirm
                </Button>
            </div>
        </>
    )

    const Form = (
        <>
            <Typography
                component="form"
                onSubmit={e => onsubmit(e)}
            >
                <Grid container>
                    <Grid item={true} md={12}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            color='secondary'
                            className="modal-input"
                            type='text'
                            placeholder='Title'
                            name='title'
                            value={title}
                            onChange={e => onChange(e)}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Category"
                            variant="outlined"
                            color='secondary'
                            className="modal-input"
                            type='text'
                            placeholder='Category'
                            name='category' value={category}
                            onChange={e => onChange(e)}
                            required
                            fullWidth
                        />
                        <SearchLocation className="modal-input" location={wilaya} onChange={onChange} />
                        <TextField
                            label="Price"
                            variant="outlined"
                            color='secondary'
                            type='number'
                            placeholder='0'
                            name='price'
                            value={price}
                            onChange={e => onChange(e)}
                            InputProps={{ inputProps: { min: 0, } }}
                            className="modal-input"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Unity Of rice"
                            variant="outlined"
                            color='secondary'
                            type='text'
                            placeholder='1Kg or 1Day or any unity used'
                            name='unit_price'
                            value={unit_price}
                            onChange={e => onChange(e)}
                            className="modal-input"
                            min='0'
                            fullWidth
                            required
                        />
                        <TextField
                            label="Description"
                            className="modal-input"
                            variant="outlined"
                            color='secondary'
                            placeholder='Description...'
                            name='description'
                            value={description}
                            onChange={e => onChange(e)}
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                    </Grid>
                </Grid>
                {
                    loading ? (
                        <LoadingButton
                            loading
                            color='secondary'
                            loadingPosition="start"
                            startIcon={<Save />}
                            variant="outlined"
                        >
                            Save
                        </LoadingButton>
                    ) : (
                        <Button
                            type='submit'
                            variant="outlined"
                            color='secondary'
                        >
                            Create
                        </Button>
                    )
                }
            </Typography>
        </>
    )

    return (
        <div className="modal-container">
            <div className="modal">
                <IconButton
                    className='close-modal-btn'
                    onClick={concelMethod}
                    aria-label="close"
                    color="default"
                >
                    <CloseIcon />
                </IconButton>
                {type == "DELETE" ? Dialog : Form}
            </div>
        </div>
    )
}
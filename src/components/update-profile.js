import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Router from 'next/router';

export const UpdateProfile = ({ owner, concelMethod }) => {
    const [formData, setFormData] = useState(owner)
    const [msgName, setMsgName] = useState('')
    const [msgEmail, setMsgEmail] = useState('')
    const [msgPhone, setMsgPhone] = useState('')
    const [msgDescription, setMsgDescription] = useState('')
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const {
        name, email, phone, description
    } = formData

    const saveUpdate = async () => {
        try {
            const res = await fetch("/api/ServiceOwner/update", {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, phone, description
                })
            })
            const data = await res.json()
            if (res.status === 200) {
                Router.reload(window.location.pathname)
            }
            if (res.status === 400) {
                setMsgName(data.error.name)
                setMsgEmail(data.error.email)
                setMsgPhone(data.error.phone)
                setMsgDescription(data.error.description)
            }
        } catch (error) {

        }
    }
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
                <TextField
                    label="Name"
                    variant="outlined"
                    type='text'
                    color={msgName === "" ? 'secondary' : 'error'}
                    placeholder='Name'
                    name="name" value={name}
                    onChange={e => onChange(e)}
                    className='login__container__card__input'
                    required
                    fullWidth
                    error={msgName === "" ? false : true}
                    helperText={msgName}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    color='secondary'
                    type='email'
                    placeholder='Example@example.com'
                    name="email" value={email}
                    onChange={e => onChange(e)}
                    className='login__container__card__input'
                    required
                    fullWidth
                    helperText={msgEmail}
                />
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    color='secondary'
                    type='tel'
                    placeholder='09 99 99 99 99'
                    name="phone" value={phone}
                    onChange={e => onChange(e)}
                    className='login__container__card__input'
                    fullWidth
                    required
                    helperText={msgPhone}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    color='secondary'
                    placeholder='Description...'
                    name="description" value={description}
                    onChange={e => onChange(e)}
                    className='login__container__card__input'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    helperText={msgDescription}
                />
                <Button onClick={() => saveUpdate()} variant="outlined" color='secondary'>
                    Save
                </Button>
            </div>
        </div>
    )
}
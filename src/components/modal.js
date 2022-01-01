import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const Modal = ({ type, poste, concelMethod, confirmMethod }) => {
    const Dialog = (
        <>
            <h2 className="title">Are you sure about delete this poste?</h2>
            <div className="footer">
                <Button onClick={() => concelMethod()} variant="outlined" color='error'>
                    Cancel
                </Button>
                <Button onClick={() => confirmMethod(poste.id)} variant="outlined" color='secondary'>
                    confirm
                </Button>
            </div>
        </>
    )

    const Form = (
        <>
            <h2>Update Poste</h2>
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
                {type == "delete" ? Dialog : Form}
            </div>
        </div>
    )
}
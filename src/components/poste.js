import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import { API_URL } from "../config";

const ITEM_HEIGHT = 48;
export const Poste = ({ poste, handleClose }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className="post" key={poste.id}>
            <div >
                <IconButton
                    className="post__edit"
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    <MenuItem key="Modify" id="modify-poste" onClick={(e) => handleClose(e, setAnchorEl, poste.id)} >
                        Modify
                    </MenuItem>
                    <MenuItem key="Delete" id="detele-poste" onClick={(e) => handleClose(e, setAnchorEl, poste.id)}>
                        Delete
                    </MenuItem>
                </Menu>
            </div>
            <h1 className="post__title">{poste.title}</h1>
            <span className="post__desciption">
                {poste.description}
            </span>
            <div className="post__image">
                <img src={`${API_URL}${poste.photo_main}`} />
            </div>
        </div>
    )
}
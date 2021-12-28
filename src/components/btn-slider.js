import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export const BtnSlider = ({ direction, moveSlide }) => {
    return (
        <button
            className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}
            onClick={moveSlide}
        >
            {/* <img */}
            {/* src= */}{direction === "next" ? <KeyboardArrowRight className="icon-button" /> : <KeyboardArrowLeft className="icon-button" />}
            {/* /> */}
        </button>
    )
}

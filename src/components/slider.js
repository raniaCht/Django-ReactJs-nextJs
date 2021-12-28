import { useState } from 'react'
import { SliderData } from '../lists/slider-data'
import { BtnSlider } from './btn-slider'

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== SliderData.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === SliderData.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(SliderData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {SliderData.map((item, index) => {
                return (
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={item.id}>
                        <img
                            src={`/images/img${index + 1}.jpg`}
                        />
                        <h3 className="slide-title">{item.title}</h3>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction="next" />
            <BtnSlider moveSlide={prevSlide} direction="prev" />
            <div
                className="container-dots"
            >
                {Array.from({ length: 4 }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            moveDot(index + 1)
                        }}
                        className={
                            slideIndex === index + 1 ? "dot active" : "dot"
                        }
                    ></div>
                ))}
            </div>
        </div>
    )
}

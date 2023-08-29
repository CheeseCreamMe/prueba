import React, { useState } from 'react';
export function Bottons(props) {

}
export function LinkLabel(props) {

}
export function TittleText(props) {

}
export function HoverBotton(props) {

}
export function Parragraph(props) {

}
export function ColumnText(props) {

}
export function Image(props) {

}
export function ScrollToTop(){
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (

        <button className="scrollTop" onClick={scrollTop} style={{ visibility: showScroll ? 'visible' : 'hidden' }}>
            scroll
        </button>
    );
}
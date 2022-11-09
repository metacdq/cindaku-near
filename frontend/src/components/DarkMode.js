
export default function DarkMode({}){
    return (
        <div className="darkmode-trigger uk-position-bottom-right uk-position-small uk-position-fixed uk-box-shadow-large uk-radius-circle" data-darkmode-toggle="">
        <label className="switch">
            <span className="sr-only">Dark mode toggle</span>
            <input type="checkbox"/>
            <span className="slider"></span>
        </label>
    </div>
    )
}
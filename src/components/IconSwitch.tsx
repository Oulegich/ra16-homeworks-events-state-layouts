const IconSwitch = ({ icon, onSwitch }: IIconSwitch) => {
    return (
        <div className="icon-switch-container">
            <button className="icon-switch-btn" type="button"
                onClick={onSwitch}>
                <span className="material-icons icon-switch">{icon}</span>
            </button>
        </div>
    )
}

export default IconSwitch;
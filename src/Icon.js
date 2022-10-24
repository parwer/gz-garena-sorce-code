import './Icon.css'
function Icon(props) {
    const { data, Click } = props;
    return (
        <div className="icon-box">
            <img src={data.icon} alt={data.name} onClick={() => Click(data)}/>
        </div>
    )
}

export default Icon;
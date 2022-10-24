import './HeaderIcon.css';

function HeaderIcon(props) {
    const { data, Click } = props;

    const Genre = data.genre.map((genre, index) => {
        return <p key={index}>{genre}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    })

    return (
        <div className="header-icon-box">
            <img src={data.icon} alt={data.name} onClick={() => Click(data)}/>
            <div className="text-header">
                <h2>{data.name} <br/> {Genre}</h2>
            </div>
        </div>
    )
}

export default HeaderIcon;
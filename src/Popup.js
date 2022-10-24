import "./Popup.css"

function Popup(props) {
    const { data, Click } = props;

    const Genre = data.genre.map((genre, index) => {
        return <p key={index}>{genre}</p>
    })

    return (
        <div className="popup">
            <div className="popup-bg" onClick={Click}>
            <div className="popup-content" icon={data.icon}>
                <p id="spec">Post by <a href="https://www.facebook.com/patiput.ukha/" target="_blank" rel="noreferrer">Patiput Ukham</a></p>
                <img src={data.icon} alt={data.name}/>
                <div className="desc">
                    <h2>{data.name}</h2>
                    <hr/>
                    {Genre}
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.description}</p>
                    
                </div>
            </div>
                
            </div>
        </div>
    )
}


export default Popup;
import './Card.css'
const Card=(props)=>{
    return(
    <>
    
    <div className="cards">
        <div className="card">
            <img src={props.img} alt="pic" className="card_img" />
            <div className="card_info">
                
                <h3 className="card_title">{props.title} </h3>
                <span className="card_category"></span>{props.description} <br/>
                <h3>{props.price} </h3>
                <a href="" target="_blank">
                    <button>Add to card</button>
                </a>
            </div>
        </div>
    </div>
    
    </>
    )
};
export default Card;
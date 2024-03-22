import img from "../assets/images/image.jpg"

function Image()
{
    return(
        <div className="image">
        <img src={img} alt="title image" loading="lazy"></img>
        <div className="sales">
            <h1>Udemy Flash sale! 24hrs to save.</h1>
            <p>Get the top course for just 499... Just one day to save but lifetime to learn</p>
        </div>

    </div>
    )
}

export default Image
import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"
import four from "../assets/images/4.jpg"
import five from "../assets/images/5.jpg"
import six from "../assets/images/6.jpg"
import seven from "../assets/images/7.jpg"
import eight from "../assets/images/8.jpg"

function Popular()
{
    return(
        <div class="popular">
        <h1>Popular Recommended </h1>
        <p>Pick the best</p>
        <div class="popular-container">

            <div class="popular-image">
                <img src={one} alt="course-image" loading="lazy"></img>
                <h3> Web Developer course</h3>
                <p>Rob percival</p>
                <p>4.6 ⭐⭐⭐⭐(20,344)</p>
                <p>₹4,299 <del>8000</del></p>
            </div>
            <div class="popular-image">
                <img src={two} alt="course-image" loading="lazy"></img>
                <h3>Ultimate Web Designer</h3>
                <p>Brad Hussey</p>
                <p>4.6 ⭐⭐⭐⭐(85,762)</p>
                <p>₹3,799 <del>6999</del></p>
            </div>
            <div class="popular-image">
                <img src={three} alt="course-image" loading="lazy"></img>
                <h3>CSS, Bootstrap, Javascript</h3>
                <p>Stephen Grider</p>
                <p>4.5 ⭐⭐⭐⭐(3,776)</p>
                <p>₹2,999 <del>3499</del></p>
            </div>
            <div class="popular-image">
                <img src={four} alt="course-image" loading="lazy"></img>
                <h3>Complete Android Developer Course</h3>
                <p>Rob Pervical</p>
                <p>4.3 ⭐⭐⭐⭐(5,285)</p>
                <p>₹2,499 <del>9000</del></p>
            </div>

            <div class="popular-image">
                <img src={five} alt="course-image" loading="lazy"></img>
                <h3>The complete Kotlin course</h3>
                <p>Anushkha Madusanka</p>
                <p>4.5 ⭐⭐⭐⭐(9,579)</p>
                <p>₹3,099 <del>7000</del></p>
            </div>
            <div class="popular-image">
                <img src={six} alt="course-image" loading="lazy"></img>
                <h3>IOS & Swift complete ios</h3>
                <p>Rolan Marat</p>
                <p>3.7 ⭐⭐⭐(744)</p>
                <p>₹499 <del>2999</del></p>
            </div>
            <div class="popular-image">
                <img src={seven} alt="course-image" loading="lazy"></img>
                <h3>Modern React 2024</h3>
                <p>Stephen Grider</p>
                <p>4.7 ⭐⭐⭐⭐(27,992)</p>
                <p>₹3,499 <del>8499</del></p>
            </div>
            <div class="popular-image">
                <img src={eight} alt="course-image" loading="lazy"></img>
                <h3>Node with React</h3>
                <p>Dr.Sahand Ghadivel</p>
                <p>4.7 ⭐⭐⭐⭐(14,668)</p>
                <p>₹2,899 <del>7000</del></p>
            </div>

        </div>
    </div>
    )
}

export default Popular
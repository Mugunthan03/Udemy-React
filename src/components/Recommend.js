import a from "../assets/images/a.jpg"
import b from "../assets/images/b.jpg"
import c from "../assets/images/c.jpg"
import d from "../assets/images/d.jpg"

function Recommend()
{

    return(
        <div class="recommended" id="courses">
        <h1>Recommended For You</h1>
        <p>Pick the best site</p>

        <div class="image-container">

            <div class="card">
                <img src={a} alt="couse-image" loading="lazy"></img>
                <h3>The complete Javascript course</h3>
                <p>Hemanth kumar</p>
                <p>4.7 ⭐⭐⭐⭐(205,344)</p>
                <p>₹3,499 <del>8000</del></p>
                <p class="course-card__best">Best seller</p>
            </div>
            <div class="card">
                <img src={b} alt="couse-image" loading="lazy"></img>
                <h3>Learn CSS-For Beginners</h3>
                <p>Kiran Gavali</p>
                <p>3.9 ⭐⭐⭐(4,556)</p>
                <p>₹799 <del>2999</del></p>
            </div>
            <div class="card">
                <img src={c} alt="couse-image" loading="lazy"></img>
                <h3>React Developer Course</h3>
                <p>Stephen Grider</p>
                <p>4.5 ⭐⭐⭐⭐(4,778)</p>
                <p>₹2,999 <del>3499</del></p>
            </div>
            <div class="card">
                <img src={d} alt="couse-image" loading="lazy"></img>
                <h3>The Web Developer Bootcamp 2024</h3>
                <p>Dr.Angela Au</p>
                <p>4.7 ⭐⭐⭐⭐(4,370)</p>
                <p>₹3,499 <del>7000</del></p>
            </div>


        </div>

    </div>
    )
}

export default Recommend
function Header() {
  return (
    <div className="header">
      <div className="header-s1">
        <h1>Udemy</h1>
      </div>

      <div className="header-s2">
        <i className="fa-solid fa-magnifying-glass" style={{color: "#0d0c0d"}}></i>
        <input placeholder="Search For Anything here. Tech, buinsess, Art"></input>
      </div>

      <div className="header-s3">
        <p>
          <a href="#courses">Courses</a>
        </p>

        <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
            You did not purchase Anything yet!
          </div>
        </div>
      </div>
      <i className="fa-solid fa-cart-shopping" style={{color: "#0c0d0d"}}></i>
      <i className="fa-solid fa-bell" style={{color: "#0c0d0d"}}></i>
      <i className="fa-solid fa-user" style={{color: "#050505"}}></i>
    </div>
  )
}

export default Header;
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="#" className="logo">F<span>oo</span>die</a>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Recipe</a>
          <a href="#">Settings</a>
        </div>

        <div className="sidebar-btn active">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            
        </div>
      </div>
    </>
  );
};

export default Navbar;

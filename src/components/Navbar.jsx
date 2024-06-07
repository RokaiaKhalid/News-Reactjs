
const Navbar = ({setCategory}) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-ds-theme="dark">
  <div className="container-fluid container">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Techno</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="ri-menu-3-line text-3xl"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link text-white" onClick={() => setCategory("Technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white" onClick={() => setCategory("Business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white" onClick={() => setCategory("Health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white" onClick={() => setCategory("Sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-white" onClick={() => setCategory("Entertainment")}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar

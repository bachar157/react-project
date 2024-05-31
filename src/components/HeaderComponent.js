// Header component
function HeaderComponent({ siteTitle, homeLabel, aboutLabel, contactLabel }) {
  return (
    <header>
      <div className="content-box">
        <h1>{siteTitle}</h1>
        <nav>
          <ul className="flex space-between gap-20">
            <li><a href="#">{homeLabel}</a></li>
            <li><a href="#">{aboutLabel}</a></li>
            <li><a href="#">{contactLabel}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;

// Importing the Button component
import CustomButton from "./CustomButton";

// Banner component
function BannerComponent({ message1, message2 }) {
  // Define button styles
  const mainButtonStyle = "main-btn";
  const altButtonStyle = "alt-btn";

  // User login status
  const userAuthenticated = true;

  return (
    <section className="banner-area">
      <div className="content-box">
        <div className="text-area">
          <p className="banner-message">{message1}</p>
          <p className="banner-message">{message2}</p>
        </div>
        <CustomButton style={mainButtonStyle} isLoggedIn={userAuthenticated} />
        <CustomButton style={altButtonStyle} isLoggedIn={userAuthenticated} />
      </div>
    </section>
  );
}

export default BannerComponent;

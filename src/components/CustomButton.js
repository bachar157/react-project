// Button component
function CustomButton({ style, isLoggedIn }) {
  return (
    <button className={style}>
      {isLoggedIn ? "Welcome Back" : "Sign Up"}
    </button>
  );
}

export default CustomButton;

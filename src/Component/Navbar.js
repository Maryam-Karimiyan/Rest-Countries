const Navbar = () => {
  const handlelightdark = () => {
    const icon = document.querySelector("#icon");
    icon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        icon.src = "../images/sun.png";
      } else {
        icon.src = "../images/moon.png";
      }
    };
  };
  return (
    <nav>
      <h1>Where in the world?</h1>
      <button onClick={handlelightdark}>
        <img src="../images/moon.png" id="icon" alt=""/>
        <span>Light Mode</span>
      </button>
    </nav>
  );
};

export default Navbar;

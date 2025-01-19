interface Menu {
  display: string;
  fontSize: string;
  marginX?: string;
}
const Nav: React.FC<Menu> = ({ display, marginX, fontSize }) => {
  const nav = ["Home", "Benefits", "Our Classes", "Contact Us"];
  return (
    <>
      <nav>
        <ul>
          {nav.map((navBarr) => (
            <li
              className="cursor-pointer font-montserrat mx-2 text-sm text-mainTextColor hover:text-[#bd918f] transition-all duration-500"
              style={{
                display: display,
                marginTop: marginX,
                marginBottom: marginX,
                fontSize: fontSize,
              }}
              key={Math.random()}
            >
              {navBarr}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;

import classes from "./Navbar.module.css";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "./NavbarSearch";
import NavbarNoUserField from "./NavbarNoUserField";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className={classes["navbar"]}>
      <div className={classes["navbar-top"]} />
      <div className={classes["navbar-inner"]}>
        <NavbarMenu />
        <Logo></Logo>
        <NavbarLinks />
        <NavbarSearch />
        <NavbarNoUserField />
      </div>
    </nav>
  );
}

import classes from "./Navbar.module.css";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "./NavbarSearch";
import NavbarNoUserField from "./NavbarNoUserField";
import NavbarMenu from "./NavbarMenu";
import { useAuth } from "../../hooks/useAuth";
import NavbarUserField from "./NavbarUserField";

export default function Navbar() {
  const { user, logout, hasToken } = useAuth();

  return (
    <nav className={classes["navbar"]}>
      <div className={classes["navbar-top"]} />
      <div className={classes["navbar-inner"]}>
        <NavbarMenu />
        <Logo></Logo>
        <NavbarLinks />
        <NavbarSearch />
        {!user ? (
          hasToken() ? (
            <NavbarUserField />
          ) : (
            <NavbarNoUserField />
          )
        ) : (
          <NavbarUserField user={user} onLogout={logout} />
        )}
      </div>
    </nav>
  );
}

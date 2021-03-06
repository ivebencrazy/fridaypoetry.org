import { Nav, NavItem } from "@zuck/core";
import * as React from "react";


export default function NavBar(props) {
  const today = new Date();
  const isFriday = today.getDay() === 5;

  const isHome =
    props.path !== "/typewriter" &&
    props.path !== "/settings" &&
    props.path !== "/about";


  const homeHref = isHome ? "/about" : "/";

  const fridayMessage = (
    <NavItem
      activeClassName="active"
      className="friday-message"
      href="/typewriter">
      It's Friday! Write a poem!
    </NavItem>
  );

  return (
    <Nav>
      <NavItem
        activeClassName="active"
        href={ (isHome && isFriday) ? "/typewriter" : homeHref }>
        { isHome ? "FridayPoetry.org" : "back" }
      </NavItem>
      { isHome && isFriday ? fridayMessage : "" }
    </Nav>
  );
}

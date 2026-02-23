
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
export default function NavbarComponent() {
  return (
    
    <Navbar fluid rounded>
      <NavbarBrand href="">
        <img src="../public/logo-project.jpg" className="mr-3 h-6 sm:h-9" alt="techLogo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KHDemy</span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-4 grid-row">
        <Button href="/login">Login</Button>
        
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

import { Outlet } from "react-router";
import  {FooterComponent} from "../footer/FooterComponent";
import NavbarComponent from "../Navbar/NavbarComponent";

export default function RootLayout() {
    return(
    <div className='flex flex-col h-screen'>
      <NavbarComponent/>
      <div className='grow'>
        <Outlet/>
      </div>
      <FooterComponent/>
    </div>
    )
}
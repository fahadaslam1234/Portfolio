import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
import logo from "../assets/logo1.webp"
const Navbar = () => {
  return (
     <nav className="flex items-center justify-between">
       <div className="flex flex-shrink-0 items-center">
         <a href="/" aria-label="Home">
           <img src={logo} className="mx-2" width={70} height={40} alt="Logo" />
         </a>
       </div>

       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/rao-fahad-aslam-b69a91155/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
         >
          <FaLinkedin />
         </a>

         <a href="https://github.com/fahadaslam1234"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
         >
          <FaGithub />
         </a>
         <a href="https://www.instagram.com/faa_di/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
         >
          <FaInstagram />
         </a>

         <a href="https://x.com/RaoFahadAslam2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
         >
          <FaSquareXTwitter />
         </a>


       </div>
     </nav>
  )
}

export default Navbar
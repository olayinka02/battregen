// app/about/page.js

import HeroSection3 from "../components/herosection3";
import Navbar from "../components/Navbar";
import welcomeimage from "../assets/welcomeimage.svg";
import Advantage from "../components/advantages";
import propietaryimage from "../assets/propietaryimage.svg";
import bullet from "../assets/bullet.svg";
import Role from "../components/role"
import Gallery from "../components/gallery";
import Footer from "../components/footer";



export default function Career() {
  return (
    <div>
     <Navbar/>
     <HeroSection3
        heroTitle="Ready to live your dream?"
        paragraph="Come join a team that's redefining the financial experience for millions of people in emerging markets.."
       
        buttonOne={{ text: "CONTACT US", link: "/" }}
       
        headercolor="brandblack"
      />
     
        <Role 
        />
        
      <Gallery 
      buttonOne={{ text: "VIEW GALLERY", link: "/gallery" }}
      />
      <Footer />

    </div>
  );
}

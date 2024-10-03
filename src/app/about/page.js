// app/about/page.js

import HeroSection from "../components/herosection";
import Navbar from "../components/Navbar";
import heroimage from "../assets/heroimage.png";
import Advantage from "../components/advantages";
import propietaryimage from "../assets/propietaryimage.svg";
import bullet from "../assets/bullet.svg";



export default function About() {
  return (
    <div>
     <Navbar/>
     <HeroSection
        heroTitle="Exceptional Battery Reconditioning for Reliable, Long-Lasting Performance "
        paragraph="Our Mission is to play a key role in sustainable energy future by revitalizing used batteries and promoting environmental responsibility."
        imageSrc={heroimage}
        buttonOne={{ text: "CONTACT US", link: "/Footer" }}
       
        headercolor="brandblack"
      />
      <Advantage
          welcomeTitle={
             "Advantages of Battregen Additive & Capsulate:"
             
          }
          subhead={<span className="leading-3">Our mission is to recondition batteries sustainably, streamline maintenance, recycle materials, 
          and reduce the costs associated with the upkeep of electric micro-mobility vehicles and industrial mover batteries.</span>
          }
      
          
          imageSrc={propietaryimage}
        
          
        />
    </div>
  );
}

import HeroSection from "@/components/Hero-Section/HeroSection";
import Navbar from "@/components/Root-Navbar/Navbar";


export default function Home(){
    return(
        <div>
        <Navbar />
        <h1 className="text-3xl text-center font-serif my-10">Attari Collection</h1>
        <HeroSection />
    </div>
    )
}
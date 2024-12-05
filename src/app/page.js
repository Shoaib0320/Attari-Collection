import HeroSection from "@/components/Hero-Section/HeroSection";
import Navbar from "@/components/Root-Navbar/Navbar";
import { auth } from "./auth";
import Slider from "@/components/Slider/Slider";
import ProductSlider from "@/components/Slider/ProductSlider";
import Footer from "@/components/Footer/Footer";

export default async function Home(){
    const session = await auth();

    return(
        <div>
        {/* <Navbar /> */}
        <Navbar session={session} />
        <h1 className="text-3xl text-center font-serif my-10">Attari Collection</h1>
        <HeroSection />
        <ProductSlider />
        <br />
        <Footer />
    </div>
    )
}

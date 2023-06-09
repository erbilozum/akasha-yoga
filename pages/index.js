import {Inter} from "next/font/google";
import Header from "@/components/header";
import About from "@/components/about";
import Comments from "@/components/comments";
import Prices from "@/components/prices";
import Classroom from "@/components/classroom";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Homepage from "@/components/homepage";
import Youtube from "@/components/youtube";
import Store from "@/components/store";
import Schedule from "@/components/schedule";
import Sidebar from "@/components/sideBar";
import {useEffect} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    //zsdfasdf
    //
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);
    return (
        <main className="flex flex-col min-h-screen top-0  bg-[url('/carousel/banner-bg.jpg')] ">
            <Header/>
            <Homepage/>
            <Sidebar/>
            <About/>
            <Comments/>
            <Prices/>
            <Classroom/>
            <Schedule/>
            <Youtube/>
            <Store/>
            <Contact/>
            <Footer/>
        </main>
    );
}

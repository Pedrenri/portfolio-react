
import { Banner } from "@/components/banner";
import NavBar from "@/components/navbar";
import { Skills } from "@/components/skills";

export default function Home() {
  
  return (
    <div className="relative  w-full">
        <NavBar />
        <Banner />
        <Skills />
    </div>
  );
}

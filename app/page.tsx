import { Banner } from "@/components/banner";
import { Contact } from "@/components/contact";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="relative  w-full">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

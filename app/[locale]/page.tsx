import { Banner } from "@/components/banner";
import { Contact } from "@/components/contact";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Products from "@/components/products";
import Projects from "@/components/projects";
import Projects_tabs from "@/components/projects_tabs";
import { Skills } from "@/components/skills";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";

export default function Home() {
  return (
    <div className="relative  w-full">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

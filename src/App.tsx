import { Hero } from "@/components/sections/hero/hero.tsx";
import { AboutMe } from "@/components/sections/about-me/about-me.tsx";
import { Education } from "@/components/sections/education/education.tsx";
import { Experience } from "@/components/sections/experience/experience.tsx";
import { Projects } from "@/components/sections/projects/projects.tsx";
import { Activities } from "@/components/sections/activities/activities.tsx";
import { Contact } from "@/components/sections/contact/contact.tsx";
import { Footer } from "@/components/layout/footer.tsx";
import { Navbar } from "@/components/layout/navbar.tsx";

function App() {
  return (
    <div className="App">
      <div className="w-auto pb-4 bg-slate-50">
        <Navbar />
        <main>
          <Hero loop={true} holdDelay={3000} />

          <div className="bg-coded-grid min-h-screen flex flex-col justify-center py-20 gap-12">
            <AboutMe />
            <Education />     
            <Experience />
            <Projects />
          </div>

          <div>
            <Activities />
          </div>

          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

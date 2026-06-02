import { Hero } from "./Sections/HeroSection/index.js";
import Card from "./components/Card.jsx";
import Profile from "./components/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import Skill from "./components/Skill.jsx";
import Education from "./components/Education.jsx";
import {
  Tilt,
  TiltContent,
} from "@/components/animate-ui/primitives/effects/tilt";

import starterpackpic from "./assets/Starterpack.jpg";
import helloworldpic from "./assets/Helloworld.jpg";
import uxworkshoppic from "./assets/UXWorkshop.jpg";


const projects = [
  {
    image: starterpackpic,
    title: "IT#29 - IT#30 Starterpack",
    description:
      "A starter pack camp for SIT freshy. I participated in the camp as an IT Fundamental Speaker teaching and making slides on Learning How To Learn, 21st Century Skills, Design Thinking, Business, and other related to IT.",
    alt: "Starterpack30",
  },
  {
    image: helloworldpic,
    title: "SIT HelloWorld-Fennec",
    description:
      "A project camp for SIT freshy. I participated in the camp as a participant. I learned how to work in a team and how to manage web development the project. I also learned how to use React for front-end development.",
    alt: "HelloWorld-Fennec",
  },
  {
    image: uxworkshoppic,
    title: "UX Workshop: Digital Experience Strategy",
    description:
      "Participated in UX Workshop by UX Association company. Learning how to analysis User Painpoint and find solution form this workshop. I'm doing UX solution quiz at the end of the course and got an honorable mention award.",
    alt: "UX Workshop",
  },
];

function App() {
  return (
    <div className="App">
      <div className="w-auto pb-4 bg-slate-50 bg-none border-white/10">
        <Navbar />
        <main>
          <div id="home">
            <Hero loop={true} holdDelay={3000} />
          </div>

          <div
            className="flex justify-center h-screen items-center"
            id="profile"
          >
            <div>
              <Tilt>
                <TiltContent>
                  <div className="flex justify-center">
                    <Profile />
                  </div>
                </TiltContent>
              </Tilt>
              <div className="m-10 flex">
                <Skill />
                <Education />
              </div>
            </div>
          </div>

          <div
            className="flex justify-center h-screen items-center"
            id="activities"
          >
            <div className="container mx-auto px-6">
              <div className="text-4xl font-bold my-8 text-center">
                My Activities
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((item, index) => (
                  <Card
                    key={index}
                    imageSrc={item.image}
                    altText={item.alt}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

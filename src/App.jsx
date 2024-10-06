import Card from "./components/Card";
import Profile from "./components/Profile";
import ThemeIcon from "./components/ThemeIcon";
import Navbar from "./components/Navbar";

import starterpackpic from "./assets/Starterpack.jpg";
import helloworldpic from "./assets/Helloworld.jpg";
import uxworkshoppic from "./assets/UXWorkshop.jpg";

function App() {
  return (
    <div className="App">
      <div className="w-auto">
        <div className="m-5 fixed">
          <ThemeIcon theme="business" />
        </div>
        <div>
          <Navbar />
        </div>
        <div class="flex justify-center">
          <Profile />
        </div>
        <div class="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              imageSrc={starterpackpic}
              altText="Starterpack30"
              title="IT#29 - IT#30 Starterpack"
              description="A starter pack camp for SIT freshy. I participated in the camp as an IT Fundamental Speaker teaching and making slides on Learning How To Learn, 21st Century Skills, Design Thinking, Business, and other related to IT."
            />

            <Card
              imageSrc={helloworldpic}
              altText="HelloWorld-Fennec"
              title="SIT HelloWorld-Fennec"
              description="A project camp for SIT freshy. I participated in the camp as a participant. I learned how to work in a team and how to manage web development the project. I also learned how to use React for front-end development."
            />

            <Card
              imageSrc={uxworkshoppic}
              altText="UX Workshop"
              title="UX Workshop: Digital Experience Strategy"
              description="Participated in UX Workshop by UX Association company. Learning how to analysis User Painpoint and find solution form this workshop. I'm doing UX solution quiz at the end of the course and got an honorable mention award."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

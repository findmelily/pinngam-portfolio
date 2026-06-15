import { Hero } from "@/components/sections/Hero/index.tsx";
import { Aboutme } from "@/components/sections/Aboutme/index.tsx";
import { Activities } from "@/components/sections/Activities/index.tsx";
import { Footer } from "@/components/sections/Footer/index.tsx";
import { Navbar } from "@/components/Navbar.tsx";
function App() {
  return (
    <div className="App">
      {/* <StarsBackground
        starColor="#78350f"
        className="!fixed !inset-0 !-z-10 !bg-transparent !overflow-visible pointer-events-none"
        pointerEvents={false}
      > */}
      <div className="w-auto pb-4 bg-slate-50">
        <Navbar />
        <main>
          <Hero loop={true} holdDelay={3000} />

          <div className="bg-[url('/src/assets/bgGrid.png')] h-screen flex items-center justify-center">
            <Aboutme />
          </div>

          <div>
            <Activities />
          </div>
        </main>
        <Footer />
      </div>
      {/* </StarsBackground> */}
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Camera from "./components/Camera";
import Transcript from "./components/Transcript";
import Footer from "./components/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex">
        <Camera />
        <Transcript />
      </div>
      <Footer />
    </div>
  );
}

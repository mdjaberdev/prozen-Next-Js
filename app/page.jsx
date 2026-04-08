import About from "./layouts/About";
import Banner from "./layouts/Banner";
import OurteamMember from "./layouts/OurteamMember";
import Selected_works from "./layouts/Selected_works";
import Service from "./layouts/Service";
import Tastmonial from "./layouts/Tastmonial";
import Workingprocess from "./layouts/Workingprocess";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Service/>
      <About/>
      <Selected_works/>
      <Workingprocess/>
      <OurteamMember/>
      {/* <Tastmonial/> */}
    </div>
  );
}

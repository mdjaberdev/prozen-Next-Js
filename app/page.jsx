import About from "./layouts/About";
import Banner from "./layouts/Banner";
import Selected_works from "./layouts/Selected_works";
import Service from "./layouts/Service";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Service/>
      <About/>
      <Selected_works/>
    </div>
  );
}

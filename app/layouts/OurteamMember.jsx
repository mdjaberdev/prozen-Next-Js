
"use client"
import Tmember from '../[components]/Tmember';
import Tmemeberapi from '../[components]/api/Tmemberapi'



const OurteamMember = () => {
 
  return (
    <section className="my-[130px]">
      <div className="text-center uppercase">
        <h4 className="text-[#F75709] text-base font-semibold font-Oswald">
          Our Team members
        </h4>
        <h3 className="text-[#063231] text-[60px] font-semibold font-Oswald px-[450px] leading-[66px] -tracking-[1.2]">
          Get consulting from our best consultants
        </h3>
      </div>
      <div className="flex justify-center gap-x-3 mt-7.5">
        {Tmemeberapi.map((item) => (
          <Tmember
            key={item.id}
            memberImg={item.Image}
            memberNam={item.name}
            position={item.position}
          />
        ))}
      </div>
      
    </section>
  );
}

export default OurteamMember

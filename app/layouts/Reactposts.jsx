import React from 'react'
import Rposts from '../[components]/Rposts';
import Container from '../[components]/Container';

const Reactposts = () => {
  return (
    <section className="my-32.5">
      <div className="text-center uppercase">
        <h4 className="text-[#F75709] text-base font-semibold font-Oswald">
          recent posts
        </h4>
        <h3 className="text-[#063231] text-[60px] font-semibold font-Oswald px-125 leading-16.5 -tracking-[1.2]">
          Read our latest news and articles
        </h3>
      </div>
      <div className="mt-12.75">
        <Container>
          <div className="flex gap-x-3">
            <Rposts
              Img={"/rpostsOne.png"}
              date={"June 16, 2024"}
              grp={"Business"} title={"Building Your Own Personal Learning Curriculum"}
            />
            <Rposts
              Img={"/rpostsTwo.png"}
              date={"June 16, 2024"}
              grp={"Business"} title={"Seven Mistakes to Avoid in Your Technical Interviews"}
            />
            <Rposts
              Img={"/rpostsThree.png"}
              date={"June 16, 2024"}
              grp={"Business"} title={"Why Collaborative Coding is The Ultimate Career Hack"}
            />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Reactposts

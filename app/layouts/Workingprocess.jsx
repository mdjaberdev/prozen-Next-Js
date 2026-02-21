import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex';

const Workingprocess = () => {
  return (
    <div className='bg-[url("/workprosessbg.png")] bg-no-repeat bg-cover bg-center py-32 relative'>
      <Container>
        <div className="text-center font-bold font-Oswald uppercase">
          <h4 className="text-[#F75709] text-base">Working process</h4>
          <h3 className="text-white text-[60px] px-87.5 leading-16.5 -tracking-[1.2px]">
            We make things easy for you to start
          </h3>
        </div>
        <div className="w-324 h-px bg-[#294F4E] absolute top-[48%]  left-1/2 -translate-x-1/2 "></div>
        <Flex className={"justify-center gap-x-30 mt-13.75"}>
          {/*step One  */}
          <div className="text-center">
            <div className="h-11.25 w-25 bg-[#C3DF94] py-3 px-5.5 rounded-xl flex  items-center justify-center mx-auto">
              <span className="text-[#063231] text-[18px] uppercase font-semibold font-Oswald ">
                step 01
              </span>
            </div>
            <div className="h-25 w-px bg-[#294F4E] mx-auto"></div>
            <div className="mt-10 ">
              <h4 className="text-white text-[28px] font-bold font-Oswald uppercase">
                Onboarding
              </h4>
              <p className="text-white text-base font-Oswald w-56.25 leading-7.5">
                Initial consultations to identify the client's goals and
                challenges.
              </p>
            </div>
          </div>
          {/* steo two  */}
          <div className="text-center">
            <div className="h-11.25 w-25 bg-[#C3DF94] py-3 px-5.5 rounded-xl flex  items-center justify-center mx-auto">
              <span className="text-[#063231] text-[18px] uppercase font-semibold font-Oswald ">
                step 01
              </span>
            </div>
            <div className="h-25 w-px bg-[#294F4E] mx-auto"></div>

            <div className="mt-10 ">
              <h4 className="text-white text-[28px] font-bold font-Oswald uppercase">
                Planning
              </h4>
              <p className="text-white text-base font-Oswald w-[225px] leading-7.5">
                Initial consultations to identify the client's goals and
                challenges.
              </p>
            </div>
          </div>
          {/* steo three  */}
          <div className="text-center">
            <div className="h-11.25 w-25 bg-[#C3DF94] py-3 px-5.5 rounded-xl flex  items-center justify-center mx-auto">
              <span className="text-[#063231] text-[18px] uppercase font-semibold font-Oswald ">
                step 01
              </span>
            </div>
            <div className="h-25 w-px bg-[#294F4E] mx-auto"></div>
            <div className="mt-10 ">
              <h4 className="text-white text-[28px] font-bold font-Oswald uppercase">
                Implementation
              </h4>
              <p className="text-white text-base font-Oswald w-56.25 leading-7.5">
                Initial consultations to identify the client's goals and
                challenges.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Workingprocess

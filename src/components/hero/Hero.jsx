import { discount, robot } from "../../assets";
import styles from "../../style";
import { GetStarted } from "../getStarted";

export const Hero = () => {
  return (
    <section
      id="home"
      className={`flex  md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center bg-discount-gradient py-[6px] px-4 rounded-[10px] mb-2`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white"> 20%</span> DISCOUNT FOR
            <span className="text-white ml-1">1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1  font-poppins font-semibold ss:text-[72px] text-[44px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="flex-1  font-poppins font-semibold ss:text-[72px] text-[44px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink-gradient"></div>
        <div className="absolute z-1 w-[80%] h-[80%] bottotm-40 white-gradient rounded-full"></div>
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue-gradient"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted/>
      </div>
    </section>
  );
};
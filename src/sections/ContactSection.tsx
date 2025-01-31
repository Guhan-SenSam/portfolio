import { AwesomeButton } from 'react-awesome-button';
import Spline from '@splinetool/react-spline';

export const ContactSection = () => {

  return (
    <section className="w-screen overflow-hidden bg-surface pb-[5rem] flex" id="contactSection">
      <div className="h-[40rem]  flex justify-center items-center w-[50%]">
        <Spline
          scene="https://prod.spline.design/yWLZnQoDG5X5jt2l/scene.splinecode"
          style={{ transform: "scale(1.1)" }}
        />
      </div>

      <div className="flex justify-center items-center flex-1">
        <div className="bg-background rounded-xl p-[3rem] mx-[3rem] flex-col relative max-w-lg">
          <h1 className="text-3xl font-bold text-primary text-left">Get in Touch</h1>
          <p className="text-left text-gray-300 text-2xl mt-1">
            I am always open to new opportunities and collaborations. Feel free to reach out to me.
          </p>
          <div className="mt-10 self-center w-full">
            <AwesomeButton type="secondary" className="w-full">Contact Me</AwesomeButton>
          </div>
        </div>
      </div>
    </section>

  );
}
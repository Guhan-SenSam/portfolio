import { SubTitle } from '../components/SubTitle.tsx';
import { motion } from 'motion/react';
import { LinkPreview } from '../components/LinkPreview.tsx';
import { AnimatedTooltip } from '../components/AnimatedGroup.tsx';

export const AboutSection = () => {
    return (
        <section className="w-screen py-[10rem] overflow-hidden bg-surface " id="aboutSection">

            <div className=" flex flex-col text-center mt-20 items-center justify-center">
                <SubTitle words={["About me"]} duration={3000} className="text-5xl font-bold text-primary mb-2"/>
                <motion.div
                    className="h-1 w-40 bg-blue-500 "
                    initial={{scaleX: 0}}
                    whileInView={{
                        scaleX: 1,
                        transition: {duration: 0.6, ease: "easeOut"},
                    }}
                    viewport={{once: false, amount: 0.2}}
                    style={{originX: 0.5}}
                />
            </div>

            <div className={"flex flex-row w-full px-[25rem] py-20 justify-center gap-x-[5rem] "}>
                <img src={"/me.webp"} alt="profile" className={"rounded-3xl h-[30rem] border-2 border-border hover:shadow-2xl hover:shadow-accent hover:border-accent transition-all transition-1000"}/>
                <div className={"flex flex-col"}>
                    <h1 className={"text-3xl text-white font-semibold"}> Origins:</h1>
                    <p className={"text-xl mt-3 text-gray-300 font-normal"}>
                        I am a self taught developer who specializes in mobile app development with over 5 years of
                        experience in the field.
                        I also founded a startup, {" "}
                        <LinkPreview url="https://oxlac.com" className="font-bold" width={400} height={200}>
                            <p className="font-bold text-accent">Oxlac Tech LLP</p>
                        </LinkPreview> {" "}
                        <br/>
                        I also have experience in numerous web development frameworks. My passion for technology and
                        problem solving has led me to work on various projects.

                    </p>
                    <h1 className={"text-3xl text-white font-semibold mt-10 mb-5"}> Organizations I have worked with:</h1>
                    <AnimatedTooltip items={[
                        {
                            id: 1,
                            name: "Oxlac Tech LLP",
                            designation: "Co-Founder",
                            image: "/oxlac.png",
                        },
                        {
                            id: 2,
                            name: "VIT Chennai",
                            designation: "Student",
                            image: "/vit.jpg",
                        },
                        {
                            id: 3,
                            name: "GameUP Mobile App",
                            designation: "Mobile Developer and Devops",
                            image: "/GameUP.png",
                        },
                        {
                            id: 4,
                            name: "Solona AI",
                            designation: "Contributor",
                            image: "/Solona.png",
                        },
                        {
                            id: 5,
                            name: "Chronos Simulator",
                            designation: "Developer",
                            image: "/ChronosSim.jpg",
                        },
                    ]}/>
                </div>
            </div>

        </section>
    );
}
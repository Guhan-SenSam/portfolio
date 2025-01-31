import {SubTitle} from "../components/SubTitle.tsx";
import {motion} from "motion/react";
import {TextGenerateEffect} from "../components/TextGenerate.tsx";
import {TechBentoGrid} from "../components/TechBentoGrid.tsx";

const TECH = [
    {
        title: "Programming Languages :",
        items: [
            { id: 1, name: "Python", image: "https://skillicons.dev/icons?i=python&theme=light", designation: "" },
            { id: 2, name: "Java", image: "https://skillicons.dev/icons?i=java&theme=light", designation: "" },
            { id: 3, name: "C", image: "https://skillicons.dev/icons?i=c&theme=light", designation: "" },
            { id: 4, name: "C++", image: "https://skillicons.dev/icons?i=cpp&theme=light", designation: "" },
            { id: 5, name: "C#", image: "https://skillicons.dev/icons?i=cs&theme=light", designation: "" },
            { id: 6, name: "Rust", image: "https://skillicons.dev/icons?i=rust&theme=light", designation: "" },
            { id: 7, name: "Kotlin", image: "https://skillicons.dev/icons?i=kotlin&theme=light", designation: "" },
            { id: 8, name: "Swift", image: "https://skillicons.dev/icons?i=swift&theme=light", designation: "" },
            { id: 9, name: "Dart", image: "https://skillicons.dev/icons?i=dart&theme=light", designation: "" },
            { id: 10, name: "JavaScript", image: "https://skillicons.dev/icons?i=javascript&theme=light", designation: "" },
            { id: 11, name: "TypeScript", image: "https://skillicons.dev/icons?i=typescript&theme=light", designation: "" },
            { id: 12, name: "HTML5", image: "https://skillicons.dev/icons?i=html&theme=light", designation: "" },
            { id: 13, name: "CSS3", image: "https://skillicons.dev/icons?i=css&theme=light", designation: "" },
            { id: 15, name: "PHP", image: "https://skillicons.dev/icons?i=php&theme=light", designation: "" },
        ]
    },
    {
        title: "Mobile App Development Frameworks",
        items: [
            { id: 1, name: "Java", image: "https://skillicons.dev/icons?i=java&theme=light", designation: "" },
            { id: 2, name: "Kotlin", image: "https://skillicons.dev/icons?i=kotlin&theme=light", designation: "" },
            {id : 3, name: "JetPack Compose", image: "https://miro.medium.com/v2/resize:fit:1400/1*-1elwQ9eKqBI-q6cGngDKg.png", designation: "" },
            { id: 4, name: "React Native", image: "https://skillicons.dev/icons?i=react&theme=light", designation: "" },
            { id: 5, name: "Flutter", image: "https://skillicons.dev/icons?i=flutter&theme=light", designation: "" },
            { id: 6, name: "Xamarin, MAUI", image: "https://skillicons.dev/icons?i=dotnet&theme=light", designation: "" },
            { id: 7, name: "Swift", image: "https://skillicons.dev/icons?i=swift&theme=light", designation: "" },
        ]
    },
    {
        title: "Frontend Development",
        items: [
            { id: 1, name: "NextJS", image: "https://skillicons.dev/icons?i=nextjs&theme=light", designation: "" },
            { id: 2, name: "React", image: "https://skillicons.dev/icons?i=react&theme=light", designation: "" },
            { id: 3, name: "Vue", image: "https://skillicons.dev/icons?i=vue&theme=light", designation: "" },
            { id: 4, name: "TailwindCSS", image: "https://skillicons.dev/icons?i=tailwind&theme=light", designation: "" },
            { id: 5, name: "HTML5", image: "https://skillicons.dev/icons?i=html&theme=light", designation: "" },
            { id: 6, name: "CSS3", image: "https://skillicons.dev/icons?i=css&theme=light", designation: "" },
            { id: 7, name: "PHP", image: "https://skillicons.dev/icons?i=php&theme=light", designation: "" },
            { id: 8, name: "WordPress", image: "https://skillicons.dev/icons?i=wordpress&theme=light", designation: "" },
        ]
    },
    {
        title: "Backend Frameworks and Technologies",
        items: [
            { id: 1, name: "Django", image: "https://skillicons.dev/icons?i=django&theme=light", designation: "" },
            { id: 2, name: ".NET", image: "https://skillicons.dev/icons?i=dotnet&theme=light", designation: "" },
            { id: 3, name: "MySQL", image: "https://skillicons.dev/icons?i=mysql&theme=light", designation: "" },
            { id: 4, name: "MongoDB", image: "https://skillicons.dev/icons?i=mongodb&theme=light", designation: "" },
            { id: 5, name: "Flask", image: "https://skillicons.dev/icons?i=flask&theme=light", designation: "" },
            { id:6, name: "Firebase", image: "https://skillicons.dev/icons?i=firebase&theme=light", designation: "" },
            { id: 7, name: "NodeJS", image: "https://skillicons.dev/icons?i=nodejs&theme=light", designation: "" },
            { id: 8, name: "ExpressJS", image: "https://skillicons.dev/icons?i=express&theme=light", designation: "" },
            { id: 9, name: "GraphQL", image: "https://skillicons.dev/icons?i=graphql&theme=light", designation: "" },
        ]
    },
    {
        title: "Desktop Application Development",
        items: [
            { id: 1, name: "ElectronJS", image: "https://skillicons.dev/icons?i=electron&theme=light", designation: "" },
            { id: 3, name: "C#", image: "https://skillicons.dev/icons?i=cs&theme=light", designation: "" },
            { id: 4, name: "Python", image: "https://skillicons.dev/icons?i=python&theme=light", designation: "" },
        ]
    },
    {
        "title": "DevOps and Cloud Technologies",
        "items": [
            // Containerization & Orchestration
            { "id": 1, "name": "Docker", "image": "https://skillicons.dev/icons?i=docker&theme=light", "designation": "" },
            { "id": 2, "name": "Kubernetes", "image": "https://skillicons.dev/icons?i=kubernetes&theme=light", "designation": "" },

            // CI/CD Tools
            { "id": 4, "name": "Jenkins", "image": "https://skillicons.dev/icons?i=jenkins&theme=light", "designation": "" },
            { "id": 5, "name": "GitHub Actions", "image": "https://skillicons.dev/icons?i=githubactions&theme=light", "designation": "" },

            // Cloud Providers
            { "id": 9, "name": "AWS", "image": "https://skillicons.dev/icons?i=aws&theme=light", "designation": "" },
            { "id": 10, "name": "Azure", "image": "https://skillicons.dev/icons?i=azure&theme=light", "designation": "" },
            { "id": 11, "name": "GCP", "image": "https://skillicons.dev/icons?i=gcp&theme=light", "designation": "" },
            { "id": 12, "name": "Heroku", "image": "https://skillicons.dev/icons?i=heroku&theme=light", "designation": "" },
            { "id": 13, "name": "Cloudflare", "image": "https://skillicons.dev/icons?i=cloudflare&theme=light", "designation": "" },
            { "id": 14, "name": "DigitalOcean", "image": "https://yt3.googleusercontent.com/-PCeii0ezD7You77VnltsKkMGgNC8JOdRSnpfV651vgj55z8EVC0DmuyVVgWUoqNcu-ARtA7fNI=s900-c-k-c0x00ffffff-no-rj", "designation": "" },

            // Infrastructure as Code (IaC)
            { "id": 16, "name": "Terraform", "image": "https://skillicons.dev/icons?i=terraform&theme=light", "designation": "" },

            // Monitoring, Logging & Error Tracking
            { "id": 22, "name": "Sentry", "image": "https://skillicons.dev/icons?i=sentry&theme=light", "designation": "" },

            // Security & Networking
            { "id": 23, "name": "Nginx", "image": "https://skillicons.dev/icons?i=nginx&theme=light", "designation": "" },
        ]
    }
];

const OTHER = [
    {
        title: "IDE's and Tools",
        items: [
            {id: 1, name: "VSCode", image: "https://skillicons.dev/icons?i=vscode&theme=light", designation: ""},
            {id: 2, name: "Visual Studio", image: "https://skillicons.dev/icons?i=visualstudio&theme=light", designation: ""},
            {id: 3, name: "PyCharm", image: "https://skillicons.dev/icons?i=pycharm&theme=light", designation: ""},
            {id: 4, name: "WebStorm", image: "https://skillicons.dev/icons?i=webstorm&theme=light", designation: ""},
            {id: 5, name: "Rider", image: "https://skillicons.dev/icons?i=rider&theme=light", designation: ""},
            {id: 6, name: "Android Studio", image: "https://skillicons.dev/icons?i=androidstudio&theme=light", designation: ""},
            {id: 7, name: "XCode", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoXub-hKgUAwqJGd1gItb6oABpSGU7JOhjg&s", designation: ""},
            {id: 8, name: "Postman", image: "https://skillicons.dev/icons?i=postman&theme=light", designation: ""},
            {id: 9, name: "Git Kraken", image: "https://media.getintopc.com/2023/05/GitKraken-Client-On-Premise-Serverless-Free-Download-GetintoPC.com_.jpg", designation: ""},
        ]
    },
    {
        title: "Hobby Software",
        items: [
            {id:1, name: "Blender", image: "https://skillicons.dev/icons?i=blender&theme=light", designation: ""},
            {id:2, name: "DaVinci Resolve", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/1200px-DaVinci_Resolve_17_logo.svg.png", designation: ""},
            {id:3, name: "Figma", image: "https://skillicons.dev/icons?i=figma&theme=light", designation: ""},

        ]
    }
];

export const TechStackSection = () => {
    return (
        <section className="w-screen  overflow-hidden bg-surface pb-[20rem]" id="techSection">

            <div className=" flex flex-col text-center mt-20 items-center justify-center">
                <SubTitle words={["Tech Arsenal"]} duration={3000} className="text-5xl font-bold text-primary mb-2"/>
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
                <TextGenerateEffect words="Languages, Frameworks and Tools that I rely on" duration={2} filter={false}
                                    className="text-2xl font-bold text-primary mb-2 text-white"/>
            </div>

            <TechBentoGrid data ={TECH}/>
            <div className=" flex flex-col text-center mt-20 items-center justify-center">
                <SubTitle words={["Other"]} duration={3000} className="text-5xl font-bold text-primary mb-2"/>
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
                <TextGenerateEffect words="Sofwtares, Hobbies and Linux🐧" duration={2} filter={false}
                                    className="text-2xl font-bold text-primary mb-2 text-white"/>
                <TechBentoGrid data ={OTHER}/>
            </div>

        </section>
    );
}
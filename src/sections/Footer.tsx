import { AwesomeButtonSocial } from 'react-awesome-button';

const Footer = () => {
  return (
    <footer className="w-full bg-onSurface text-gray-100 p-6 flex flex-row ">
        <div className="flex-1">
          <div className="text-2xl font-bold">Guhan Sambandam </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>

          {/* Right section - copyright and social links */}
          <div className="flex-1 flex sm:flex-row flex-col items-center gap-2 justify-end">
              <AwesomeButtonSocial type="linkedin" href="https://www.linkedin.com/in/guhan-sambandam">Linkedin</AwesomeButtonSocial>
              <AwesomeButtonSocial type="github" href="https://github.com/Guhan-SenSam">Github</AwesomeButtonSocial>
              <AwesomeButtonSocial type="twitter" href="https://x.com/GSensam">Twitter</AwesomeButtonSocial>
              <AwesomeButtonSocial type={"instagram"} href={"https://www.instagram.com/guhan_sensam/"}>Instagram</AwesomeButtonSocial>

          </div>
    </footer>
  );
};

export default Footer;
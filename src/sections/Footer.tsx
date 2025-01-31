import { AwesomeButtonSocial } from 'react-awesome-button';

const Footer = () => {
  return (
    <footer className="w-full bg-onSurface text-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left section - empty for balance */}
          <div className="flex-1">
            <div className="text-2xl font-bold">Guhan Sambandam </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>

          {/* Right section - copyright and social links */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-2">
              <AwesomeButtonSocial type="linkedin" href="https://www.linkedin.com/in/guhan-sambandam">Linkedin</AwesomeButtonSocial>
              <AwesomeButtonSocial type="github" href="https://github.com/Guhan-SenSam">Github</AwesomeButtonSocial>
              <AwesomeButtonSocial type="twitter" href="https://x.com/GSensam">Twitter</AwesomeButtonSocial>
              <AwesomeButtonSocial type={"instagram"} href={"https://www.instagram.com/guhan_sensam/"}>Instagram</AwesomeButtonSocial>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
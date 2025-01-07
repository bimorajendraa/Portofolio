import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import "./index.css"; // Import the CSS file
import asset1 from "./assets/asset1.png"; // Correct path to the image
import arrow from "./assets/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const experiences = [
    {
      id: 1,
      title: "IT Development Staff",
      company: "ISE! 2024",
      description:
        "Responsible for making user interface on the website using Next.JS and Tailwind CSS.",
      date: "April 2024 - Now",
      bgColor: "bg-yellow-200",
      borderColor: "border-yellow-400",
    },
    {
      id: 2,
      title: "Technology Development Intern",
      company: "HMSI",
      description:
        "Became one of the committee members for the programming tutorial program held by the Technology Development HMSI ITS division.",
      date: "Juli 2024 - Now",
      bgColor: "bg-blue-200",
      borderColor: "border-blue-400",
    },
    {
      id: 3,
      title: "Programming Intern",
      company: "IRIS Robotic Team",
      description:
        "Understand the concept and use of ROS to regulate systems on robots. And carrying out a project that combines all concepts, the development of autonomous robots.",
      date: "Januari 2024 - Februari 2024",
      bgColor: "bg-pink-200",
      borderColor: "border-pink-400",
    },
    {
      id: 4,
      title: "IT Development Expert Staff",
      company: "Ini Lho ITS 2025",
      description:
        "Sliced pages, resolved bugs, and ensured the website operated smoothly without errors. Also responsible for integration and coordinating with other IT Development divisions.",
      date: "September 2024 - Now",
      bgColor: "bg-green-200",
      borderColor: "border-green-400",
    },
    {
      id: 5,
      title: "IT Development Staff",
      company: "Petrolida 2025",
      description:
        "Contributed to the development of the Petrolida 2025 website by implementing UI slicing, debugging, and seamless integrations while collaborating with cross-functional teams.",
      date: "Oktober 2024 - Now",
      bgColor: "bg-purple-200",
      borderColor: "border-purple-400",
    },
    {
      id: 6,
      title: "Head of Division, Web Development",
      company: "Imajas ITS",
      description:
        "Led the Web Development division, overseeing page slicing, bug resolution, website performance optimization, and integration. Fostered effective collaboration within the team and across divisions.",
      date: "Oktober 2024 - Now",
      bgColor: "bg-orange-200",
      borderColor: "border-orange-400",
    },
  ];

  return (
    <>
      <div className="bg-dots bg-size-dots bg-white min-h-screen relative h-full max-h-fit w-screen max-w-full overflow-x-hidden">
        <Navbar className="bg-transparent">
          <NavbarBrand>
            <p className="font-bold text-inherit">BIMO</p>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link color="foreground" href="#">
                About Me
              </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Link color="foreground" href="#">
                Skills
              </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Link color="foreground" href="#">
                Experience
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Hire Me
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div className="container mx-auto px-4 lg:px-16">
          <div className="px-8 py-16 lg:px-16 lg:pb-32 h-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 my-8 lg:my-12">
              <div className="flex flex-col justify-center items-center lg:items-start lg:text-left text-center">
                {/* my cartoon */}
                <div className="flex items-center justify-center">
                  <Image
                    width={150}
                    height={160}
                    alt="Cartoon Bimo"
                    src={asset1}
                  />
                  <div className="flex items-center ml-4">
                    <Image
                      src={arrow}
                      width={77}
                      height={35}
                      alt="Arrow"
                      className="w-[77px] h-[35px] mt-8"
                    />
                    <p
                      className="font-bold bg-blue-100 ml-2"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="500"
                    >
                      Bimo
                    </p>
                  </div>
                </div>
                {/* end my cartoon */}
                <p className="font-bold text-4xl lg:text-6xl mt-4">
                  I develop websites and programs!
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end justify-center">
                <p className="text-lg text-center lg:text-right lg:text-[24px]">
                  I'll make your little dreams become true.
                </p>
                <Button
                  className="mt-4 bg-black text-white rounded-md text-center lg:px-10 lg:py-6 lg:text-[24px]"
                  href="#"
                >
                  Hire me
                </Button>
              </div>
            </div>
          </div>
          <div id="about" className="px-8 py-16 lg:px-16 lg:py-32">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                <Image
                  src="me.jpeg"
                  alt="Your Name"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="500"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1
                  className="text-4xl lg:text-5xl font-bold mb-4"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="500"
                >
                  About Me
                </h1>
                <p
                  className="text-lg lg:text-xl text-gray-700"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="500"
                >
                  Hi, I'm Bimo! I'm a passionate developer who loves creating
                  beautiful and functional websites and programs. My journey in
                  the tech world began a few years ago, and since then, I've
                  been continuously learning and growing. I believe in the power
                  of technology to bring ideas to life and make the world a
                  better place. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
          <div className="px-8 py-16 lg:px-16 lg:py-32">
            <div className="bg-blue-100 w-[190px] my-12 items-center justify-center">
              <p className="font-handlee text-xl font-bold">
                This is what I love to do
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-start space-x-4">
              <Card className="h-[300px] transition-all duration-300 w-[300px] bg-yellow-200 border-2 border-yellow-400 rotate-[-8deg] hover:rotate-0">
                <CardBody>
                  <p className="font-bold">Web Development</p>
                  <p>
                    Building and designing websites with modern technologies
                    like HTML, CSS, JavaScript, and frameworks. It's all about
                    creating fast, functional, and user-friendly websites.
                  </p>
                </CardBody>
              </Card>
              <Card className="h-[300px] w-[300px] bg-blue-200 border-2 border-blue-400 rotate-[10deg] hover:rotate-0">
                <CardBody>
                  <p className="font-bold">UI & Product Design</p>
                  <p>
                    Crafting intuitive, aesthetically pleasing user interfaces
                    and user experiences that solve real problems and delight
                    users. This includes prototyping with tools like Figma and
                    conducting user research.
                  </p>
                </CardBody>
              </Card>
              <Card className="h-[300px] w-[300px] bg-pink-200 border-2 border-pink-400 rotate-[-7deg] hover:rotate-0">
                <CardBody>
                  <p className="font-bold">Exploring New Things</p>
                  <p>
                    Always eager to learn and experiment with new technologies,
                    tools, or methodologies. Whether it's no-code platforms, new
                    libraries, somewhere new, or AI tools, the goal is to keep
                    evolving.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="px-8 py-16 lg:px-16 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <p className="font-handlee font-bold text-xl bg-pink-200">
                  Work Experience
                </p>
                <Image
                  width={40}
                  height={20}
                  src={arrow}
                  alt="Arrow"
                  className="w-[40px] h-[20px] -rotate-90 my-4 lg:ml-12"
                />
                <p className="text-xl lg:text-2xl font-medium mb-4">
                  I Have a couple Experience
                </p>
              </div>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="flex items-start"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  >
                    <Card
                      className={`w-[50px] h-[50px] flex-shrink-0 ${exp.bgColor} flex items-center justify-center rounded-lg mr-4 border-1 ${exp.borderColor}`}
                    >
                      <p className="font-bold text-xl">{exp.id}</p>
                    </Card>
                    <div>
                      <p className="font-bold text-lg">
                        {exp.title} at{" "}
                        <span className="text-black">{exp.company}</span>
                      </p>
                      <p>{exp.description}</p>
                      <p className="text-sm text-gray-500">{exp.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="container mx-auto px-4 lg:px-16 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-center border-t pt-8 gap-32">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-bold text-5xl">Let’s work together</h2>
              <p className="text-gray-500 my-4">
                Ready to turn your ideas into reality? Whether you’re looking
                for a fresh perspective, need help with a project, or just want
                to chat about tech, I'm here to collaborate. Let’s bring your
                vision to life and make something amazing together!
              </p>
              <p className="text-gray-500 mb-4">Let's build something great!</p>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link
                  href="https://www.instagram.com/bimo_rajendra_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-black text-3xl hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  href="https://github.com/bimorajendraa/"
                  className="text-black text-3xl hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-github"></i>
                </Link>
                <Link
                  href="www.linkedin.com/in/bimo-rajendra-64139a284"
                  className="text-black text-3xl hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-100 p-4 rounded-md border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 p-4 rounded-md border border-gray-300"
                />
                <textarea
                  placeholder="Type your message here"
                  className="bg-gray-100 p-4 rounded-md border border-gray-300"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-black text-white py-4 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

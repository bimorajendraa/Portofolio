import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, Image } from "@nextui-org/react";
import './index.css'; // Import the CSS file
import asset1 from './assets/asset1.png'; // Correct path to the image
import arrow from './assets/arrow.png';

function App() {
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
          <div className="lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 my-8 lg:my-12">
            <div className="flex flex-col justify-center items-center lg:items-start lg:text-left text-center">
              {/* my cartoon */}
              <div className="flex items-center justify-center">
                <Image
                  width={150}
                  height={160}
                  alt="Cartoon Bimo"
                  src={asset1} // Use the correct variable
                />
                <div className="flex items-center ml-4">
                  <Image src={arrow} width={77} height={35} alt="Arrow" className="w-[77px] h-[35px] mt-8" />
                  <p className="font-bold bg-blue-100 ml-2">Bimo</p>
                </div>
              </div>
              {/* end my cartoon */}
              <p className="font-bold text-4xl lg:text-6xl mt-4">I develop websites and programs!</p>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-center">
              <p className="text-lg text-center lg:text-right lg:text-[24px]">I'll make your little dreams become true.</p>
              <Button className="mt-4 bg-black text-white rounded-md text-center lg:px-10 lg:py-6 lg:text-[24px]" href="#">
                Hire me
              </Button>
            </div>
          </div>
          </div>
          <div className="px-8 py-16 lg:px-16 lg:py-32">
            <div className="bg-blue-100 w-[190px] my-12 items-center justify-center">
              <p className="font-handlee text-xl font-bold">This is what I love to do</p>
            </div>
            <div className="flex flex-wrap justify-center items-start space-x-4">
              <Card className="h-[300px] transition-all duration-300 hover:transition-all hover:duration-300 hover:h-[400px] w-[300px] bg-yellow-200 border-2 border-yellow-400 rotate-[-8deg] hover:rotate-0">
                <CardBody>
                  <p className="font-bold">User Research Design</p>
                  <p>Developing Website</p>
                </CardBody>
              </Card>
              <Card className="h-[400px] w-[300px] bg-blue-200 border-2 border-blue-400 rotate-[10deg] hover:rotate-0">
                <CardBody>
                  <p className="font-bold">UI & Product Design</p>
                  <p>Figma</p>
                </CardBody>
              </Card>
              <Card className="h-[400px] w-[300px] bg-pink-200 border-2 border-pink-400 rotate-[-7deg] hover:rotate-0">
                <CardBody>
                  <p className="font-bold">No-code Development</p>
                  <p>Learn Something New</p>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="px-8 py-16 lg:px-16 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <p className="font-handlee font-bold text-xl bg-pink-200">Work Experience</p>
              <Image width={40} height={20} src={arrow} alt="Arrow" className="w-[40px] h-[20px] -rotate-90 my-4 lg:ml-12" />
              <p className="text-xl lg:text-2xl font-medium mb-4">I Have a couple Experience</p>
                
              </div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Card className="w-[50px] h-[50px] bg-yellow-200 flex items-center justify-center rounded-lg mr-4 border-1 border-yellow-400">
                    <p className="font-bold text-xl">1</p>
                  </Card>
                  <div>
                    <p className="font-bold text-lg">IT Development staff at <span className="text-black">ISE! 2024</span></p>
                    <p>Worked on design system at Material 3 designs</p>
                    <p className="text-sm text-gray-500">April 2024 - Now</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Card className="w-[50px] h-[50px] bg-blue-200 flex items-center justify-center rounded-lg mr-4 border-1 border-blue-400">
                    <p className="font-bold text-xl">2</p>
                  </Card>
                  <div>
                    <p className="font-bold text-lg">Technology Development Intern at <span className="text-black">HMSI</span></p>
                    <p>Worked on design system at Material 3 designs</p>
                    <p className="text-sm text-gray-500">Juli 2024 - Now</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Card className="w-[50px] h-[50px] bg-pink-200 flex items-center justify-center rounded-lg mr-4 border-1 border-pink-400">
                    <p className="font-bold text-xl">3</p>
                  </Card>
                  <div>
                    <p className="font-bold text-lg">Programming Intern at <span className="text-black">IRIS Robotic Team</span></p>
                    <p>Worked on design system at Material 3 designs</p>
                    <p className="text-sm text-gray-500">Januari 2024 - Februari 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
          <div className="container mx-auto px-4 lg:px-16 py-16">
            <div className="flex flex-col lg:flex-row justify-between items-center border-t pt-8">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="font-bold text-5xl">Let’s work together</h2>
                <p className="text-gray-500 my-4">
                  This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.
                </p>
                <p className="text-gray-500 mb-4">
                  This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.
                </p>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  <a href="#" className="text-black">
                    <i className="fab fa-discord"></i>
                  </a>
                  <a href="#" className="text-black">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-black">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a href="#" className="text-black">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-black">
                    <i className="fab fa-behance"></i>
                  </a>
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

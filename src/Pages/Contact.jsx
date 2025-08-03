import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 3D Earth Component
function Earth() {
  const earthRef = useRef();
  const cloudRef = useRef();
  
  // Use direct texture URLs from Three.js examples
  const earthTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
  const bumpMap = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg');
  const specularMap = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg');
  const cloudsTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png');

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime * 0.15;
    cloudRef.current.rotation.y = elapsedTime * 0.155;
  });

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} /> {/* Increased size */}
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpMap}
          bumpScale={0.1}
          specularMap={specularMap}
          specular={new THREE.Color('grey')}
          shininess={5}
        />
      </mesh>
      
      {/* Clouds */}
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.02, 64, 64]} /> {/* Slightly larger than earth */}
        <meshPhongMaterial
          map={cloudsTexture}
          transparent={true}
          opacity={0.6} />
      </mesh>
    </group>
  );
}

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSent(true);
      form.current.reset();
    }, (err) => {
      console.error("EmailJS error:", err.text);
      alert("Oops, something went wrong. Try again.");
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#F3EBDD] via-[#FFE9B0] to-[#D6EFC5] min-h-screen">
      {/* Contact Section (keep your existing contact form code) */}
        <div className="container mx-auto grid md:grid-cols-2 gap-8 p-8 pt-35">
        <div className="bg-gradient-to-b from-[#FFF7EA] to-[#E1F4F3] rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 selection:bg-black selection:text-white">Let's Connect 👋</h2>
          <p className="text-lg mb-6 selection:bg-black selection:text-white">Have a question, idea, or simply want to say hi?</p>
          <img
            src="/Raj-image-removebg-preview.png"
            alt="Me"
            className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg"
          />
          <div className="flex justify-center space-x-4 text-4xl">
            <button className='mr-4 cursor-pointer text-4xl' onClick={() => window.open("https://www.linkedin.com/in/rajkumar-behera-b0b7a8302/", "_blank")}>
              <i className="fab fa-linkedin" style={{ color: '#74C0FC' }}></i>
            </button>
            <button className='m-7 cursor-pointer text-4xl' onClick={() => window.open("https://github.com/PratikRaju", "_blank")}>
              <i className="fab fa-github"></i>
            </button>
            <button className='ml-4 cursor-pointer text-4xl' onClick={() => window.open("https://www.instagram.com/_.raazzz.__", "_blank")}>
              <i className="fab fa-square-instagram" style={{color: '#e1306c'}}></i>
            </button>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}
          className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-xl space-y-4 selection:bg-black selection:text-white">
          <label>Name</label>
          <input type="text" name="from_name" required
            className="w-full p-3 rounded-md border focus:ring-2 focus:ring-indigo-400" />
          <label>Email</label>
          <input type="email" name="from_email" required
            className="w-full p-3 rounded-md border focus:ring-2 focus:ring-indigo-400" />
          <label>Message</label>
          <textarea name="message" rows="4" required
            className="w-full p-3 rounded-md border focus:ring-2 focus:ring-indigo-400" />
          <button type="submit"
            className="bg-[#ff9f43] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff7849] transition-all">
            Send ✉️
          </button>
          {sent && <p className="mt-4 text-green-600">I will reach out within 24 hours.</p>}
        </form>
      </div>
      {/* 3D Earth Section - Updated */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 p-8 py-20 items-center">
        <div className="h-[500px] w-full rounded-xl overflow-hidden bg-gray-900"> {/* Increased height */}
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }} // Adjusted camera
          >
            <ambientLight intensity={0.8} /> {/* Increased ambient light */}
            <directionalLight 
              position={[5, 3, 5]} 
              intensity={1.5} 
              color="#ffffff"
              castShadow
            />
            <Environment preset="dawn" /> {/* Added environment */}
            <Stars 
              radius={100} 
              depth={50} 
              count={2000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={1} 
            />
            <Earth />
            <OrbitControls 
              enableZoom={true}
              autoRotate
              autoRotateSpeed={0.5}
              minDistance={3} // Prevent zooming too close
              maxDistance={10} // Prevent zooming too far
            />
          </Canvas>
        </div>
        
        {/* Your existing text content */}
                <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Address</h2>
          <p className="text-lg text-gray-700">
            Just like this Earth spins connecting all continents, technology connects us across boundaries. 
            Whether you're from Asia, Europe, or the Americas - distance is no barrier to collaboration.
          </p>
          <p className="text-lg text-gray-700">
            I believe in building digital bridges that bring ideas and people together, 
            creating solutions that have a global impact.
          </p>
          <div className="flex space-x-4 pt-4 justify-center">
            <button 
              className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium cursor-pointer 
                        hover:bg-green-200 hover:text-green-900 transition-colors duration-300"
              onClick={() => window.open("https://www.google.com/maps/place/Bhubaneswar,+Odisha/@20.3008841,85.8204532,19728m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!8m2!3d20.2959847!4d85.8246101!16zL20vMDNjenFz!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D", "_blank")}>
              Visit On Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
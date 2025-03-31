// import React from 'react';
// import { useState } from 'react'
// import { useInView } from 'react-intersection-observer'


// function Footer() {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   return (
//     <footer 
//       ref={ref} 
//       className={`relative mt-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden ${
//         inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//       } transition-all duration-800 ease-out`}
//     >
//       {/* Animated gradient border */}
//       <div className="h-1 w-full footer-gradient" />

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* About Section */}
//           <div className={`transform ${inView ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-5'} transition-all duration-600`}>
//             <h3 className="text-2xl font-bold text-indigo-400 mb-6 relative inline-block group">
//               About Us
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
//             </h3>
//             <p className="text-gray-300 mb-6">
//               We are passionate about creating amazing web experiences using React and Vite. Our team is dedicated to delivering innovative solutions that make a difference.
//             </p>
//             <div className="flex gap-6 mt-4">
//               {['★', '♥', '⚡'].map((icon, index) => (
//                 <a
//                   key={icon}
//                   href="#"
//                   className={`text-2xl hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300 ${
//                     inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//                   }`}
//                   style={{ transitionDelay: `${700 + index * 100}ms` }}
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className={`transform ${inView ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-5'} transition-all duration-600`}>
//             <h3 className="text-2xl font-bold text-indigo-400 mb-6 relative inline-block group">
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
//             </h3>
//             <ul className="space-y-4">
//               {['Home', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
//                 <li
//                   key={link}
//                   className={`transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-300`}
//                   style={{ transitionDelay: `${300 + index * 100}ms` }}
//                 >
//                   <a
//                     href={`#${link.toLowerCase()}`}
//                     className="text-gray-300 hover:text-indigo-400 hover:pl-4 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="opacity-0 -ml-4 group-hover:ml-0 group-hover:opacity-100 transition-all duration-300">→</span>
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className={`transform ${inView ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-5'} transition-all duration-600`}>
//             <h3 className="text-2xl font-bold text-indigo-400 mb-6 relative inline-block group">
//               Contact Info
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
//             </h3>
//             <ul className="space-y-4">
//               {[
//                 { text: 'info@example.com', href: 'mailto:info@example.com' },
//                 { text: '(123) 456-7890', href: 'tel:+1234567890' },
//                 { text: '123 Web Dev Street', href: '#location' },
//                 { text: 'Support Center', href: '#support' }
//               ].map((item, index) => (
//                 <li
//                   key={item.href}
//                   className={`transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-300`}
//                   style={{ transitionDelay: `${300 + index * 100}ms` }}
//                 >
//                   <a
//                     href={item.href}
//                     className="text-gray-300 hover:text-indigo-400 hover:pl-4 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="opacity-0 -ml-4 group-hover:ml-0 group-hover:opacity-100 transition-all duration-300">→</span>
//                     {item.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
//           <img
//             src={viteLogo}
//             className="w-12 h-12 hover:animate-logo-spin hover:drop-shadow-[0_0_0.6em_#646cff] transition-all duration-500"
//             alt="Powered by Vite"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="h-24 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all duration-300" alt="React logo" />
//         </a>
//       </div>
//       <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
//       <div className="p-8">
//         <button
//           onClick={() => setCount((count) => count + 1)}
//           className="rounded-lg border border-transparent px-4 py-2 bg-gray-800 text-white hover:border-indigo-500 transition-colors duration-300"
//         >
//           count is {count}
//         </button>
//         <p className="mt-4">
//           Edit <code className="font-mono bg-gray-800 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="text-gray-500">
//         Click on the Vite and React logos to learn more
//       </p>
      
//       {/* Spacer content */}
//       <div className="h-screen flex items-center justify-center">
//         <h2 className="text-3xl font-bold">Scroll down to see the animated footer!</h2>
//       </div>
      
//       <Footer />
//     </>
//   )
// }

// export default App
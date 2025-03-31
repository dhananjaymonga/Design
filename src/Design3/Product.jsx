// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const ProductShowcase = () => {
//   const products = [
//     {
//       name: "Premium Cables",
//       description: "High-performance cables for industrial applications",
//       image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80",
//       category: "Industrial"
//     },
//     {
//       name: "Smart Switches",
//       description: "Modern switches with advanced features",
//       image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=80",
//       category: "Home Automation"
//     },
//     {
//       name: "LED Lighting",
//       description: "Energy-efficient lighting solutions",
//       image: "https://images.unsplash.com/photo-1565193298433-f6b5c50e4561?auto=format&fit=crop&w=1200&q=80",
//       category: "Lighting"
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
//         <p className="text-gray-600 mb-12 max-w-2xl">Discover our range of high-quality electrical products designed for reliability and performance.</p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="aspect-w-16 aspect-h-9 overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
              
//               <div className="p-6">
//                 <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
//                   {product.category}
//                 </span>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
//                 <p className="text-gray-600 mb-4">{product.description}</p>
                
//                 <button className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
//                   Learn More
//                   <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductShowcase;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, Package, Zap, Check } from 'lucide-react';

import productsData from "../data/product.json"
const ProductDetail = () => {
  const { productId } = useParams();
  console.log("Product ID:", productId);
console.log("Available Products:", productsData.products);
  const product = productsData.products.find(p => p.id === productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const similarProducts = productsData.products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Product Details */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              {/* <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-xl shadow-lg"
              /> */}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-3xl text-blue-600 font-bold">${product.price}</p>
              <p className="text-gray-600">{product.longDescription}</p>

              {/* Specifications */}
              <div className="border-t border-b border-gray-200 py-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-gray-600">{key}: </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Quality Guaranteed" },
                  { icon: Package, text: "Free Shipping" },
                  { icon: Zap, text: "Fast Installation" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <benefit.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProducts.map((similarProduct) => (
              <Link
                key={similarProduct.id}
                to={`/products/${similarProduct.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{similarProduct.name}</h3>
                    <p className="text-gray-600 mb-4">{similarProduct.description}</p>
                    <span className="text-blue-600 font-semibold">${similarProduct.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
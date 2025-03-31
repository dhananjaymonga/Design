import React from 'react';
import { Building2, Factory, Home, Lightbulb, Shield, Zap, Wrench, Clock } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Factory,
      title: "Industrial Solutions",
      description: "Comprehensive electrical solutions for manufacturing facilities and industrial complexes.",
      features: ["Power Distribution", "Automation Systems", "Safety Equipment"]
    },
    {
      icon: Building2,
      title: "Commercial Solutions",
      description: "Smart electrical systems for office buildings and commercial spaces.",
      features: ["Energy Management", "Lighting Control", "Security Systems"]
    },
    {
      icon: Home,
      title: "Residential Solutions",
      description: "Modern electrical solutions for homes and residential complexes.",
      features: ["Smart Home Integration", "Safety Devices", "Energy Efficiency"]
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Energy Efficient",
      description: "Reduce energy consumption and costs with our smart solutions"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced safety features and compliance with international standards"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Superior performance and reliability in all conditions"
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Simple maintenance procedures and long-lasting durability"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and assistance"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Solutions Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Innovative electrical solutions tailored for every sector and requirement.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-6">
                  <solution.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your requirements and find the perfect solution for your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
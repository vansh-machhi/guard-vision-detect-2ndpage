
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Leaf, Shield, Camera, Users } from "lucide-react";

const diseaseSymptoms = [
  {
    id: 1,
    title: "Leaf Blight",
    description: "Brown spots with yellow halos on leaves, indicating fungal infection",
    category: "Fungal",
    severity: "High",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Powdery Mildew",
    description: "White powdery coating on leaves and stems",
    category: "Fungal",
    severity: "Medium",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Root Rot",
    description: "Darkened, mushy roots with foul odor",
    category: "Bacterial",
    severity: "Critical",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % diseaseSymptoms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + diseaseSymptoms.length) % diseaseSymptoms.length);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200";
      case "High": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-green-100 text-green-800 border-green-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                  GREEN GUARD
                </h1>
                <p className="text-sm text-green-600">Crop Disease Detection</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Protect Your Crops with
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                AI-Powered Detection
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Identify crop diseases early with our advanced machine learning technology. 
              Browse through our comprehensive symptom gallery and get instant analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                <Camera className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Instant Detection</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Expert Analysis</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Community Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Symptom Gallery */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Disease Symptom Gallery</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore common crop disease symptoms to better understand what to look for in your fields
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-green-200 shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={diseaseSymptoms[currentSlide].image}
                  alt={diseaseSymptoms[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-green-600 text-white border-green-500">
                      {diseaseSymptoms[currentSlide].category}
                    </Badge>
                    <Badge className={`border ${getSeverityColor(diseaseSymptoms[currentSlide].severity)}`}>
                      {diseaseSymptoms[currentSlide].severity}
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{diseaseSymptoms[currentSlide].title}</h4>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {diseaseSymptoms[currentSlide].description}
                  </p>
                </div>
              </div>
            </Card>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {diseaseSymptoms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-green-600 w-8' 
                      : 'bg-green-200 hover:bg-green-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Protect Your Crops?
            </h3>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of farmers using GREEN GUARD to detect and prevent crop diseases before they spread.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Disease Detection
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-xl">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">GREEN GUARD</span>
          </div>
          <p className="text-gray-400">
            © 2024 Green Guard. Protecting crops with AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

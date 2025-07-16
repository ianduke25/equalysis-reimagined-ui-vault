
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Civil Rights Attorney",
    organization: "Bay Area Legal Foundation",
    content: "Equalysis transformed our approach to data analysis in civil rights cases. Their expertise in machine learning helped us uncover patterns that were crucial to our litigation strategy.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    title: "Public Defender",
    organization: "Contra Costa County",
    content: "The statistical reports provided by Equalysis were instrumental in demonstrating bias in our criminal justice system. Their work directly contributed to policy changes in our county.",
    rating: 5
  },
  {
    name: "Dr. Amanda Rodriguez",
    title: "Legal Research Director",
    organization: "ACLU Northern California",
    content: "Working with Equalysis has been transformative. Their commitment to privacy and accuracy while delivering actionable insights is exactly what we needed for our equity-driven initiatives.",
    rating: 5
  },
  {
    name: "David Kim",
    title: "Managing Partner",
    organization: "Kim & Associates",
    content: "The preprocessing and analysis services from Equalysis saved us months of work. Their ability to turn complex data into clear, legally relevant insights is unmatched.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
              <img 
                src="/lovable-uploads/361fc167-3a71-4a1d-a145-3eb8db8aec2e.png" 
                alt="Equalysis" 
                className="h-5 sm:h-6 w-auto"
              />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Testimonials</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 px-2">
              What our clients say
            </h1>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-teal-600 font-medium text-sm sm:text-base">{testimonial.title}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.organization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;

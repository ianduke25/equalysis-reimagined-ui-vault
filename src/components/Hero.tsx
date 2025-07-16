
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left space-y-6 lg:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight font-sans">
              A data science consulting firm dedicated to{" "}
              <span className="text-teal-600">advancing equity</span> and{" "}
              <span className="text-teal-600">realizing justice</span>.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              We blend traditional investigative approaches with contemporary data science methods to support equity-driven litigation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/testimonials" className="w-full sm:w-auto">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 w-full text-sm sm:text-base">
                  What Our Community Partners Say
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-[450px] h-64 sm:h-72 lg:h-80 overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/lovable-uploads/37f21012-544f-412b-be74-5930075c95b3.png"
                alt="Golden Gate Bridge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

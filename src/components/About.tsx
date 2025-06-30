
import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How we help
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Grounded by a unique mission to improve the modernity, efficacy, and reliability 
              of legal investigations, we blend traditional investigative approaches with 
              contemporary data science methods to support equity-driven litigation. We're 
              here to analyze data and employ artificial intelligence in ways that civil rights 
              lawyers, criminal defense investigators, and all those fighting for a more equal 
              world can trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Target,
                title: "Precision & Accuracy",
                description: "Every analysis is conducted with meticulous attention to detail and scientific rigor."
              },
              {
                icon: Users,
                title: "Collaborative Approach",
                description: "We work closely with legal teams to ensure our insights align with case strategy."
              },
              {
                icon: Award,
                title: "Trusted Expertise",
                description: "Recognized by leading civil rights organizations for our commitment to justice."
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

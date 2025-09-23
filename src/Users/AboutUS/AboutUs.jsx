import {
  Shield,
  Users,
  Award,
  Target,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-6">About Us</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Leading the industry in advanced security solutions with
            cutting-edge technology and unwavering commitment to safety.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-400">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4">
                Founded in 2015, we started as a small team of security
                professionals with a vision to revolutionize how businesses and
                homeowners protect what matters most. Today, we're proud to be a
                leading provider of advanced security solutions.
              </p>
              <p className="text-gray-300 mb-4">
                Our journey began with a simple belief: everyone deserves access
                to professional-grade security technology. We've grown from a
                startup to serving thousands of clients worldwide, but our core
                mission remains unchanged.
              </p>
              <p className="text-gray-300">
                We continue to innovate, bringing you the latest in surveillance
                technology, access control, and 24/7 monitoring services that
                adapt to your evolving security needs.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    50+
                  </div>
                  <div className="text-gray-300">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-300">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    99%
                  </div>
                  <div className="text-gray-300">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-950 p-8 rounded-lg">
              <Target className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To provide innovative, reliable, and accessible security
                solutions that empower individuals and businesses to protect
                their assets, loved ones, and peace of mind through cutting-edge
                technology and exceptional service.
              </p>
            </div>
            <div className="bg-gray-950 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the global leader in security technology, creating a safer
                world where advanced protection is accessible to everyone, and
                where innovation drives continuous improvement in safety and
                security standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">Expert Engineers</h4>
              <p className="text-gray-300">
                Our technical team consists of experienced engineers and
                security professionals dedicated to developing cutting-edge
                solutions.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">
                Certified Professionals
              </h4>
              <p className="text-gray-300">
                All team members hold industry certifications and undergo
                continuous training to stay current with the latest security
                technologies.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">Security Specialists</h4>
              <p className="text-gray-300">
                Our security specialists bring decades of combined experience in
                surveillance, access control, and threat assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

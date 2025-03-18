import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { FeatureCard } from "../components/FeatureCard";
import { useAuth } from "../utils/AuthContext";


export default function App() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <header className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <span className="text-blue-600 text-2xl font-bold">SolarSight</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#calculator" className="text-gray-600 hover:text-blue-600 transition-colors">Calculator</a>
            <a href="#marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">Marketplace</a>
          </nav>
          <div className="flex items-center gap-3">
            {currentUser ? (
              <>
                <Link to="/profile">
                  <Button variant="outline" size="sm">My Profile</Button>
                </Link>
                <Button size="sm" onClick={handleLogout}>Log Out</Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16">
          <div className="lg:w-1/2 space-y-6">
            <Heading as="h1" className="text-gray-900">
              Optimize Your Solar Installation with <span className="text-blue-600">SolarSight</span>
            </Heading>
            <p className="text-lg text-gray-600 leading-relaxed">
              A powerful tool for both renewable energy professionals and beginners.
              Plan your solar panel placement, calculate energy needs, and find the best equipment all in one place.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {currentUser ? (
                <Link to="/calculator">
                  <Button size="lg">Go to Calculator</Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button size="lg">Get Started</Button>
                </Link>
              )}
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1058&q=80" 
              alt="Solar panels on residential roof" 
              className="rounded-lg shadow-xl w-full object-cover max-h-[500px]"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading as="h2" className="mb-4">Key Features</Heading>
            <p className="text-lg text-gray-600">
              SolarSight offers powerful tools to help you make the most of your solar energy investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Solar Compass" 
              description="Determine the ideal panel orientation based on real-time sun positioning and your specific location."
              icon={<CompassIcon />}
            />
            <FeatureCard 
              title="Energy Evaluation" 
              description="Calculate your energy needs and get personalized recommendations for solar panel capacity and battery storage."
              icon={<CalculatorIcon />}
            />
            <FeatureCard 
              title="Marketplace" 
              description="Browse and compare solar panels, inverters, batteries and accessories from trusted vendors."
              icon={<MarketplaceIcon />}
            />
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white rounded-xl shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading as="h2" className="mb-4">How It Works</Heading>
            <p className="text-lg text-gray-600">
              Our intuitive platform makes it easy to plan and implement your solar energy system.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Input Your Location</h3>
                <p className="text-gray-600">Enter your address to get accurate sun positioning data for your specific location.</p>
              </div>
              <div>
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Calculate Your Needs</h3>
                <p className="text-gray-600">Use our evaluation tools to determine your energy requirements and ideal system size.</p>
              </div>
              <div>
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Find the Right Equipment</h3>
                <p className="text-gray-600">Browse our marketplace for the perfect solar equipment to match your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <Heading as="h2" className="text-white mb-4">Ready to Harness the Power of Solar?</Heading>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Join thousands of homeowners and professionals who are using SolarSight to optimize their solar energy systems.
            </p>
            {currentUser ? (
              <Link to="/marketplace">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-3 rounded-md text-lg"
                >
                  Browse Marketplace
                </Button>
              </Link>
            ) : (
              <Link to="/register">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-3 rounded-md text-lg"
                >
                  Get Started Today
                </Button>
              </Link>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-blue-600 text-xl font-bold">SolarSight</span>
              <p className="text-gray-500 mt-2">Empowering solar energy solutions</p>
            </div>
            <div className="flex gap-8">
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">About</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Contact</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Careers</a></li>
                  {currentUser && (
                    <li><Link to="/profile" className="text-gray-500 hover:text-blue-600">My Profile</Link></li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Blog</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Support</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Documentation</a></li>
                  {!currentUser && (
                    <>
                      <li><Link to="/login" className="text-gray-500 hover:text-blue-600">Log In</Link></li>
                      <li><Link to="/register" className="text-gray-500 hover:text-blue-600">Sign Up</Link></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SolarSight. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple icon components
// Added path links to the App's router
const routeLinks = {
  home: "/",
  login: "/login",
  register: "/register",
  profile: "/profile",
  calculator: "/calculator",
  marketplace: "/marketplace"
};

function CompassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
      <rect x="4" y="2" width="16" height="20" rx="2"></rect>
      <line x1="8" x2="16" y1="6" y2="6"></line>
      <line x1="16" x2="16" y1="14" y2="18"></line>
      <path d="M8 14h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M8 18h.01"></path>
      <path d="M12 18h.01"></path>
    </svg>
  );
}

function MarketplaceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}

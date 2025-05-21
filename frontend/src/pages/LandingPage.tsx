import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import heroImage from '../assets/hero-visualization.svg';

const LandingPage = () => {
  const { theme } = useTheme();

  // Feature items for the features section
  const features = [
    {
      title: 'Data Lineage',
      description: 'Track data flows across your entire ecosystem with interactive visualizations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
        </svg>
      ),
    },
    {
      title: 'Data Catalog',
      description: 'Discover, understand, and manage your data assets in one centralized place.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
    },
    {
      title: 'Data Alerts',
      description: 'Get notified of data quality issues and pipeline failures in real-time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Data Governance',
      description: 'Ensure compliance and enforce policies across your data landscape.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Code Documentation',
      description: 'Understand your codebase with AI-powered explanations and visualizations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  // Benefits section data
  const benefits = [
    {
      title: 'Improved Data Quality',
      description: 'Identify and fix data issues before they impact your business decisions.',
      icon: '📈',
    },
    {
      title: 'Reduced Downtime',
      description: 'Proactively monitor your data pipelines to prevent outages and failures.',
      icon: '⚡',
    },
    {
      title: 'Enhanced Compliance',
      description: 'Meet regulatory requirements with comprehensive data governance.',
      icon: '🔒',
    },
    {
      title: 'Faster Troubleshooting',
      description: 'Trace data issues to their source with end-to-end lineage visibility.',
      icon: '🔍',
    },
  ];

  // Customer logos (would be replaced with actual logos)
  const customers = [
    { name: 'Company A', logo: 'https://via.placeholder.com/150x50?text=Company+A' },
    { name: 'Company B', logo: 'https://via.placeholder.com/150x50?text=Company+B' },
    { name: 'Company C', logo: 'https://via.placeholder.com/150x50?text=Company+C' },
    { name: 'Company D', logo: 'https://via.placeholder.com/150x50?text=Company+D' },
    { name: 'Company E', logo: 'https://via.placeholder.com/150x50?text=Company+E' },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Header Navigation */}
      <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-primary-500">Duckcode Observability</span>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#features" className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-500">Features</a>
              <a href="#benefits" className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-500">Benefits</a>
              <a href="#testimonials" className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-500">Testimonials</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-500">
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-10 md:mt-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                <span className="text-primary-500">Visualize</span> and <span className="text-primary-500">understand</span> your data ecosystem
              </h1>
              <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                A comprehensive data observability platform that helps you track lineage, monitor quality, and ensure governance across your entire data landscape.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/register"
                  className="px-8 py-4 text-base font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Get Started Free
                </Link>
                <a
                  href="#features"
                  className="px-8 py-4 text-base font-medium rounded-lg text-primary-600 bg-white border border-primary-500 hover:bg-primary-50 transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={heroImage}
                alt="Data Lineage Visualization"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Powerful Features for Complete Data Observability
            </h2>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300">
              Everything you need to monitor, understand, and manage your data ecosystem
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Business Benefits
            </h2>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300">
              How Duckcode Observability drives value for your organization
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white dark:bg-neutral-700 rounded-xl shadow-md"
              >
                <div className="text-4xl mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Trusted By Industry Leaders
            </h2>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300">
              See what our customers are saying about Duckcode Observability
            </p>
          </div>

          <div className="mt-16">
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-8 bg-white dark:bg-neutral-800 shadow-lg">
              <p className="text-lg text-neutral-600 dark:text-neutral-300 italic">
                "Duckcode Observability has transformed how we manage our data quality. The ability to instantly trace lineage when issues arise has reduced our troubleshooting time by over 70%."
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Jane Doe
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Data Engineering Lead, Company A
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {customers.map((customer, index) => (
              <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-12 grayscale dark:grayscale-0 dark:brightness-75"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to transform your data observability?
          </h2>
          <p className="mt-4 text-xl text-primary-50 max-w-2xl mx-auto">
            Start your free trial today and see how Duckcode Observability can help you achieve better data quality and governance.
          </p>
          <div className="mt-10">
            <Link
              to="/register"
              className="px-8 py-4 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-lg font-bold text-white">Duckcode</span>
              </div>
              <p className="mt-4">
                Comprehensive data observability for modern data teams.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary-500">Features</a></li>
                <li><a href="#" className="hover:text-primary-500">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-500">Integrations</a></li>
                <li><a href="#" className="hover:text-primary-500">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary-500">Documentation</a></li>
                <li><a href="#" className="hover:text-primary-500">Blog</a></li>
                <li><a href="#" className="hover:text-primary-500">Community</a></li>
                <li><a href="#" className="hover:text-primary-500">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary-500">About</a></li>
                <li><a href="#" className="hover:text-primary-500">Careers</a></li>
                <li><a href="#" className="hover:text-primary-500">Privacy</a></li>
                <li><a href="#" className="hover:text-primary-500">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
            <p>&copy; {new Date().getFullYear()} Duckcode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
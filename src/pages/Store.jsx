import { useState } from 'react';
import { Code, Globe, Database, Zap, MessageCircle, CheckCircle, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    category: "Web Development",
    title: "Basic React.js Website",
    description: "Simple landing page or portfolio website built with React.js",
    features: [
      "Responsive design",
      "3-5 pages maximum",
      "Basic animations",
      "Contact form",
      "Mobile optimized"
    ],
    technologies: ["React.js", "CSS3", "HTML5", "JavaScript"],
    price: "$5",
    complexity: "Low",
    deliveryTime: "2-3 days",
    icon: <Globe size={32} />
  },
  {
    id: 2,
    category: "Web Development",
    title: "Advanced React.js Application",
    description: "Complex web application with multiple features and integrations",
    features: [
      "Custom React components",
      "State management (Redux/Context)",
      "API integrations",
      "User authentication",
      "Database connectivity",
      "Advanced animations"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    price: "$10",
    complexity: "High",
    deliveryTime: "5-7 days",
    icon: <Code size={32} />
  },
  {
    id: 3,
    category: "Web Development",
    title: "E-commerce React Store",
    description: "Full-featured online store with shopping cart and payment integration",
    features: [
      "Product catalog",
      "Shopping cart functionality",
      "Payment gateway integration",
      "User accounts",
      "Order management",
      "Admin dashboard"
    ],
    technologies: ["React.js", "Stripe API", "Firebase", "CSS3"],
    price: "$8-10",
    complexity: "Medium-High",
    deliveryTime: "4-6 days",
    icon: <Zap size={32} />
  },
  {
    id: 4,
    category: "Python Development",
    title: "Python Automation Script",
    description: "Custom automation scripts for repetitive tasks and workflows",
    features: [
      "File processing automation",
      "Web scraping capabilities",
      "Data analysis tools",
      "Email automation",
      "Task scheduling"
    ],
    technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
    price: "$5-7",
    complexity: "Low-Medium",
    deliveryTime: "1-3 days",
    icon: <Database size={32} />
  },
  {
    id: 5,
    category: "Python Development",
    title: "Flask Web Application",
    description: "Backend API or full-stack web application using Flask framework",
    features: [
      "RESTful API development",
      "Database integration",
      "User authentication",
      "File upload handling",
      "Email notifications",
      "Admin panel"
    ],
    technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL"],
    price: "$7-10",
    complexity: "Medium-High",
    deliveryTime: "4-6 days",
    icon: <Code size={32} />
  },
  {
    id: 6,
    category: "Python Development",
    title: "Data Analysis & Visualization",
    description: "Python scripts for data processing, analysis, and visualization",
    features: [
      "Data cleaning and preprocessing",
      "Statistical analysis",
      "Interactive charts and graphs",
      "Report generation",
      "Dashboard creation"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Plotly", "Jupyter"],
    price: "$6-9",
    complexity: "Medium",
    deliveryTime: "3-5 days",
    icon: <Database size={32} />
  }
];

export const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const categories = ["All", "Web Development", "Python Development"];

  const filteredServices = selectedCategory === "All"
    ? services
    : services.filter(service => service.category === selectedCategory);

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case "Low": return "var(--accent-notification)";
      case "Medium": return "var(--accent-highlight)";
      case "High": return "var(--accent-primary)";
      case "Low-Medium": return "var(--accent-notification)";
      case "Medium-High": return "var(--accent-primary)";
      default: return "var(--accent-highlight)";
    }
  };

  return (
    <div className="store-container">
      <div className="store-header">
        <h1 className="section-title">Services Store</h1>
        <p className="store-subtitle">Professional web development and Python automation services</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {filteredServices.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>

            <div className="service-content">
              <div className="service-category">{service.category}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="more-features">+{service.features.length - 3} more features</li>
                  )}
                </ul>
              </div>

              <div className="service-tech">
                {service.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="tech-badge more">+{service.technologies.length - 3}</span>
                )}
              </div>
            </div>

            <div className="service-footer">
              <div className="service-meta">
                <div className="complexity" style={{color: getComplexityColor(service.complexity)}}>
                  <Star size={16} />
                  {service.complexity}
                </div>
                <div className="delivery-time">{service.deliveryTime}</div>
              </div>

              <div className="service-pricing">
                <div className="price">{service.price}</div>
                <button className="order-btn">
                  <MessageCircle size={18} />
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="store-footer">
        <div className="contact-info">
          <h3>Ready to start your project?</h3>
          <p>Get in touch to discuss your requirements and receive a custom quote!</p>
          <div className="contact-methods">
            <span>📧 Email me for detailed discussion</span>
            <span>💬 Quick response within 24 hours</span>
            <span>🔄 Unlimited revisions until satisfied</span>
          </div>
        </div>
      </div>
    </div>
  );
}

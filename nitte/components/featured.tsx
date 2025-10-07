import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: "💬",
    status: "Active",
    title: "Legal Research",
    description:
      "AI-powered legal research and Q&A with intelligent document analysis",
    action: "Explore Module",
  },
  {
    id: 2,
    icon: "✍️",
    status: "Active",
    title: "Contract Drafting",
    description:
      "AI-assisted contract and clause drafting with smart suggestions",
    action: "Explore Module",
  },
  {
    id: 3,
    icon: "🔍",
    status: "Active",
    title: "Precedent Search",
    description:
      "Find similar clauses and compare precedents across your database",
    action: "Explore Module",
  },
  {
    id: 4,
    icon: "📅",
    status: "Active",
    title: "Chronology Builder",
    description:
      "Build timelines from documents and correspondence automatically",
    action: "Explore Module",
  },
  {
    id: 5,
    icon: "📋",
    status: "Active",
    title: "Contract Review",
    description: "Upload contracts and extract key terms with risk analysis",
    action: "Explore Module",
  },
  {
    id: 6,
    icon: "📊",
    status: "Active",
    title: "Bulk Document Analysis",
    description: "Review multiple contracts with AI-driven due diligence",
    action: "Explore Module",
  },
];

export default function Featured() {
  return (
    <div className="min-h-screen px-6 py-20 bg-neutral-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-eb-garamond">
            Powerful Legal AI Features
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Our suite of AI-powered tools transforms how legal professionals
            work, saving time and improving accuracy across your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{feature.icon}</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {feature.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-eb-garamond">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 font-poppins">
                {feature.description}
              </p>
              <button className="text-blue-600 font-medium font-poppins hover:text-blue-800 transition-colors duration-200 flex items-center">
                {feature.action}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-black text-white font-poppins border border-black px-8 py-3 rounded-md text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
            VIEW DESIGN SYSTEM
          </button>
        </div>
      </div>
    </div>
  );
}

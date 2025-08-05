import FinTech from "../../assets/fintech.png"
import Human from "../../assets/human.png"
import Portal from "../../assets/portal.png"
import Machine from "../../assets/machine.png"
import HRM from "../../assets/hrm.png"
import AI from "../../assets/ai.png"

const service = () => {
  const features = [
    { id: 1, image: FinTech, title: "Fintech Apps", text: "Build secure and innovative fintech applications for mobile banking, payments, and financial management."},
    { id: 2, image: Human, title: "Human Resource Solutions", text: "Optimize your human resource strategies with our expert consulting services, covering talent acquisition, training, and development."},
    { id: 3, image: Portal, title: "School Portal", text: "Develop a comprehensive school portal for efficient management of student data, communication, and online learning"},
    { id: 4, image: Machine, title: "Machine Learning", text: "Build intelligent systems. Develop custom machine learning models for predictive analytics, data-driven decision-making, and automation."},
    { id: 5, image: HRM, title: "HRM Systems", text: "Streamline your HR processes with our efficient HRM system, covering payroll, recruitment, performance management, and more."},
    { id: 6, image: AI, title: "Custom Software & App Development", text: "We develop powerful, scalable, and user-friendly applications tailored to meet the specific needs of businesses and individuals."},
  ];

  return (
    <div className='bg-[#f2f2f2] pt-32 text-center pb-20'>
      <h1 className="text-3xl font-bold mb-10 text-[#97b088]">Services We Offer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-5 md:px-20 lg:px-40">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white p-6 text-center shadow rounded-lg">
            <img src={feature.image} className="w-20 h-20 mx-auto mb-4" alt={feature.title} />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default service;


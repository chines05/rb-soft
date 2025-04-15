import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function NavMobile({ isOpen, onClose }) {
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden fixed top-[70px] left-0 right-0 z-40 bg-[#2f239c] bg-opacity-95 backdrop-blur-sm px-6 py-6 shadow-lg rounded-b-2xl"
        >
          <motion.div className="flex flex-col space-y-4">
            {[
              { to: "inicio", label: "Início" },
              { to: "solucoes", label: "Soluções" },
              { to: "sobre", label: "Sobre Nós" },
              { to: "clientes", label: "Clientes" },
              { to: "parcerias", label: "Parcerias" },
            ].map((item, index) => (
              <motion.div key={item.to} variants={itemVariants} custom={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-white text-lg font-semibold hover:text-[#00ffc3] transition-colors duration-200 cursor-pointer block py-2"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

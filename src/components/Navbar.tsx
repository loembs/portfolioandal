import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
        ANDAL <span className="font-light italic text-muted-foreground">créative</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
        <a href="#projets" className="hover:text-foreground transition-colors">Projets</a>
        <a href="#apropos" className="hover:text-foreground transition-colors">À propos</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <a
        href="#contact"
        className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-display font-medium hover:bg-foreground/90 transition-colors"
      >
        Discutons
      </a>
    </motion.nav>
  );
};

export default Navbar;

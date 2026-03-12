import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-32 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">À propos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expertise en développement web & mobile
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            ANDAL créative est spécialisée dans la conception et le développement d'applications web et mobiles performantes. Nous transformons vos idées en solutions digitales concrètes.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            React, React Native, Node.js, WordPress — nous maîtrisons les technologies modernes pour livrer des produits de qualité, dans les délais.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

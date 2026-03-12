import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "8", label: "Années d'expérience" },
  { value: "30+", label: "Clients satisfaits" },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-32 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-6 rounded-lg bg-card border border-border/50 card-shadow"
            >
              <p className="font-display text-3xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

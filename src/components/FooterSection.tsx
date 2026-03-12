import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Un projet en tête ?
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-md mx-auto">
            Parlons de votre prochain projet web ou mobile.
          </p>
          <a
            href="mailto:hello@andal-creative.com"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:bg-foreground/90 transition-colors"
          >
            hello@andal-creative.com
          </a>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm font-bold text-foreground">
          ANDAL <span className="font-light italic text-muted-foreground">créative</span>
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 ANDAL créative. Tous droits réservés.
        </p>
      </div>
    </section>
  );
};

export default FooterSection;

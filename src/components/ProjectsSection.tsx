import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const data = {
  bio: "Une sélection de projets web en production, conçus pour des clients exigeants. Chaque projet reflète mes compétences en développement frontend, backend et en gestion de produit.",
  webTitle: "Développement Web",
  iaTitle: "Automatisation & IA",
  items: [
    { id: 1, title: "Art & culture éthiopienne", description: "Site e-commerce mettant en valeur l'art et la culture éthiopienne.", tech: ["React", "Tailwind", "Spring Boot"], link: "https://www.geezacultures.com", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950174/site1_bkgifd.png", gradient: "green-text-gradient" },
    { id: 2, title: "ANDAL CREATIVE", description: "Site professionnel pour une agence créative, orienté storytelling et image de marque.", tech: ["Spring Boot", "PostgreSQL", "React"], link: "https://www.andalcreative.com", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950174/site2_shp2pt.png", gradient: "blue-text-gradient" },
    { id: 3, title: "Apple Store", description: "Boutique en ligne inspirée de l'univers Apple, avec une expérience produit fluide.", tech: ["React", "Node.js", "MongoDB"], link: "https://www.istar-dakar.net/", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950174/site3_ajibvs.png", gradient: "pink-text-gradient" },
    { id: 4, title: "Loumo Store", description: "E-commerce de vêtements et accessoires, pensé pour la conversion.", tech: ["React", "Java", "MongoDB"], link: "https://loumo-frontend-kd7v.vercel.app", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950178/site4_k1gutg.png", gradient: "orange-text-gradient" },
    { id: 5, title: "Studio Hub", description: "Plateforme de gestion de projet, rendez-vous et facturation en temps réel.", tech: ["Angular", "Java", "PostgreSQL", "Supabase"], link: "https://studio-hub-5vlw.vercel.app", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950172/site5_hggj27.png", gradient: "yellow-text-gradient" },
    { id: 6, title: "Green Workspace", description: "Tableau de bord interne pour la gestion de flotte et de données métier.", tech: ["React", "Vite", "PostgreSQL", "Supabase"], link: "https://greenmobility-workflow.vercel.app", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1764164995/greenmobility_01_bto4i7.png", gradient: "green-text-gradient" },
    { id: 9, title: "Memoukke AS Conseil", description: "Site vitrine pour une agence de conseil en communication et affaires publiques, avec une identité visuelle soignée.", tech: ["React", "Supabase", "Tailwind"], link: "https://memoukke-site.vercel.app/", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1773091585/sitememoukke_a417sh.png", gradient: "blue-text-gradient" },
    { id: 10, title: "Prisme — Le média", description: "Plateforme d'information en ligne avec gestion éditoriale, articles et newsletters pour éclairer l'actualité.", tech: ["React", "Supabase", "Tailwind"], link: "https://prisme-three.vercel.app/", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1773091581/site_prisme_gbullq.png", gradient: "orange-text-gradient" }   
  ],
  iaItems: [
    { id: 7, title: "Calendly Block", description: "Automatisation de la gestion des événements et prise de notes de réunion grâce à l'IA.", tech: ["n8n", "IA"], link: "https://studio-hub-5vlw.vercel.app", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1763941590/ia01_kpqtnq.png", gradient: "blue-text-gradient" },
    { id: 8, title: "Organisation de tâches intelligente", description: "Orchestration entre vos applications pour questionner un chatbot sur toutes vos données.", tech: ["n8n", "IA"], link: "https://studio-hub-5vlw.vercel.app", image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1763941590/ia02_wqbvqv.png", gradient: "pink-text-gradient" },
  ],
};

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos réalisations
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl leading-relaxed">{data.bio}</p>
        </motion.div>

        {/* Développement Web */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-8"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground">{data.webTitle}</h3>
          <div className="mt-2 h-px w-16 bg-gradient-to-r from-sky-400 to-violet-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>

        {/* Automatisation & IA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-8"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground">{data.iaTitle}</h3>
          <div className="mt-2 h-px w-16 bg-gradient-to-r from-pink-400 to-orange-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.iaItems.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

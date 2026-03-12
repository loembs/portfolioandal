import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  gradient: string;
  index: number;
}

const gradientMap: Record<string, string> = {
  "green-text-gradient": "from-emerald-400 to-green-600",
  "blue-text-gradient": "from-sky-400 to-blue-600",
  "pink-text-gradient": "from-pink-400 to-rose-600",
  "orange-text-gradient": "from-orange-400 to-amber-600",
  "yellow-text-gradient": "from-yellow-400 to-orange-500",
};

const ProjectCard = ({ title, description, tech, link, image, gradient, index }: ProjectCardProps) => {
  const gradientClass = gradientMap[gradient] ?? "from-violet-400 to-purple-600";

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer border border-border/50 bg-card flex flex-col"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-display text-lg font-semibold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            {title}
          </h3>
          <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors mt-0.5" />
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tech.map(t => (
            <span key={t} className="px-2.5 py-0.5 rounded-full border border-border text-xs font-body text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;

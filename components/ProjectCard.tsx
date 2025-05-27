import { Project } from "@/types";

import styles from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;

# touched on 2025-05-27T16:49:20.807533Z
# touched on 2025-05-27T16:49:24.418491Z
# touched on 2025-05-27T16:50:10.169264Z
# touched on 2025-05-27T16:50:34.477391Z
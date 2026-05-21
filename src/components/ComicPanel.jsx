import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StoryVisual from './StoryVisual.jsx';

export default function ComicPanel({ panel, index }) {
  return (
    <motion.article
      className={`comic-panel stage-card-${panel.stage}`}
      initial={{ opacity: 0, y: 52, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link className="panel-link" to={`/chapter/${panel.id}`}>
        <div className="panel-number">{String(index + 1).padStart(2, '0')}</div>
        <StoryVisual
          image={panel.image}
          title={panel.title}
          visual={panel.visual}
          stage={panel.stage}
          gradient={panel.gradient}
        />
        <div className="panel-copy">
          <p className="chapter-label">{panel.chapter}</p>
          <h2>{panel.title}</h2>
          <p>{panel.coverText}</p>
          <span className="read-more">阅读这一章</span>
        </div>
      </Link>
    </motion.article>
  );
}

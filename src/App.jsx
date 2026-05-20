import { motion } from 'framer-motion';
import ComicPanel from './components/ComicPanel.jsx';
import { cover, storyPanels, themeLine } from './data/storyData.js';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="cover-section">
        <motion.div
          className="cover-art"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="cover-sky" aria-hidden="true">
            <span className="cover-sun" />
            <span className="cover-tree left">🌲</span>
            <span className="cover-tree right">🌳</span>
            <span className="cover-fox">🦊</span>
          </div>
        </motion.div>
        <motion.div
          className="cover-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
        >
          <p className="cover-kicker">Healing Webtoon</p>
          <h1>{cover.title}</h1>
          <p>{cover.subtitle}</p>
        </motion.div>
      </section>

      <section className="story-flow" aria-label="漫画章节">
        {storyPanels.map((panel, index) => (
          <ComicPanel panel={panel} index={index} key={panel.id} />
        ))}
      </section>

      <motion.section
        className="ending-section"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p>{themeLine}</p>
        <button type="button" onClick={scrollToTop}>
          重新阅读
        </button>
      </motion.section>
    </main>
  );
}

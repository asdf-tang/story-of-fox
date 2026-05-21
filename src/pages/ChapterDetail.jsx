import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import StoryVisual from '../components/StoryVisual.jsx';
import SceneIllustration from '../components/SceneIllustration.jsx';
import { chapters, getChapterById } from '../data/storyData.js';

function SceneCard({ scene, chapter, index }) {
  return (
    <motion.article
      className="scene-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="scene-visual-frame">
        <SceneIllustration
          chapterId={chapter.id}
          sceneId={scene.id}
          mood={scene.emotion}
          palette={scene.palette}
          visualDescription={scene.visualDescription}
          image={scene.image}
          illustrationType={scene.illustrationType}
        />
      </div>
      <div className="scene-copy">
        <p className="chapter-label">Scene {String(index + 1).padStart(2, '0')}</p>
        <h2>{scene.title}</h2>
        <p className="scene-text">{scene.text}</p>
        <div className="tag-row">
          <span>{scene.emotion}</span>
          <span>{scene.palette}</span>
        </div>
        <details className="scene-description-toggle">
          <summary>查看画面描述</summary>
          <p>{scene.visualDescription}</p>
        </details>
      </div>
    </motion.article>
  );
}

function MissingChapter() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <p className="cover-kicker">Lost Chapter</p>
        <h1>这片森林里还没有这一章。</h1>
        <p>这个章节还没有被小狐狸走到。回到目录看看已经完成的十章吧。</p>
        <Link className="detail-button primary" to="/">
          返回首页
        </Link>
      </section>
    </main>
  );
}

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const chapter = getChapterById(chapterId);

  if (!chapter) {
    return <MissingChapter />;
  }

  const previous = chapters.find((item) => item.id === chapter.id - 1);
  const next = chapters.find((item) => item.id === chapter.id + 1);

  return (
    <main className={`detail-page detail-stage-${chapter.stage}`}>
      <motion.header
        className="detail-hero"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Link className="back-link" to="/">
          返回目录
        </Link>
        <div className="detail-hero-grid">
          <div className="detail-hero-copy">
            <p className="chapter-label">{chapter.chapter}</p>
            <h1>{chapter.title}</h1>
            <p className="detail-subtitle">{chapter.subtitle}</p>
            <p className="detail-summary">{chapter.summary}</p>
            <div className="tag-row">
              <span>{chapter.mood}</span>
              {chapter.palette.map((color) => (
                <span key={color}>{color}</span>
              ))}
            </div>
          </div>
          <div className="detail-hero-art">
            <StoryVisual
              image={chapter.image}
              title={chapter.title}
              visual={chapter.visual}
              stage={chapter.stage}
              gradient={chapter.gradient}
              className="detail-visual hero-visual"
            />
          </div>
        </div>
        <div className="hero-visual-description">
          <span>画面描述</span>
          <p>{chapter.heroVisual}</p>
        </div>
      </motion.header>

      <section className="scene-list" aria-label={`${chapter.title} 分场景`}>
        {chapter.scenes.map((scene, index) => (
          <SceneCard
            scene={scene}
            chapter={chapter}
            index={index}
            key={scene.id}
          />
        ))}
      </section>

      <nav className="chapter-nav" aria-label="章节导航">
        {previous ? (
          <Link className="detail-button" to={`/chapter/${previous.id}`}>
            上一章
            <span>{previous.title}</span>
          </Link>
        ) : (
          <span className="detail-button disabled">上一章</span>
        )}
        <Link className="detail-button primary" to="/">
          返回目录
        </Link>
        {next ? (
          <Link className="detail-button" to={`/chapter/${next.id}`}>
            下一章
            <span>{next.title}</span>
          </Link>
        ) : (
          <span className="detail-button disabled">下一章</span>
        )}
      </nav>
    </main>
  );
}

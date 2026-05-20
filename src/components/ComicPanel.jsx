import { motion } from 'framer-motion';

const visualMap = {
  forest: (
    <>
      <span className="forest-canopy" />
      <span className="scene-emoji fox">🦊</span>
      <span className="scene-emoji tree tree-left">🌲</span>
      <span className="scene-emoji tree tree-right">🌳</span>
      <span className="sun-orb" />
      <span className="path-ribbon" />
    </>
  ),
  dog: (
    <>
      <span className="path-ribbon" />
      <span className="scene-emoji fox fox-small">🦊</span>
      <span className="scene-emoji friend">🐶</span>
      <span className="scene-emoji prop bone">🦴</span>
    </>
  ),
  sheep: (
    <>
      <span className="scene-emoji fox fox-small">🦊</span>
      <span className="scene-emoji friend">🐑</span>
      <span className="grass-line" />
    </>
  ),
  butterfly: (
    <>
      <span className="scene-emoji fox fox-small">🦊</span>
      <span className="scene-emoji butterfly one">🦋</span>
      <span className="scene-emoji butterfly two">🦋</span>
      <span className="sparkles">✦ ✧ ✦</span>
    </>
  ),
  cave: (
    <>
      <span className="cave-mouth" />
      <span className="cave-shadow" />
      <span className="scene-emoji fox cave-fox">🦊</span>
      <span className="glow-dot one" />
      <span className="glow-dot two" />
    </>
  ),
  wind: (
    <>
      <span className="cave-mouth cave-soft" />
      <span className="scene-emoji fox fox-small">🦊</span>
      <span className="wind-line first" />
      <span className="wind-line second" />
      <span className="wind-line third" />
    </>
  ),
  'lake-door': (
    <>
      <span className="lake" />
      <span className="door-glow" />
      <span className="slipper-door">🩴</span>
      <span className="scene-emoji fox lake-fox">🦊</span>
    </>
  ),
  rabbit: (
    <>
      <span className="moon" />
      <span className="dream-cloud" />
      <span className="scene-emoji fox fox-small">🦊</span>
      <span className="scene-emoji friend">🐰</span>
    </>
  ),
  suns: (
    <>
      <span className="sunburst" />
      <span className="scene-emoji friend rabbit-sun">🐰</span>
      <span className="scene-emoji fox sun-fox">🦊</span>
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          className="mini-sun"
          style={{ '--i': index }}
          key={`sun-${index}`}
        />
      ))}
    </>
  ),
  home: (
    <>
      <span className="home-hill" />
      <span className="home-light" />
      <span className="scene-emoji fox">🦊</span>
      <span className="heart-light">♡</span>
    </>
  ),
};

function PlaceholderVisual({ panel }) {
  if (panel.image) {
    return <img src={panel.image} alt={panel.title} className="panel-image" />;
  }

  return (
    <div
      className={`visual-stage stage-${panel.stage} bg-gradient-to-br ${panel.palette}`}
      aria-hidden="true"
    >
      <div className="paper-speckles" />
      {visualMap[panel.visual]}
    </div>
  );
}

export default function ComicPanel({ panel, index }) {
  return (
    <motion.article
      className={`comic-panel stage-card-${panel.stage}`}
      initial={{ opacity: 0, y: 52, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="panel-number">{String(index + 1).padStart(2, '0')}</div>
      <PlaceholderVisual panel={panel} />
      <div className="panel-copy">
        <p className="chapter-label">{panel.chapter}</p>
        <h2>{panel.title}</h2>
        <p>{panel.text}</p>
      </div>
    </motion.article>
  );
}

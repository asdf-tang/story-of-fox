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

export default function StoryVisual({
  image,
  title,
  visual = 'forest',
  stage = 'forest',
  gradient = 'from-[#f8c271] via-[#f9e3a6] to-[#83ad62]',
  className = '',
}) {
  if (image) {
    return <img src={image} alt={title} className={`panel-image ${className}`} />;
  }

  return (
    <div
      className={`visual-stage stage-${stage} bg-gradient-to-br ${gradient} ${className}`}
      aria-hidden="true"
    >
      <div className="paper-speckles" />
      {visualMap[visual] ?? visualMap.forest}
    </div>
  );
}

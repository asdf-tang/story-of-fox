const sceneConfigs = {
  forest_entrance: {
    theme: 'forest',
    fox: 'small center',
    trees: ['left tall', 'right tall', 'back'],
    path: 'long',
    sun: true,
  },
  long_forest_path: {
    theme: 'forest',
    fox: 'tiny far',
    trees: ['left tall', 'right tall', 'back dense'],
    path: 'winding',
    leaves: true,
  },
  meet_dog: {
    theme: 'forest',
    fox: 'small left',
    dog: 'jump right',
    trees: ['back'],
    leaves: true,
    burst: true,
  },
  dog_finds_path: {
    theme: 'forest',
    fox: 'small right',
    dog: 'sniff left',
    path: 'hidden',
    leaves: true,
  },
  warm_house_bone: {
    theme: 'house',
    house: true,
    dog: 'bright',
    bone: 'large',
    steam: true,
  },
  dog_choice: {
    theme: 'house',
    house: true,
    dog: 'gate',
    fox: 'small left',
    path: 'split',
  },
  fox_asks_dog: {
    theme: 'house',
    house: true,
    dog: 'shy right',
    fox: 'question left',
    speech: true,
  },
  fox_walks_alone: {
    theme: 'lonelyForest',
    house: true,
    dog: 'gate small',
    fox: 'alone far',
    path: 'deep',
  },
  misty_sheep: {
    theme: 'meadow',
    fox: 'small left',
    sheep: 'mist right',
    mist: true,
  },
  dewy_hill: {
    theme: 'meadow',
    fox: 'walk left',
    sheep: 'walk right',
    hill: true,
    dew: true,
  },
  meadow_arrival: {
    theme: 'meadow',
    fox: 'watch left',
    sheep: 'eat right',
    field: true,
  },
  sheep_stays: {
    theme: 'meadowMuted',
    fox: 'sad left',
    sheep: 'nuzzle right',
    field: true,
  },
  butterfly_arrival: {
    theme: 'flowers',
    fox: 'small left',
    butterflies: 2,
    flowers: true,
  },
  butterfly_story: {
    theme: 'flowers',
    fox: 'listen left',
    butterflies: 1,
    flowers: true,
    wind: true,
    sparkles: true,
  },
  flower_sea: {
    theme: 'flowersBright',
    fox: 'watch left',
    butterflies: 1,
    bigFlower: true,
  },
  fox_deeper_forest: {
    theme: 'deepForest',
    fox: 'alone right',
    butterflies: 1,
    flowers: true,
    shadowPath: true,
  },
  falling_cave: {
    theme: 'cave',
    fox: 'falling',
    caveOpening: true,
    rocks: true,
  },
  cave_echo: {
    theme: 'cave',
    fox: 'calling center',
    echoes: true,
    rocks: true,
  },
  fox_falls: {
    theme: 'cave',
    fox: 'fallen',
    mud: true,
    rocks: true,
  },
  fox_curls_rock: {
    theme: 'caveDark',
    fox: 'curled',
    rock: true,
    pressure: true,
  },
  tiny_wind: {
    theme: 'caveBlue',
    fox: 'ears center',
    wind: true,
  },
  looking_for_exit: {
    theme: 'caveBlue',
    fox: 'looking center',
    eyeLight: true,
    wind: true,
  },
  step_by_step: {
    theme: 'caveBlue',
    fox: 'walking',
    steps: true,
    rocks: true,
  },
  light_ahead: {
    theme: 'caveExit',
    fox: 'towardLight',
    exitLight: true,
  },
  lake_outside_cave: {
    theme: 'lake',
    fox: 'shore left',
    caveOpening: true,
    lake: true,
  },
  swimming_lake: {
    theme: 'lake',
    fox: 'swim center',
    lake: true,
    warmLight: true,
  },
  slipper_door: {
    theme: 'lakeWarm',
    fox: 'small left',
    lake: true,
    slipperDoor: true,
  },
  safe_sleep: {
    theme: 'room',
    fox: 'sleep',
    lamp: true,
    food: true,
    mat: true,
  },
  new_friends: {
    theme: 'room',
    fox: 'friends center',
    friends: ['hedgehog', 'turtle', 'squirrel', 'rabbit'],
  },
  rabbit_play: {
    theme: 'play',
    fox: 'run left',
    rabbit: 'run right',
    puddle: true,
    clouds: true,
  },
  storm_nightmare: {
    theme: 'storm',
    fox: 'dream',
    lightning: true,
    caveOpening: true,
  },
  corner_fox: {
    theme: 'stormRoom',
    fox: 'corner',
    rabbit: 'door',
    shadow: true,
  },
  nobody_loves_me: {
    theme: 'stormRoom',
    fox: 'sad left',
    rabbit: 'listening right',
    shadow: true,
  },
  angry_rabbit: {
    theme: 'sunWarm',
    fox: 'startled left',
    rabbit: 'angry jump',
    lightningEars: true,
  },
  not_unlove: {
    theme: 'memory',
    rabbit: 'talk center',
    memories: ['bone', 'meadow', 'flower'],
  },
  love_in_heart: {
    theme: 'sunWarm',
    fox: 'heart center',
    rabbit: 'kneel right',
    heartGlow: true,
  },
  still_curled: {
    theme: 'softGray',
    fox: 'curled center',
    rabbit: 'busy',
    music: true,
  },
  ten_suns: {
    theme: 'sunBurst',
    fox: 'curled center',
    rabbit: 'right',
    suns: 10,
  },
  red_fox: {
    theme: 'sunBurst',
    fox: 'red center',
    rabbit: 'happy right',
    suns: 10,
  },
  darkness_returns: {
    theme: 'quietLake',
    fox: 'red window',
    stormCloud: true,
  },
  brave_with_fear: {
    theme: 'quietLake',
    fox: 'red shore',
    reflection: true,
  },
  each_world: {
    theme: 'collage',
    memories: ['bone', 'meadow', 'flower', 'door'],
  },
  love_collected: {
    theme: 'heartMemory',
    fox: 'red center',
    memories: ['dog', 'sheep', 'butterfly', 'rabbit'],
    heartGlow: true,
  },
  self_love: {
    theme: 'finale',
    fox: 'red center',
    rabbit: 'happy right',
    friends: ['hedgehog', 'turtle', 'squirrel'],
    lake: true,
    slipperDoor: true,
  },
};

const themeClass = {
  forest: 'illus-forest',
  lonelyForest: 'illus-lonely-forest',
  house: 'illus-house',
  meadow: 'illus-meadow',
  meadowMuted: 'illus-meadow muted',
  flowers: 'illus-flowers',
  flowersBright: 'illus-flowers bright',
  deepForest: 'illus-deep-forest',
  cave: 'illus-cave',
  caveDark: 'illus-cave dark',
  caveBlue: 'illus-cave blue',
  caveExit: 'illus-cave exit',
  lake: 'illus-lake',
  lakeWarm: 'illus-lake warm',
  room: 'illus-room',
  play: 'illus-play',
  storm: 'illus-storm',
  stormRoom: 'illus-storm-room',
  sunWarm: 'illus-sun-warm',
  memory: 'illus-memory',
  softGray: 'illus-soft-gray',
  sunBurst: 'illus-sun-burst',
  quietLake: 'illus-quiet-lake',
  collage: 'illus-collage',
  heartMemory: 'illus-heart-memory',
  finale: 'illus-finale',
};

function has(config, key) {
  return Boolean(config[key]);
}

function Character({ type, variant = '' }) {
  const icon = {
    fox: '🦊',
    redFox: '🦊',
    dog: '🐶',
    sheep: '🐑',
    rabbit: '🐰',
    hedgehog: '🦔',
    turtle: '🐢',
    squirrel: '🐿️',
    butterfly: '🦋',
  }[type];

  return <span className={`illus-character ${type} ${variant}`}>{icon}</span>;
}

function MemoryBubble({ type, index }) {
  const icon = {
    bone: '🦴',
    meadow: '🌿',
    flower: '🌸',
    door: '🩴',
    dog: '🐶',
    sheep: '🐑',
    butterfly: '🦋',
    rabbit: '🐰',
  }[type];

  return (
    <span className={`memory-bubble bubble-${index}`}>
      {icon}
    </span>
  );
}

function Suns({ count = 10 }) {
  return Array.from({ length: count }).map((_, index) => (
    <span className="illus-sun-dot" style={{ '--i': index }} key={index} />
  ));
}

function SceneShapes({ config }) {
  return (
    <>
      {has(config, 'sun') && <span className="illus-sun" />}
      {has(config, 'house') && <span className="illus-house-shape" />}
      {has(config, 'steam') && <span className="illus-steam">⌇⌇</span>}
      {has(config, 'bone') && <span className="illus-bone">🦴</span>}
      {has(config, 'path') && <span className={`illus-path ${config.path}`} />}
      {has(config, 'leaves') && <span className="illus-leaves">🍂 🍁</span>}
      {has(config, 'mist') && <span className="illus-mist" />}
      {has(config, 'hill') && <span className="illus-hill" />}
      {has(config, 'dew') && <span className="illus-dew" />}
      {has(config, 'field') && <span className="illus-field" />}
      {has(config, 'flowers') && <span className="illus-flower-bed">✿ ✾ ✿</span>}
      {has(config, 'bigFlower') && <span className="illus-big-flower">✿</span>}
      {has(config, 'wind') && <span className="illus-wind-lines" />}
      {has(config, 'sparkles') && <span className="illus-sparkles">✦ ✧</span>}
      {has(config, 'caveOpening') && <span className="illus-cave-opening" />}
      {has(config, 'rocks') && <span className="illus-rocks" />}
      {has(config, 'echoes') && <span className="illus-echoes" />}
      {has(config, 'mud') && <span className="illus-mud" />}
      {has(config, 'rock') && <span className="illus-big-rock" />}
      {has(config, 'pressure') && <span className="illus-pressure" />}
      {has(config, 'eyeLight') && <span className="illus-eye-light" />}
      {has(config, 'steps') && <span className="illus-steps" />}
      {has(config, 'exitLight') && <span className="illus-exit-light" />}
      {has(config, 'lake') && <span className="illus-lake-water" />}
      {has(config, 'warmLight') && <span className="illus-warm-light" />}
      {has(config, 'slipperDoor') && <span className="illus-slipper-door">🩴</span>}
      {has(config, 'lamp') && <span className="illus-lamp" />}
      {has(config, 'food') && <span className="illus-food">🍲</span>}
      {has(config, 'mat') && <span className="illus-mat" />}
      {has(config, 'puddle') && <span className="illus-puddle" />}
      {has(config, 'clouds') && <span className="illus-clouds" />}
      {has(config, 'lightning') && <span className="illus-lightning">ϟ</span>}
      {has(config, 'shadow') && <span className="illus-room-shadow" />}
      {has(config, 'lightningEars') && <span className="illus-lightning-ears">ϟ ϟ</span>}
      {has(config, 'heartGlow') && <span className="illus-heart-glow">♡</span>}
      {has(config, 'music') && <span className="illus-music">♪ ♫</span>}
      {has(config, 'stormCloud') && <span className="illus-storm-cloud" />}
      {has(config, 'reflection') && <span className="illus-reflection" />}
      {has(config, 'suns') && <Suns count={config.suns} />}
    </>
  );
}

function SceneCharacters({ config }) {
  return (
    <>
      {config.fox && (
        <Character
          type={config.fox.includes('red') ? 'redFox' : 'fox'}
          variant={config.fox}
        />
      )}
      {config.dog && <Character type="dog" variant={config.dog} />}
      {config.sheep && <Character type="sheep" variant={config.sheep} />}
      {config.rabbit && <Character type="rabbit" variant={config.rabbit} />}
      {config.butterflies &&
        Array.from({ length: config.butterflies }).map((_, index) => (
          <Character
            type="butterfly"
            variant={`butterfly-${index + 1}`}
            key={index}
          />
        ))}
      {config.friends?.map((friend, index) => (
        <Character type={friend} variant={`friend-${index}`} key={friend} />
      ))}
      {config.memories?.map((memory, index) => (
        <MemoryBubble type={memory} index={index} key={`${memory}-${index}`} />
      ))}
    </>
  );
}

export default function SceneIllustration({
  chapterId,
  sceneId,
  mood,
  palette,
  visualDescription,
  image,
  illustrationType,
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={visualDescription}
        className="scene-illustration-image"
      />
    );
  }

  const config = sceneConfigs[illustrationType] ?? sceneConfigs.forest_entrance;
  const theme = themeClass[config.theme] ?? themeClass.forest;

  return (
    <figure
      className={`scene-illustration ${theme}`}
      aria-label={visualDescription}
      title={visualDescription}
      data-chapter={chapterId}
      data-scene={sceneId}
      data-mood={mood}
      data-palette={palette}
    >
      <div className="scene-illustration-paper" />
      <SceneShapes config={config} />
      <SceneCharacters config={config} />
    </figure>
  );
}

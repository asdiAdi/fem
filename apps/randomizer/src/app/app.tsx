import classNames from 'classnames';
import { useState } from 'react';
const FRONTEND_FRAMEWORK = ['None', 'React', 'NextJs', 'Vue', 'Nuxt'] as const; // Svelte, Solid JS, Qwik, Remix;
const CSS_PREPROCESSORS = ['None', 'Sass', 'PostCSS'] as const;
const CSS_LIBRARY = [
  'None',
  'Tailwind',
  'Bootstrap',
  'MUI',
  'Chakra',
  'Emotion',
  'Styled JSX',
  'Styled Components',
] as const;
const ANIMATION_LIBRARY = ['None', 'Framer Motion', 'React-Spring'] as const;
const TESTING = ['None', 'Cypress', 'Jest'] as const; //Playwright Vitest
const MISC = ['None', 'Zustand', 'Redux', 'ThreeJs'] as const;

const FRONTEND_STACK = {
  FRONTEND_FRAMEWORK,
  CSS_PREPROCESSORS,
  CSS_LIBRARY,
  ANIMATION_LIBRARY,
  TESTING,
  MISC,
} as const;

const FRONTEND_STACK_KEYS = Object.keys(FRONTEND_STACK) as Array<
  keyof typeof FRONTEND_STACK
>;

// type FrontendStack = {
//   Frontend_Framework: typeof FRONTEND_FRAMEWORK;
//   Css_Preprocessors: typeof CSS_PREPROCESSORS;
//   Css_Library: typeof CSS_LIBRARY;
//   Animation_Library: typeof CSS_LIBRARY;
//   Testing: typeof TESTING;
//   Misc: typeof MISC;
// };

type Stack = {
  [name in keyof typeof FRONTEND_STACK]: number;
};

const stackInit = {
  FRONTEND_FRAMEWORK: 0,
  CSS_PREPROCESSORS: 0,
  CSS_LIBRARY: 0,
  ANIMATION_LIBRARY: 0,
  TESTING: 0,
  MISC: 0,
};

function genRanNum(name: keyof typeof FRONTEND_STACK): {
  [output: keyof typeof FRONTEND_STACK]: number;
} {
  return { [name]: Math.random() * FRONTEND_STACK[name].length };
}

export function App() {
  const [test, setTest] = useState(false);
  const [stack, setStack] = useState<Stack>(stackInit);

  const generateRandomStack = () => {
    setStack({
      ...genRanNum('FRONTEND_FRAMEWORK'),
      ...genRanNum('CSS_PREPROCESSORS'),
      ...genRanNum('CSS_LIBRARY'),
      ...genRanNum('ANIMATION_LIBRARY'),
      ...genRanNum('TESTING'),
      ...genRanNum('MISC'),
    });

    console.log(
      Object.fromEntries(
        FRONTEND_STACK_KEYS.map((key) => [
          key,
          Math.floor(Math.random() * FRONTEND_STACK[key].length),
        ])
      )
    );
  };
  return (
    <div className="w-screen h-screen bg-amber-100">
      <div className="h-4/5 w-full flex justify-around items-center">
        {FRONTEND_STACK_KEYS.map((key) => (
          <div
            key={key}
            className="p-6 bg-blue-400 text-center flex flex-col justify-center items-center rounded"
          >
            {FRONTEND_STACK[key].map((stackKey) => (
              <span
                key={stackKey}
                className={classNames('p-0.5 m-0.5 text-lg rounded w-full', {
                  'bg-fuchsia-300': test,
                })}
              >
                {stackKey}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-emerald-400 rounded-2xl p-2 text-white font-bold"
          onClick={() => setTest(!test)}
        >
          Randomize!
        </button>
      </div>
    </div>
  );
}

export default App;

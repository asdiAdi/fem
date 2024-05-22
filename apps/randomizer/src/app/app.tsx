import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
const FRONTEND_FRAMEWORK = ['None', 'React', 'NextJs', 'Vue', 'Nuxt'] as const; // Svelte, Solid JS, Qwik, Remix;
const CSS_PREPROCESSORS = ['None', 'Sass', 'PostCSS'] as const;
const CSS_LIBRARY = [
  'None',
  'Tailwind',
  'Bootstrap',
  'Emotion',
  'Styled JSX',
  'Styled Components',
] as const;
const CSS_COMPONENT = ['None', 'MUI', 'Chakra', 'Daisy UI', 'Tailwind UI'];
const ANIMATION_LIBRARY = ['None', 'Framer Motion', 'React-Spring'] as const;
const TESTING = ['None', 'Cypress', 'Jest'] as const; //Playwright Vitest
const MISC = ['None', 'Zustand', 'Redux', 'ThreeJs'] as const;

const FRONTEND_STACK = {
  FRONTEND_FRAMEWORK,
  CSS_PREPROCESSORS,
  CSS_LIBRARY,
  CSS_COMPONENT,
  ANIMATION_LIBRARY,
  TESTING,
  MISC,
} as const;

const FRONTEND_STACK_KEYS = Object.keys(FRONTEND_STACK) as Array<
  keyof typeof FRONTEND_STACK
>;

type Stack = {
  [name in keyof typeof FRONTEND_STACK]: (typeof FRONTEND_STACK)[name][number];
};

type StackSkip = {
  [name in keyof typeof FRONTEND_STACK]: (typeof FRONTEND_STACK)[name][number][];
};

const stackInit: Stack = {
  FRONTEND_FRAMEWORK: 'None',
  CSS_PREPROCESSORS: 'None',
  CSS_LIBRARY: 'None',
  CSS_COMPONENT: 'None',
  ANIMATION_LIBRARY: 'None',
  TESTING: 'None',
  MISC: 'None',
};

const stackSkipInit: StackSkip = {
  FRONTEND_FRAMEWORK: [],
  CSS_PREPROCESSORS: [],
  CSS_LIBRARY: [],
  CSS_COMPONENT: [],
  ANIMATION_LIBRARY: [],
  TESTING: [],
  MISC: [],
};

const generateRandomStack = (skipData: StackSkip): Stack =>
  FRONTEND_STACK_KEYS.reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: FRONTEND_STACK[cur].filter(
        (val) => !skipData[cur].some((v) => v === val)
      )[
        Math.floor(
          Math.random() * (FRONTEND_STACK[cur].length - skipData[cur].length)
        )
      ],
    }),
    stackInit
  );

export function App() {
  const [stack, setStack] = useState<Stack>(stackInit);
  const [spinData, setSpinData] = useState<Stack>(stackInit);
  const [skipData, setSkipData] = useState<StackSkip>(stackSkipInit);
  const [isStop, setIsStop] = useState<boolean>(false);

  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setSpinData((prevStack) =>
        FRONTEND_STACK_KEYS.reduce((prev, cur, index, keys) => {
          const arr = FRONTEND_STACK[cur];
          if (skipData[cur].length === arr.length) {
            return { ...prev };
          }
          const curIndex = arr.findIndex((value) => value === prev[cur]);

          // const nextIndex = curIndex + 1 === arr.length ? 0 : curIndex + 1;

          let nextIndex = curIndex;
          do {
            nextIndex = nextIndex + 1 === arr.length ? 0 : nextIndex + 1;
          } while (skipData[cur].some((val) => val === arr[nextIndex]));

          // const nextIndex = curIndex + 1 === arr.length ? 0 : curIndex + 1;
          const stopIndex = arr.findIndex((value) => value === stack[cur]);

          const isSpin = keys
            .filter((k, i) => i < index)
            .every((k) => prevStack[k] === stack[k]);

          return {
            ...prev,
            [cur]:
              FRONTEND_STACK[cur][
                isStop && isSpin && stopIndex === curIndex
                  ? stopIndex
                  : nextIndex
              ],
          };
        }, prevStack)
      );
    }, 100);
    return () => clearInterval(timer.current);
  }, [stack, isStop, skipData]);

  return (
    <div className="w-screen h-screen bg-amber-100">
      <div className="h-4/5 w-full flex justify-around items-center">
        {FRONTEND_STACK_KEYS.map((key) => (
          <div key={key}>
            <div className="text-center bg-blue-400 rounded mb-3 font-bold text-lg">
              {key
                .toLowerCase()
                .split('_')
                .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
                .join(' ')}
            </div>
            <div className="p-6 bg-blue-300 text-center flex flex-col justify-center items-center rounded">
              {FRONTEND_STACK[key].map((stackKey) => (
                <div
                  key={stackKey}
                  className="w-full flex justify-between items-center"
                >
                  <input
                    type="checkbox"
                    checked={!skipData[key].some((v) => v === stackKey)}
                    onClick={() =>
                      setSkipData((prev) => ({
                        ...prev,
                        [key]: prev[key].some((v) => v === stackKey)
                          ? prev[key].filter((v) => v !== stackKey)
                          : [...prev[key], stackKey],
                      }))
                    }
                    disabled={
                      skipData[key].length === FRONTEND_STACK[key].length - 1 &&
                      FRONTEND_STACK[key].filter(
                        (fs) => !skipData[key].some((sd) => sd === fs)
                      )[0] === stackKey
                    }
                  />
                  <span
                    className={classNames('p-0.5 m-0.5 text-lg rounded w-4/5', {
                      'bg-fuchsia-300': spinData[key] === stackKey,
                      'line-through': skipData[key].some((v) => v === stackKey),
                    })}
                  >
                    {stackKey}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <div className="w-96 flex items-center justify-around">
          <button
            className="bg-emerald-400 rounded-2xl p-2 text-white font-bold"
            onClick={() => {
              setIsStop(false);
              setStack(stackInit);
            }}
          >
            Spin!
          </button>
          <button
            className="bg-red-600 rounded-2xl p-2 text-white font-bold"
            onClick={() => {
              setIsStop(true);
              setStack(generateRandomStack(skipData));
            }}
          >
            Stop!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

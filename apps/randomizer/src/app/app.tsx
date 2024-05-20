const FRONTEND_FRAMEWORK = ['None', 'React', 'NextJs', 'Vue', 'Nuxt']; // Svelte, Solid JS, Qwik, Remix;
const UNIT_TEST = ['None', 'Jest']; //Vitest
const E2E = ['None', 'Cypress']; //Playwright
const CSS_PREPROCESSORS = ['None', 'Sass', 'PostCSS'];
const CSS_FRAMEWORK = ['None', 'Tailwind', 'Bootstrap', 'MUI', 'Chakra'];

const FRONTEND_STACK = {
  FRONTEND_FRAMEWORK,
  CSS_PREPROCESSORS,
  CSS_FRAMEWORK,
  UNIT_TEST,
  E2E,
};

const FRONTEND_STACK_KEYS = Object.keys(FRONTEND_STACK) as Array<
  keyof typeof FRONTEND_STACK
>;

export function App() {
  return (
    <div className="w-screen h-screen bg-amber-100">
      <div className="h-4/5 flex justify-around items-center">
        {FRONTEND_STACK_KEYS.map((key) => (
          <div
            key={key}
            className="h-1/4 w-60 bg-blue-400 text-center flex flex-col justify-center items-center"
          >
            {FRONTEND_STACK[key].map((stackKey) => (
              <span>{stackKey}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="bg-emerald-400 rounded-2xl p-2 text-white font-bold">
          Randomize!
        </button>
      </div>
    </div>
  );
}

export default App;

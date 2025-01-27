import omelette from '../assets/omelette.jpeg';
import styles from './app.module.scss';
import cx from 'classnames';

export function App() {
  return (
    <div className={styles['recipe']}>
      <img src={omelette} alt="omelette" />
      <div className={styles['recipe__body']}>
        <h1 className={styles['recipe__title']}>Simple Omelette Recipe</h1>
        <p className={styles['recipe__description']}>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className={styles['recipe__prep-time']}>
          <h3>Preparation time</h3>
          <ul className={styles['recipe__list']}>
            <li>
              <b>Total:</b> Approximately 10 minutes
            </li>
            <li>
              <b>Preparation:</b> 5 minutes
            </li>
            <li>
              <b>Cooking:</b> 5 minutes
            </li>
          </ul>
        </div>

        <div className={styles['recipe__section']}>
          <h2>Ingredients</h2>
          <ul className={styles['recipe__list']}>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <hr />

        <div className={styles['recipe__section']}>
          <h2>Instructions</h2>
          <ol className={styles['recipe__list']}>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>
            <li>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>
            <li>
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </li>
            <li>
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>

        <hr />

        <div className={styles['recipe__section']}>
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className={styles['recipe__table']}>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

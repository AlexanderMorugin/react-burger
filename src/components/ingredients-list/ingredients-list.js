import styles from './ingredients-list.module.css';
import IngredientElement from '../ingredient-element/ingredient-element';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';


const IngredientsList = forwardRef((props, ref) => {
  const { title, openModal, data, id } = props;
  return (
    <div ref={ref} id={id}>
      <h2 className="text_type_main-medium mt-10">{title}</h2>
      <ul className={styles.box}>
        {data.map((ingredient) => {
          return (
            <IngredientElement
              key={ingredient._id}
              ingredient={ingredient}
              onClick={() => openModal(ingredient)}
            />
          );
        })}
      </ul>
    </div>
  );
});


// IngredientsList.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default IngredientsList;
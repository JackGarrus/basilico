import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { animated, useSpring, config } from 'react-spring';
import { LazyImage } from 'react-lazy-images';
import RecipeHeader from 'components/RecipeHeader/RecipeHeader';
import RecipeGenerics from 'components/RecipeGenerics/RecipeGenerics';
import { Recipe as RecipeProps } from 'types/recipe';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import ReferenceLink from 'components/ReferenceLink/ReferenceLink';
import Subtitle from 'components/Subtitle/Subtitle';

import style from './Recipe.module.scss';

const Recipe: React.FC<RecipeProps> = ({ ...props }) => {
  const [expandCard, setExpandCard] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [cardHeight, setCardHeight] = useState<number>(300);
  const hoverState = useSpring({
    transform: hover ? ' scale(1.03)' : 'scale(1)',
    config: config.gentle,
  });
  const heightState = useSpring({
    height: expandCard ? `${cardHeight}px` : '300px',
    config: config.gentle,
  });
  const el: any = useRef(null);
  let generics = {
    vegetarian: props.isVegetarian && !props.isVegan && !props.isSweet,
    vegan: props.isVegan || (props.isVegetarian && props.isVegan),
    sweet: props.isSweet || (props.isSweet && props.isVegetarian),
    meat: props.hasMeat,
    fish: props.hasFish,
  };

  useEffect(() => {
    let elHeight: any = el.current.offsetHeight;
    elHeight > 300 ? setCardHeight(elHeight) : setCardHeight(cardHeight);
  }, [expandCard, cardHeight]);

  return (
    <animated.div
      style={{ ...hoverState, ...heightState }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={cn(style.container, {
          [style.Expanded]: expandCard,
        })}
        onClick={() => setExpandCard(!expandCard)}
        ref={el}
      >
        <div
          className={cn(style.card, {
            [style.generals]: !expandCard,
            [style.details]: expandCard,
          })}
        >
          <LazyImage
            src={props.image}
            debounceDurationMs={500}
            placeholder={({ imageProps, ref }) => (
              <img
                ref={ref}
                src="/assets/images/empty_dish.jpg"
                height="300"
                width="320"
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img
                alt="img"
                {...imageProps}
                className={cn(style.img, style.animated, style.fadeIn)}
              />
            )}
          />
          <RecipeHeader list={props.allergens} title={props.name} />
          {expandCard ? (
            <>
              <div className={style.ingredients}>
                <RecipeIngredientsList ingredients={props.ingredients} />
              </div>
              <div className={style.instructions}>
                <Subtitle words="Instructions" />
                {props.instructions.map((instruction, i) => (
                  <span className={style.list}>{instruction}</span>
                ))}
                <ReferenceLink link={props.link} />
              </div>
            </>
          ) : (
            <RecipeGenerics time={props.time} generics={generics} />
          )}
        </div>
      </div>
    </animated.div>
  );
};
export default Recipe;

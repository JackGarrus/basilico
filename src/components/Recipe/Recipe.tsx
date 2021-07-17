import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { animated, useSpring, config } from 'react-spring';
import { LazyImage } from 'react-lazy-images';
import RecipeHeader from 'components/RecipeHeader/RecipeHeader';
import RecipeGenerics from 'components/RecipeGenerics/RecipeGenerics';
import RecipeIngredientsSection from 'components/RecipeIngredientsSection/RecipeIngredientsSection';
import Subtitle from 'components/Subtitle/Subtitle';
import List from 'components/List/List';
import { Recipe as RecipeProps } from 'data/recipes/recipes';
import style from './Recipe.module.scss';
import ReferenceLink from 'components/ReferenceLink/ReferenceLink';

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
        className={cn(style.card, {
          [style.Expanded]: expandCard,
        })}
        onClick={() => setExpandCard(!expandCard)}
        ref={el}
      >
        <article
          className={cn(style.article, {
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
              <div className={style.ingredientsContainer}>
                <RecipeIngredientsSection ingredients={props.ingredients} />
              </div>
              <div className={style.instructionsContainer}>
                <Subtitle words="Preparation" />
                <List collection={props.instructions} />
                <ReferenceLink link={props.link} />
              </div>
            </>
          ) : (
            <RecipeGenerics time={props.time} generics={generics} />
          )}
        </article>
      </div>
    </animated.div>

  );
};
export default Recipe;
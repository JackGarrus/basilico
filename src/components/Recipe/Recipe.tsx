import { useEffect, useRef, useState } from 'react';
import style from './recipe.module.scss';
import cn from 'classnames';
//import { animated, useSpring, config } from 'react-spring';
import { LazyImage } from 'react-lazy-images';
//import List from 'components/Atoms/List/List';
//import Subtitle from 'components/Atoms/Subtitle/Subtitle';
import { ReactComponent as Go } from 'icons/misc/next.svg';
import RecipeHeader from 'components/RecipeHeader/RecipeHeader';
import RecipeGenerics from 'components/RecipeGenerics/RecipeGenerics';
import BorderedBox from 'components/BorderedBox/BorderedBox';
import Anchor from 'components/Anchor/Anchor';
import RecipeIngredientsSection from 'components/RecipeIngredientsSection/RecipeIngredientsSection';
import Subtitle from 'components/Subtitle/Subtitle';
import List from 'components/List/List';

interface RecipeProps {
  image: string;
  alt: string;
  title: string;
  difficulty: string;
  time: string;
  isSweet?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
  hasMeat?: boolean;
  hasFish: boolean;
  allergens: string[];
  ingredients: [{ name: string; quantity: 'string' }];
  instructions: string[];
  link: string;
}

const Recipe: React.FC<RecipeProps> = ({ ...props }) => {
  const [expandCard, setExpandCard] = useState<boolean>(false);
  //const [hover, setHover] = useState<boolean>(false);
  const [cardHeight, setCardHeight] = useState<number>(300);
  /* const hoverState = useSpring({
     transform: hover ? ' scale(1.03)' : 'scale(1)',
     config: config.gentle,
   });
   const heightState = useSpring({
     height: expandCard ? `${cardHeight}px` : '300px',
     config: config.gentle,
   });*/
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
    <div
      className={cn(style.card, {
        [style.card_expanded]: expandCard,
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
          alt={props.alt}
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
        <RecipeHeader list={props.allergens} title={props.title} />
        {expandCard ? (

          <>
            <div className={style.ingredients_container}>
              <RecipeIngredientsSection ingredients={props.ingredients} />
            </div>
            <div className={style.instructions_container}>
              <Subtitle words="Preparation" />
              <>
                <List collection={props.instructions} />
                <BorderedBox>
                  {props.link.length > 0 ? (
                    <>
                      <Anchor
                        link={props.link}
                        linkName="Go to the website of the recipe "
                      >
                        <Go className={style.arrow} />
                      </Anchor>
                      <p className={style.infobox}>
                        Most of the recipe links provided are just for
                        reference
                        </p>
                    </>
                  ) : (
                    <p className={style.infobox}>
                      Coming soon: link for reference
                    </p>
                  )}
                </BorderedBox>
              </>
            </div>
          </>
        ) : (
          <RecipeGenerics time={props.time} generics={generics} />
        )}
      </article>
    </div>
  );
};
export default Recipe;
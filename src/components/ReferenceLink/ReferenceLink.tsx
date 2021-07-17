import { ReactComponent as Go } from 'icons/misc/next.svg';
import BorderedBox from 'components/BorderedBox/BorderedBox';
import ExternalLink from 'components/ExternalLink/ExternalLink';

import style from './ReferenceLink.module.scss';

interface Props {
  link: string;
}

const ReferenceLink: React.FC<Props> = ({ link }) => (
  <BorderedBox>
    {link.length > 0 ? (
      <>
        <ExternalLink link={link} linkName="Go to the website of the recipe ">
          <Go className={style.arrow} />
        </ExternalLink>
        <p className={style.infobox}>
          Most of the recipe links provided are just for reference
        </p>
      </>
    ) : (
      <p className={style.infobox}>Coming soon: link for reference</p>
    )}
  </BorderedBox>
);

export default ReferenceLink;

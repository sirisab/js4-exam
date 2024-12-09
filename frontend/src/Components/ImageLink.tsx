import { NavLink } from 'react-router-dom';
// import Image from './Image';

type ImageLinkProps = {
  imageSrc: string;
  altText: string;
  href: number;
};

const ImageLink = ({ imageSrc, altText, href }: ImageLinkProps) => {
  return (
    <NavLink to={href}>
      <img src={imageSrc} alt={altText} />
    </NavLink>
  );
};
export default ImageLink;

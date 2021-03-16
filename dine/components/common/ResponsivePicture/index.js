const ResponsivePicture = ({ path, alt }) => (
  <picture>
    <source
      srcSet={`${path}-tablet@2x.jpg 1024w`}
      media="(min-width: 1024px)"
    />
    <source
      srcSet={`${path}-tablet.jpg 768w`}
      media="(min-width: 768px)"
    />
    <source
      srcSet={`${path}-mobile@2x.jpg 768w`}
      media="(min-width: 425px)"
    />
    <img
      src={`${path}-mobile.jpg`}
      alt={alt}
      role={alt ? '' : 'presentation'}
    />
  </picture>
);

export default ResponsivePicture;

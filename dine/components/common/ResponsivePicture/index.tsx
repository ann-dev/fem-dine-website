type ResponsivePictureProps = {
  path: string;
  alt?: string;
  tablet?: boolean;
  desktop?: boolean;
};

const ResponsivePicture = ({
  path,
  alt,
  tablet,
  desktop
}: ResponsivePictureProps) => (
  <picture>
    {desktop ? (
      <source
        srcSet={`${path}-desktop@2x.jpg 2560w`}
        media="(min-width: 2560px)"
      />
    ) : (
      ''
    )}
    {desktop ? (
      <source
        srcSet={`${path}-desktop.jpg 1440w`}
        media="(min-width: 1440px)"
      />
    ) : (
      ''
    )}
    {tablet ? (
      <source
        srcSet={`${path}-tablet@2x.jpg 1024w`}
        media="(min-width: 1024px)"
      />
    ) : (
      ''
    )}
    {tablet ? (
      <source srcSet={`${path}-tablet.jpg 768w`} media="(min-width: 768px)" />
    ) : (
      ''
    )}
    <source srcSet={`${path}-mobile@2x.jpg 425w`} media="(min-width: 425px)" />
    <img
      src={`${path}-mobile.jpg`}
      alt={alt}
      role={alt ? '' : 'presentation'}
    />
  </picture>
);

export default ResponsivePicture;

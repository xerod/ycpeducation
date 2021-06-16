type ImageLoaderType = {
  src: string;
  width?: number;
  quality?: number;
};

const imageLoader = (params: ImageLoaderType) => {
  const { src, width, quality } = params;

  const isExportingForDev = process.env.NODE_ENV == "development";
  const parsedSrc = isExportingForDev
    ? `images${src}?w=${width}&q=${quality || 75}`
    : `images/${src}`;

  // const parsedSrc = `images/${src}`;
  // const parsedSrc = `images${src}?w=${width}&q=${quality || 75}`;

  return parsedSrc;
};

export default imageLoader;

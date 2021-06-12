type ImageLoaderType = {
  src: string;
  width?: number;
  quality?: number;
};

const imageLoader = (params: ImageLoaderType) => {
  const { src, width, quality } = params;

  // const isStaticExport = process.env.BUILD_TYPE === "static";
  // const parsedSrc = isStaticExport ? `images/${src}` : `${src}`;
  const parsedSrc = `images/${src}`;

  return `${parsedSrc}`;
};

export default imageLoader;

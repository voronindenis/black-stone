// @flow
export type TextureImageType = {
  image: string,
};

export type TextureSubspeciesType = {
  title: string,
  images: TextureImageType[],
};

export type TexturesType = {
  id: string,
  title: string,
  image: string,
  description: string,
  subspecies: TextureSubspeciesType[],
};

export type TexturesStateType = {
  textures: TexturesType[]
};

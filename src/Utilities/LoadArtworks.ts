import axios from 'axios';
import { IArtwork } from '../Models/IArtwork';

// import { ResponseModel } from '../Models/ResponseModel';
// import { IMedia } from '../Models/IMedia';

export const LoadArtworks = async (endpoint: string): Promise<IArtwork[]> => {
  //   endpoint: string,
  //   type: MediaProps
  // ): Promise<ResponseModel> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(`${url}`);
  // const mediaList: IMedia[] = [];

  // const response = new ResponseModel(
  //   result.data.result.data,
  //   result.data.result.pageNo,
  //   result.data.result.totalPages
  // );

  // result.data.map((item: IMedia) => {
  //   const { id, title, posterImage, releaseDate }: IMedia = item;

  //   const media: IArtwork = {
  //     id,
  //     title,
  //     price,
  //     description,
  //     imageUrl,
  //     inStock
  //     mediaType: type.mediaType,
  //   };

  //   mediaList.push(media);
  // });

  return result.data.data;
};

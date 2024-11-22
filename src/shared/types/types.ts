export interface IResEpisode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface IResLocation {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface IResCharacte {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    url: string;
    name: string;
  };
  name: string;
  origin: {
    url: string;
    name: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IResRickAndMorty<T> {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
  };
  results: Array<T>;
}

export type IEpisode = IResRickAndMorty<IResEpisode>;
export type ILocations = IResRickAndMorty<IResLocation>;
export type ICharacte = IResRickAndMorty<IResCharacte>;

export type ISortingTypes = "ASC" | "DESC";

export type IUseGetDataGeneric = IResEpisode | IResCharacte | IResLocation;

export interface IUseGetDataParams {
  url: string;
  nextUrlPage: number;
}

export interface IUseScrollView {
  setNextUrlPage: React.Dispatch<React.SetStateAction<number>>;
  haveNextPage: boolean;
}

export interface IAuthContext {
  user: string | null;
  signIn: (newLogin: string, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}

export interface IOutletContext<T> {
  payloads: T;
  haveNextPage: boolean;
  setNextUrlPage: React.Dispatch<React.SetStateAction<number>>;
}

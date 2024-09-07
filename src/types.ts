import { ChangeEvent, ReactElement } from "react";

export interface ILoaction {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export interface IHeroes {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

export interface IEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export interface IInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  checked?: boolean;
  icon?: ReactElement;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

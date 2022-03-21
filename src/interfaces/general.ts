export interface IMenuLink {
  title: string;
  link: string;
}

export interface IFeature {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface IRoadmapStep{
  id: number;
  title: string;
  description?: string;
  step:string;
}
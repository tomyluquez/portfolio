export interface Project {
  tittle: string;
  subTittle: string;
  description: string;
  link: string;
  id: number;
  img: string;
  icons: Icon[];
}

export interface Icon {
  id: number;
  name: string;
  component: string;
  color: string;
}

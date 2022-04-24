export interface Film {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  trailler?: string;
  name?: string;
  description?: string;
  director?: string;
  actor?: string;
  time?: string;
  image?: string;
  imageDescription1?: string;
  imageDescription2?: string;
  imageDescription3?: string;
  [x: string]: any;
}

export interface User {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;
  firstname?: string;
  lastname?: string;
  birthday?: Date;
  address?: string;
  email?: string;
  password?: string;
  username?: string;
  active?: Boolean;
  point?: string;
  phone?: string;
  role?: string;
  [x: string]: any;
}

export interface Room {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  [x: string]: any;
}

export interface Showing {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  RoomId?: string;
  FilmId?: string;
  price?: number;
  startDate?: Date;
  endDate?: Date;
  startTime?: Date;
  endTime?: Date;
  [x: string]: any;
}

export interface Admin {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;
  firstname?: string;
  lastname?: string;
  birthday?: Date;
  address?: string;
  email?: string;
  password?: string;
  username?: string;
  point?: string;
  phone?: string;
  [x: string]: any;
}

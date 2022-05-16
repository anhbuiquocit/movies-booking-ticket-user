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
  time?: number;
  image?: string;
  imageDescription1?: string;
  imageDescription2?: string;
  imageDescription3?: string;
  [x: string]: any;
}

export interface User {
  id: string;
  createAt: Date;
  updateAt?: Date;
  deleteAt?: Date;
  firstname: string;
  lastname: string;
  birthday?: Date;
  address?: string;
  email: string;
  password: string;
  username: string;
  active?: Boolean;
  point?: string;
  phone?: string;
  role?: string;
  imageUrl?: string;
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
  film: Film;
  room: Room;
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

export interface Comment {
  id?: string;
  user?: User;
  film?: Film;
  comment?: string;
  [x: string]: any;
}

export interface Promotion {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  code: string;
  discount: number;
  maxDiscount: number;
  startDate?: Date;
  endDate?: Date;
  startTime?: Date;
  endTime?: Date;
  [x: string]: any;
}

export interface Seat {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  name: string;
  position: string;
  room: Room;
  RoomId: string;
}
export interface BookingItem {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  seat: Seat;
  SeatId: string;
  showing: Showing;
  ShowingId: string;
  Booking: Booking;
  bookingId: string;
}
export interface Booking {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;
  UserId: string;
  user: User;
  amount: number;
  price: number;
  PromotionId: string;
  promotion: Promotion;
  lineSeatMatrix: string;
  bookingItem: Array<BookingItem>;
}

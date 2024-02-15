import { Product, Cart, User, Ticket, Message } from '../DAO/factory.js';

//import UserRepository from './users.repository.js';
//import TicketRepository from './tickets.repository.js';
import ProductRepository from './products.repository.js';
import CartRepository from './carts.repository.js';
import UserRepository from './users.repository.js';
import TicketRepository from './tickets.repository.js';
import MessageRepository from './tickets.repository.js';

//export const UserService = new UserRepository(new User());
//export const TicketService = new TicketRepository(new Ticket());
export const ProductService = new ProductRepository(new Product());
export const CartService = new CartRepository(new Cart());
export const UserService = new UserRepository(new User());
export const TicketService = new TicketRepository(new Ticket());
export const MessageService = new MessageRepository(new Message());

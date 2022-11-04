import { IPost } from './post.interface';
import { IUser } from './user.interface';

export type IUserPost = IUser & { posts: IPost[] };

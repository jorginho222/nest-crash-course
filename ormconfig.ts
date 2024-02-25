import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './src/entities/user.entity';
import { Topic } from './src/entities/topic.entity';
import { Comment } from './src/entities/comment.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User, Topic, Comment],
  synchronize: true, // it is recommended to set this property to false in production, because this sync functionality can drop all or part of production data
};

export default config;

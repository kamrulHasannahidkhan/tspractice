interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserProfile = Pick<User, "name" | "email">;
type UserWithoutId = Omit<User, "id">;

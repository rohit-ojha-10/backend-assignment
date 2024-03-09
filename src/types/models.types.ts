export type IUser = {
  name: string;
  email: string;
  role: string;
} & Document;
export type Counter = {
  additions: number;
  deletions: number;
  updations: number;
};

type Provider = 'siwe' | 'google';
type CombineProps<T, R> = Omit<T, keyof R> & R;

type PaginatedResponse<Data> = {
  results: Data[];
  count: number;
  next: string;
  previous: string;
}
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => string;
type Res = GetReturnType<Fn>; // string
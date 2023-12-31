type DeepReadonly<T> =
	T extends (infer R)[] ? DeepReadonlyArray<R> :
	// eslint-disable-next-line @typescript-eslint/ban-types
	T extends Function ? T :
	T extends object ? DeepReadonlyObject<T> :
	T;

export type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>

export type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>;
};
export type Params = Record<string, unknown>;
export declare function useTracking(): (((params?: Params | ((oldParams: Params) => Params) | undefined) => Record<string, unknown> | Promise<Record<string, unknown>>) | {
    params: Record<string, unknown>;
    buildPath: () => string;
    keyValue: string | undefined;
})[];

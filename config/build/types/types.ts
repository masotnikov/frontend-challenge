export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
    isDev: boolean;
    platform?: BuildPlatform;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    platform?: BuildPlatform;
}
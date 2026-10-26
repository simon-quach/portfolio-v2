// Webpack's require.context, used to load every photo in a folder
declare namespace NodeJS {
  interface RequireContext {
    keys(): string[];
    (id: string): { default: import("next/image").StaticImageData };
  }

  interface Require {
    context(
      directory: string,
      useSubdirectories: boolean,
      regExp: RegExp
    ): RequireContext;
  }
}

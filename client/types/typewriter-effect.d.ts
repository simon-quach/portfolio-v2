declare module "typewriter-effect/dist/core" {
  interface TypewriterOptions {
    strings: string[];
    autoStart: boolean;
    loop?: boolean;
  }

  class Typewriter {
    constructor(element: string | HTMLElement, options: TypewriterOptions);
    start(): void;
    stop(): void;
    pause(): void;
    resume(): void;
    deleteAll(speed?: number): Typewriter;
    typeString(string: string): Typewriter;
    callFunction(callback: () => void): Typewriter;
    changeDeleteSpeed(speed: number): Typewriter;
    changeDelay(delay: number): Typewriter;
    deleteChars(number: number): Typewriter;
    callFunction(callback: () => void): Typewriter;
    typeString(string: string): Typewriter;
  }

  export default Typewriter;
}

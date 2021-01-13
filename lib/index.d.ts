
declare module 'emojik' {
	type SkinToneType = (string | string[]);

	export class Emojik {
		get (name: string): object;
		icon (name: string, skinTone: SkinToneType): string;
		unicode (name: string, skinTone: SkinToneType): string[];
		utf8 (name: string, skinTone: SkinToneType): number[];
		text (str: string, patternName: RegExp, patternTone: RegExp): string;
	}

	export default Emojik;
}
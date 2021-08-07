/**
 * Helper method to conditionally add classnames and concatenate them to a string
 * @param args potential classnames
 * @returns a string of the provided classnames separated by a whitespace
 */
export function cn(...args: (string | false | undefined)[]): string {
    console.log(args);
    return args.filter((c) => !!c).join(" ");
}

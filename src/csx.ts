export function csx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

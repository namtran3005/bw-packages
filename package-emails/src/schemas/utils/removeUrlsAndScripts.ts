export function removeUrlsAndScripts(
  value: string | null | undefined
): string | null | undefined;

export function removeUrlsAndScripts(
  value: string | null | undefined
): string | null | undefined {
  if (!value) {
    return value;
  }
  const sanitizedString = value
    .replace(/(?! |^)[.](?! |$)/g, ',')
    .replace(/[<>]/g, ' ')
    .replace(/http(s)?:\/\//g, ' ');
  return sanitizedString;
}

/**
 * Replacements turning the variable parts of an announcement (date, hour, timezone) into markers
 */
const MessageReplacePattern: [RegExp, string][] = [
  [/\b\d{4}\.\d{2}\.\d{2}\b/g, '[year].[month number].[day number]'],
  [/\b\d{2}\.\d{2}\.\d{2}\b/g, '[month number].[day number].[short year]'],
  [/\b\d{1,2}:\d{2}\b/g, '[hour]:[minute]'],
  [/\b(?:UTC|EDT|EST|ET)\b/g, '[timezone]'],
];
export default MessageReplacePattern;

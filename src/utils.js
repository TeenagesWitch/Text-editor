export const countChar = (sentence) => {
  return sentence.length;
};

export const countCharWithoutSpace = (sentence) => {
  return sentence.replace(/\s/g, "").length;
};

export const countWord = (sentence) => {
  if (!sentence.trim()) return 0;
  const words = sentence.trim().split(/\s+/);
  return words.length;
};

export const replaceString = (from, to, sentence) => {
  return sentence.replace(new RegExp(from, "gi"), to);
};

export const findString = (search, sentence) => {
  if (sentence.toLowerCase().includes(search.toLowerCase())) {
    return search;
  }
  return "";
};
export function removeAccents(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function camelCase(sentence: string): string {
  return sentence
    .split(' ')
    .map((word, index) => {
      return index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1);
    })
    .join('');
}

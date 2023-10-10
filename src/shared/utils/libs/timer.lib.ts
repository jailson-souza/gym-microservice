export function delay(mileseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, mileseconds));
}

export function generateSlug(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u8300-\u836f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

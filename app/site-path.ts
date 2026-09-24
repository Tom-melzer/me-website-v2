// Plain anchors and public images do not inherit Next.js basePath automatically.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function sitePath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return basePath + path;
}

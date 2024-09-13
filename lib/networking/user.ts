export const me = async () => {
  const response = await fetch('/api/me');
  return response.json();
}
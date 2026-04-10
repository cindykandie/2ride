const baseApiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

export const API_URL = baseApiUrl ?? "http://localhost:5001";
export const EVENTS_API_URL = `${API_URL}/api/events`;

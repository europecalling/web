const API_BASE = import.meta.env.VITE_ADMIN_API_URL || "https://web.europecalling.co/api";

function getToken(): string | null {
  return localStorage.getItem("admin_token");
}

function getHeaders(includeAuth = false): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (includeAuth) {
    const token = getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

export interface GalleryItem {
  id: number;
  title: string;
  location: string;
  category: string;
  image_url: string;
  sort_order: number;
  created_at: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  expires_at?: string;
  user?: { email: string };
  message?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
}

export async function adminLogin(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/auth.php`, {
    method: "POST",
    headers: getHeaders(false),
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const res = await fetch(`${API_BASE}/gallery.php`, { headers: getHeaders(false) });
  const json: ApiResponse<GalleryItem[]> = await res.json();
  if (!json.success || !json.data) throw new Error(json.message || "Failed to fetch gallery");
  return json.data;
}

export async function createGalleryItem(data: {
  title: string;
  location?: string;
  category?: string;
  image_url: string;
}): Promise<GalleryItem> {
  const res = await fetch(`${API_BASE}/gallery.php`, {
    method: "POST",
    headers: getHeaders(true),
    body: JSON.stringify(data),
  });
  const json: ApiResponse<GalleryItem> = await res.json();
  if (!json.success || !json.data) throw new Error(json.message || "Failed to create");
  return json.data;
}

export async function updateGalleryItem(
  id: number,
  data: { title: string; location?: string; category?: string; image_url: string; sort_order?: number }
): Promise<GalleryItem> {
  const res = await fetch(`${API_BASE}/gallery.php?id=${id}`, {
    method: "PUT",
    headers: getHeaders(true),
    body: JSON.stringify(data),
  });
  const json: ApiResponse<GalleryItem> = await res.json();
  if (!json.success || !json.data) throw new Error(json.message || "Failed to update");
  return json.data;
}

export async function deleteGalleryItem(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/gallery.php?id=${id}`, {
    method: "DELETE",
    headers: getHeaders(true),
  });
  const json: ApiResponse = await res.json();
  if (!json.success) throw new Error(json.message || "Failed to delete");
}

export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("image", file);
  const token = getToken();
  const headers: HeadersInit = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}/upload.php`, {
    method: "POST",
    headers,
    body: form,
  });
  const json = await res.json();
  if (!json.success || !json.url) throw new Error(json.message || "Upload failed");
  return json.url;
}

export type SendEmailPayload = {
  type: "consulenza" | "candidatura";
  name: string;
  email: string;
  phone: string;
  message?: string;
  attachment?: {
    filename: string;
    content: string; // base64, no "data:" prefix
  };
};

export async function sendEmail(payload: SendEmailPayload): Promise<void> {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw new Error(data?.error || "Invio fallito");
  }
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

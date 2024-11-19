"use server";

import { symmetricDecrypt, symmetricEncrypt } from "@/lib/encryption";
import { generateApiUrl } from "@/lib/helper";
import { auth } from "@clerk/nextjs/server";

export async function createPassword(body) {
  const API_URL = generateApiUrl("password", "/create");

  const { userId } = await auth();

  if (body.password) {
    body.password = symmetricEncrypt(body.password);
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...body, userId }),
  });

  const data = await response.json();

  return data;
}

export async function getPasswords(body) {
  const { userId } = await auth();

  const API_URL = generateApiUrl("password", `/get/${userId}`);

  const response = await fetch(API_URL, {
    method: "GET",
  });

  const data = await response.json();

  return data;
}
export async function deletePassword(passId) {
  const API_URL = generateApiUrl("password", `/delete/${passId}`);

  const response = await fetch(API_URL, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
}

export async function copyPassword(text) {
  return symmetricDecrypt(text);
}

"use server";

import { symmetricDecrypt, symmetricEncrypt } from "@/lib/encryption";
import { generateApiUrl } from "@/lib/helper";
import { auth } from "@clerk/nextjs/server";

export async function createCard(body) {
  const API_URL = generateApiUrl("card", "/create");

  const { userId } = await auth();

  if (body.password) {
    body.password = symmetricEncrypt(body.password);
  }

  if (body.cardNumber) {
    body.cardNumber = symmetricEncrypt(body.cardNumber);
  }
  if (body.expMonth) {
    body.expMonth = symmetricEncrypt(body.expMonth);
  }
  if (body.cvv) {
    body.cvv = symmetricEncrypt(body.cvv);
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

export async function getCards(body) {
  const { userId } = await auth();

  const API_URL = generateApiUrl("card", `/get/${userId}`);

  const response = await fetch(API_URL, {
    method: "GET",
  });

  const data = await response.json();

  return data;
}
export async function deleteCard(passId) {
  const API_URL = generateApiUrl("card", `/delete/${passId}`);

  const response = await fetch(API_URL, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
}

export async function copyPassword(text) {
  return symmetricDecrypt(text);
}

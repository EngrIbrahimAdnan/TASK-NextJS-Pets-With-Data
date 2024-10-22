"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const headers = new Headers();
headers.append("Content-Type", "application/json");

const baseURL = "https://pets-react-query-backend.eapi.joincoded.com";

export async function fetchingPets() {
  const response = await fetch(
    "https://pets-react-query-backend.eapi.joincoded.com/pets"
  );
  const pets = await response.json();
  return pets;
}

export async function fetchingPetDetail(id) {
  let pet;

  const response = await fetch(
    `https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`
  );
  try {
    pet = await response.json();
  } catch (error) {
    console.error("Doesnt exist");
    redirect("/pets");
  }

  return pet;
}

export async function addPet(formData) {
  const petData = {
    ...Object.fromEntries(formData),
    adopted: 0,
  };

  const response = await fetch(`${`${baseURL}/pets`}`, {
    method: "POST",
    headers,
    body: JSON.stringify(petData),
  });

  const newPet = await response.json();
  redirect("/pets");

  return newPet;
}

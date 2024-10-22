"use server";

import { redirect } from "next/navigation";

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

"use server";

export async function fetchingPets() {
  const response = await fetch(
    "https://pets-react-query-backend.eapi.joincoded.com/pets"
  );
  const pets = await response.json();
  return pets;
}

// export async function fetchingPetDetail() {
//   const response = await fetch(
//     `https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`
//   );
//   const petDetail = await response.json();
//   return petDetail;
// }

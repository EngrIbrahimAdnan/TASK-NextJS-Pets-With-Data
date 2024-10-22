import { fetchingPets } from "@/actions";
import PetsContainer from "./components/PetsContainer";

export default async function PetsPage() {
  const pets = await fetchingPets();

  return <PetsContainer pets={pets} />;
}

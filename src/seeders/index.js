import { albumSeeder } from "./albumSeeder.js";

async function ejecutarSeeders() {
  try {
    await albumSeeder();

    console.log("Seeders ejecutados correctamente");
  } catch (error) {
    console.log(error);
  }
}

ejecutarSeeders();
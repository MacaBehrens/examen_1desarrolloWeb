import Album from "../models/Album.js";

export async function albumSeeder() {
  await Album.bulkCreate([
    {
      titulo: "Midnights",
      fechaLanzamiento: "2022-10-21",
      imagenPortada: "midnights.jpg"
    },
    {
      titulo: "Parachutes",
      fechaLanzamiento: "2000-07-10",
      imagenPortada: "parachutes.jpg"
    },
    {
      titulo: "Laundry Service",
      fechaLanzamiento: "2001-11-13",
      imagenPortada: "laundryservice.jpg"
    }
  ]);

  console.log("Albums cargados");
}
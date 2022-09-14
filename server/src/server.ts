import express from "express";

const app = express();

// localhost:3333/ads

app.get("/ads", (request, response) => {
  console.log("Usuário acessou /ads");

  return response.json([
    {
      id: 1,
      name: "primeiro teste",
    },
  ]);
});

app.listen(3333);

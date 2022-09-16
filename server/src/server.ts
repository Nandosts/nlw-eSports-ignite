import express from "express";

const app = express();

// localhost:3333/ads

app.get("/games", (request, response) => {
  return response.json([]);
});

app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

app.get("/games/:id/ads", (request, response) => {
  const gameId = request.params.id;

  console.log(`Usuário acessou /games/${gameId}/ads`);

  return response.json([
    {
      id: 1,
      name: "Game",
    },
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  const gameId = request.params.id;

  console.log(`Usuário acessou /ads/${gameId}/discord`);

  return response.json([]);
});

app.listen(3333);

// app.ts
import { Application } from "../deps.ts";
import router from "./routes/ramadhanRoute.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server now running on http://localhost:8000");

// await app.listen({ port: 8000 });

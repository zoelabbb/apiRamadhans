// app.ts
import { Application } from "../deps.ts";
import router from "./routes/ramadhanRoute.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

// console.log("Server now running ");
await app.listen({ port: 3000 });

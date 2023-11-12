// routes.ts
import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getDaysLeft, getRamadhanCalendar } from "../controllers/ramadhanControllers.ts";

const router = new Router();

router
  .get("/api/ramadhan/days-left", getDaysLeft)
  .get("/api/ramadhan/calendar", getRamadhanCalendar);

export default router;

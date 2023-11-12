// controllers.ts
import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const getDaysLeft = (ctx: Context) => {
  const currentDate = new Date();
  const ramadhanDate = new Date("2024-03-12"); // Ganti dengan tanggal awal Ramadhan

  // Hitung selisih waktu antara tanggal saat ini dan tanggal awal Ramadhan
  const timeDiff = ramadhanDate.getTime() - currentDate.getTime();

  // Hitung hari yang tersisa hingga Ramadhan
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Hitung minggu yang tersisa hingga Ramadhan
  const weeksLeft = Math.ceil(daysLeft / 7);

  // Hitung bulan yang tersisa hingga Ramadhan
  const monthsLeft = Math.ceil(daysLeft / 30); // Asumsi 30 hari per bulan

  ctx.response.body = {
    daysLeft,
    weeksLeft,
    monthsLeft,
  };
};

export const getRamadhanCalendar = (ctx: Context) => {
  // Contoh data kalender Ramadhan
  const ramadhanCalendar = [
    {
      date: "2024-03-12",
      event: "Road to Ramadhan 2024",
      author: "Alif Ryuu",
      source: "https://github.com/zoelabbb",
    },
    // Tambahkan lebih banyak acara sesuai kebutuhan
  ];

  ctx.response.body = ramadhanCalendar;
};

// src/jobs/dailyTask.js
import cron from "node-cron";
import { sendDailyMessages } from "../service/utilsService.js";

cron.schedule("0 0 8 * * *", async () => {
  console.log("Iniciando tarefa diária às 8h");
  try {
    const instant = new Date();
    sendDailyMessages();
    console.log("Mensagens enviadas com sucesso as: ", instant);
  } catch (error) {
    console.error("Erro ao enviar mensagens:", error);
  }
});

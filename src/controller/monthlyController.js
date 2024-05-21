import { getReport, getReportForUser } from "../service/monthyReportService.js";

export const getMonthlyReport = async (req, res) => {
  const year = req.query.year;
  const monthNumber = req.query.monthNumber;
  try {
    const result = await getReport(year, monthNumber);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMonthlyReportUser = async (req, res) => {
  const year = req.query.year;
  const monthNumber = req.query.monthNumber;
  try {
    const result = await getReportForUser(year, monthNumber);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

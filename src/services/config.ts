const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://google-sheet-server.vercel.app";

export const USER_URL = `${BASE_URL}/api/user`;
export const SHEET_URL = `${BASE_URL}/api/sheet`;
export const GRID_URL = `${BASE_URL}/api/grid`;
export const COLUMN_URL = `${BASE_URL}/api/column`;
export const ROW_URL = `${BASE_URL}/api/row`;
export const CELL_URL = `${BASE_URL}/api/cell`;

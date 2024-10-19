import { Metadata } from "next";
import Main from "../components/main";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

export const metadata: Metadata = {
  title: "Broodl ⋅ Dashboard",
  description: "Track your daily mood, every day of the year",
};

function DashboardPage() {
  const isAuthenticated = true;

  const children = isAuthenticated ? <Dashboard /> : <Login />;

  return <Main>{children}</Main>;
}

export default DashboardPage;

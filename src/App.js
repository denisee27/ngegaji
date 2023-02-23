import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigasi from "./component/navbar/navbar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import DashboardCard from "./component/content/dashboard/card/card";
import EmployeeCard from "./component/content/employee/card/card";
import EditProfile from "./component/content/employee/card/editprofile";
import Pendidikan from "./component/content/pendidikan/pendidikan";
import EditPendidikan from "./component/content/pendidikan/editpendidikan";
import Pengalaman from "./component/content/pengalaman/pengalaman";
import EditPengalaman from "./component/content/pengalaman/editpengalaman";
import Attendance from "./component/content/attendance/attendance";
import Reimbursement from "./component/content/reimbursement/reimbursement";
import Example from "./component/content/example/example";
import BankPayment from "./component/content/bankpayment/bankpayment";
import Expense from "./component/content/expense/expense";
import Login from "./component/content/auth/login";
import Welcome from "./component/content/auth/welcome";
import NavSideLayout from "./component/template/sidenav";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navigasi /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<NavSideLayout />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/dashboard" element={<DashboardCard />} />
            <Route path="/profile" element={<EmployeeCard />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/pendidikan/edit" element={<EditPendidikan />} />
            <Route path="/pengalaman" element={<Pengalaman />} />
            <Route path="/pengalaman/edit" element={<EditPengalaman />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/reimbursement" element={<Reimbursement />} />
            <Route path="/bankpayment" element={<BankPayment />} />
            <Route path="/expense" element={<Expense />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Example />
    </>
  );
}

export default App;

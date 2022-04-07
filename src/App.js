import "./App.css";
import Home from "./screens/home/home";
import { Routes, Route } from "react-router-dom";
import Accounts from "./screens/accounts/accounts";
import AccountsRoot from "./screens/accounts";
import Transfers from "./screens/transfers/transfers";
import Bills from "./screens/bills/bills";
import Credit from "./screens/credit-card/credit-card";
import Loan from "./screens/loan/loan";
import Services from "./screens/services/services";
import Signin from "./screens/signin";
import Signup from "./screens/signup";
import AccountStatement from "./screens/accounts/account-statement";
import AddAccount from "./screens/accounts/additional-account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="accounts" element={<Accounts />}>
        <Route path="statement" element={<AccountStatement />} />
        <Route path="add" element={<AddAccount />} />
        <Route index element={<AccountsRoot />} />
      </Route>
      <Route path="transfers" element={<Transfers />} />
      <Route path="bills" element={<Bills />} />
      <Route path="credit-card" element={<Credit />} />
      <Route path="loan" element={<Loan />} />
      <Route path="services" element={<Services />} />
    </Routes>
  );
}

export default App;

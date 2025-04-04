import { ReactNode } from "react";
import AdminAside from "./components/AdminAside";
import AdminFooter from "./components/AdminFooter";
import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="n-layout n-aside-size:full1 n-aside-float1 n-aside-pos:right1">
      <AdminHeader />
      <div className="xl:w:xlarge">
        <AdminAside />
        {children}
      </div>
      <AdminFooter />
    </div>
  );
}

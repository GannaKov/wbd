import { EmployeeDirectory } from "@/components/employee-directory";
import { ThemeToggle } from "@/components/theme-toggle";
import employeesData from "@/data/employees.json";
import type { Employee } from "@/lib/types";

const employees = employeesData as Employee[];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-sm sm:px-10">
        <h1 className="text-lg font-medium sm:text-xl">Mitarbeiter</h1>
        <ThemeToggle />
      </header>
      <main className="flex-1 px-6 py-8 sm:px-10">
        <EmployeeDirectory employees={employees} />
      </main>
    </div>
  );
}

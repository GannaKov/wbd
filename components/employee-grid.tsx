import { EmployeeCard } from "@/components/employee-card";
import type { Employee } from "@/lib/types";

interface EmployeeGridProps {
  employees: Employee[];
}

export function EmployeeGrid({ employees }: EmployeeGridProps) {
  if (employees.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        Keine Mitarbeiter für dieses Projekt gefunden.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { EmployeeGrid } from "@/components/employee-grid";
import { ALLE, SelectFilter } from "@/components/select-filter";
import { LANGUAGES, PROJECTS, type Language, type Project } from "@/data/constants";
import type { Employee } from "@/lib/types";

interface EmployeeDirectoryProps {
  employees: Employee[];
}

export function EmployeeDirectory({ employees }: EmployeeDirectoryProps) {
  const [projectFilter, setProjectFilter] = useState<Project | typeof ALLE>(ALLE);
  const [languageFilter, setLanguageFilter] = useState<Language | typeof ALLE>(ALLE);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesProject =
        projectFilter === ALLE || employee.projekte.includes(projectFilter);
      const matchesLanguage =
        languageFilter === ALLE || employee.sprachen.includes(languageFilter);
      return matchesProject && matchesLanguage;
    });
  }, [employees, projectFilter, languageFilter]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {filteredEmployees.length} von {employees.length} Mitarbeitern
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <SelectFilter
            label="Projekt"
            value={projectFilter}
            options={PROJECTS}
            onChange={setProjectFilter}
          />
          <SelectFilter
            label="Sprache"
            value={languageFilter}
            options={LANGUAGES}
            onChange={setLanguageFilter}
          />
        </div>
      </div>
      <EmployeeGrid employees={filteredEmployees} />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Employee } from "@/lib/types";

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      aria-pressed={flipped}
      aria-label={`${employee.nachname} ${employee.vorname} – Karte umdrehen`}
      className="aspect-[3/4] w-full cursor-pointer text-left [perspective:1200px]"
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        <Card className="absolute inset-0 h-full items-center justify-center gap-3 py-4 [backface-visibility:hidden]">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-border sm:h-28 sm:w-28">
            <Image
              src={employee.foto}
              alt={`${employee.vorname} ${employee.nachname}`}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-2 px-2 text-center">
            <p className="text-sm font-medium sm:text-base">
              {employee.nachname} {employee.vorname}
            </p>
            <Badge>{employee.initialen}</Badge>
          </div>
        </Card>

        <Card className="absolute inset-0 h-full items-center justify-center gap-3 py-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Badge className="absolute top-2 right-2">{employee.initialen}</Badge>
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-border">
            <Image
              src={employee.foto}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <p className="text-sm font-medium">
            {employee.vorname} {employee.nachname}
          </p>
          <div className="flex flex-wrap justify-center gap-1 px-3">
            {employee.projekte.map((project) => (
              <Badge key={project} variant="secondary">
                {project}
              </Badge>
            ))}
          </div>
          <p className="px-3 text-center text-xs text-muted-foreground">
            {employee.sprachen.join(" · ")}
          </p>
        </Card>
      </div>
    </button>
  );
}

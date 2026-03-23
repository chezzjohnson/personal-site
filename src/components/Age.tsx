"use client";

import { useMemo } from "react";

function calculateAge(birth: { year: number; month: number; day: number }, now: Date) {
  const y = now.getFullYear();
  const m = now.getMonth() + 1; // 1-12
  const d = now.getDate(); // 1-31

  let age = y - birth.year;
  const beforeBirthday = m < birth.month || (m === birth.month && d < birth.day);
  if (beforeBirthday) age -= 1;
  return age;
}

export function Age({
  birthYear,
  birthMonth,
  birthDay,
}: {
  birthYear: number;
  birthMonth: number; // 1-12
  birthDay: number; // 1-31
}) {
  const age = useMemo(() => {
    return calculateAge(
      { year: birthYear, month: birthMonth, day: birthDay },
      new Date(),
    );
  }, [birthDay, birthMonth, birthYear]);

  return <span>{age}</span>;
}




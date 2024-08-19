"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

// Define a interface para as propriedades do componente
interface TimeSinceProps {
  date: string;
}

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeSince: React.FC<TimeSinceProps> = ({ date }) => {
  const calculateTimeElapsed = (): TimeElapsed => {
    const now = new Date();
    const then = new Date(date);

    // Calcula a diferença em milissegundos
    const diffInMilliseconds = now.getTime() - then.getTime();

    // Calcula a diferença em segundos
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    // Calcula anos, meses e dias
    const years = now.getFullYear() - then.getFullYear();
    const months = now.getMonth() - then.getMonth();
    const daysInCurrentMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0
    ).getDate();
    const days = now.getDate() - then.getDate();

    // Ajusta para o caso onde o número de meses ou dias é negativo
    const adjustedMonths = months < 0 ? months + 12 : months;
    const adjustedYears = years - (months < 0 ? 1 : 0);
    const adjustedDays = days < 0 ? days + daysInCurrentMonth : days;

    // Calcula horas, minutos e segundos
    const seconds = diffInSeconds % 60;
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const hours = Math.floor((diffInSeconds % 86400) / 3600);

    return {
      years: adjustedYears,
      months: adjustedMonths,
      days: adjustedDays,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeElapsed, setTimeElapsed] =
    useState<TimeElapsed>(calculateTimeElapsed);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="space-x-2">
      {timeElapsed.years > 0 && (
        <Badge>
          {timeElapsed.years > 1
            ? `${timeElapsed.years} anos`
            : `${timeElapsed.years} ano`}
        </Badge>
      )}
      {timeElapsed.months > 0 && (
        <Badge>
          {timeElapsed.months > 1
            ? `${timeElapsed.months} meses`
            : `${timeElapsed.months} mês`}
        </Badge>
      )}
      {timeElapsed.days > 0 && (
        <Badge>
          {timeElapsed.days > 1
            ? `${timeElapsed.days} dias`
            : `${timeElapsed.days} dia`}
        </Badge>
      )}
      {timeElapsed.hours > 0 && (
        <Badge>
          {timeElapsed.hours > 1
            ? `${timeElapsed.hours} horas`
            : `${timeElapsed.hours} hora`}
        </Badge>
      )}
      {timeElapsed.minutes > 0 && (
        <Badge>
          {timeElapsed.minutes > 1
            ? `${timeElapsed.minutes} minutos`
            : `${timeElapsed.minutes} minuto`}
        </Badge>
      )}

      <>
        <Badge
          
        >
          {timeElapsed.seconds > 1
            ? `${timeElapsed.seconds} segundos`
            : `${timeElapsed.seconds} segundo`}
        </Badge>
      </>
    </div>
  );
};

export default TimeSince;

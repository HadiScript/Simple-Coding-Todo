"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default ({ error }: ErrorPageProps) => {
  return <div>{error.message}</div>;
};

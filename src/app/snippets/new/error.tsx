"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const CustomError = ({ error }: ErrorPageProps) => {
  return <div>{error.message}</div>;
};

export default CustomError;

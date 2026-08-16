"use client";
const { useFormStatus } = require("react-dom");

export default function FormButton({ className, pendingLabel, children }) {
  const { pending } = useFormStatus();

  return (
    <button className={className} disabled={pending}>
      {pending ? pendingLabel : children}
    </button>
  );
}

import { atom } from "jotai";

export const firstNameAtom = atom("Vaishnavi");
export const lastNameAtom = atom("Mali");

export const fullNameAtom = atom(
  (get) => `${get(firstNameAtom)} ${get(lastNameAtom)}`,
);

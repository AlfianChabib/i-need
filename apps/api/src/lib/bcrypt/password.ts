import { hashSync, genSaltSync } from "bcrypt";

export const hashPassword = (password: string) => {
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  return { hashedPassword, salt };
};

export const comparePassword = (password: string, hashedPassword: string, salt: string) => {
  return hashSync(password, salt) === hashedPassword;
};

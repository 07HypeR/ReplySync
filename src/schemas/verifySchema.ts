<<<<<<< HEAD
import { z } from 'zod';

export const verifySchema = z.object({
  code: z.string().length(6, 'Verification code must be 6 digits'),
=======
import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
});

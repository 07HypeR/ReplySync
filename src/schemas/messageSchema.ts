<<<<<<< HEAD
import { z } from 'zod'
=======
import { z } from "zod";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export const messageSchema = z.object({
  content: z
    .string()
<<<<<<< HEAD
    .min(10, { message: 'Content must be at least 10 characters.' })
    .max(300, { message: 'Content must not be longer than 300 characters.' }),
=======
    .min(10, { message: "Content must be at least 10 characters." })
    .max(300, { message: "Content must not be longer than 300 characters." }),
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
});

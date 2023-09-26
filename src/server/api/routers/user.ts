import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  findUser: publicProcedure.input(
		z.object({
			userEmail: z.string(),
		})
	)
	.query(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findFirst({
      where: {
        email: input.userEmail
      }
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    return user;
  })
});

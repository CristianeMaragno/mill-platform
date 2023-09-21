import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const moduleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.module.findMany({
      where: {
        active: true
      }
    });
  }),
});

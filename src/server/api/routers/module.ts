import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const moduleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const modules = await ctx.prisma.module.findMany({
      take: 5
    });
    if (!modules) throw new TRPCError({ code: "NOT_FOUND" });

    return modules;
  })
});

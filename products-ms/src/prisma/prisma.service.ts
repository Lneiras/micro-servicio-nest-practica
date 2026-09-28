import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL!,
});

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
    public client = new PrismaClient({
        adapter,
    });

    async onModuleInit() {
        await this.client.$connect();
        console.log("Database connected successfully");
    }

    async onModuleDestroy() {
        await this.client.$disconnect();
    }
}

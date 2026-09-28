import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js'; 
import 'dotenv/config'; // Procesa de forma correcta las variables de tu archivo .env

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
    
    public client = new PrismaClient();

    async onModuleInit() {
        await this.client.$connect();
        console.log("Database connected successfully");
    }

    async onModuleDestroy() {
        await this.client.$disconnect();
    }
}
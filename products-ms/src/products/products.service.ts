import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PrismaService } from '../prisma/prisma.service.js'; // Ajusta la ruta según tu estructura

@Injectable()
export class ProductsService {
  
  // Inyectamos el cliente mediante el constructor
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    // Ejemplo de cómo usarlo ahora: return this.prisma.product.create({ data: createProductDto });
    return 'This action adds a new product';
  }

  findAll() {
    // Ejemplo de cómo usarlo ahora: return this.prisma.product.findMany();
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

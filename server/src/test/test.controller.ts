import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { TestService } from './test.service.js'
import { CreateTestDto } from './dto/create-test.dto.js'
import { UpdateTestDto } from './dto/update-test.dto.js'

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto)
  }

  @Get()
  findAll() {
    return this.testService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id)
  }
}

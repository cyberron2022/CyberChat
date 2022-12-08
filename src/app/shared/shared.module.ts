import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaginationModule } from "./pagination/pagination.module";

@NgModule({
  imports: [CommonModule, PaginationModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, PaginationModule],
})
export class SharedModule {}

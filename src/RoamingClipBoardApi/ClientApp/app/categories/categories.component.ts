﻿import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../shared/categoryDataService';

import { getCalendarFormat } from 'ngx-bootstrap/chronos/moment/calendar';
import { Category } from '../../Models/catergory';  // <-- Note that this folder is misspelled

@Component({
    selector: 'roamclip-categories',
    templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
    // Normally the properties are first, before the constructor
    // No need for "public". Properties are public by default.
    tableHeader: string = 'Clipboard Categories';
    categories: Category[] = [];
    errorMessage: string;

    constructor(private data: CategoryDataService) { }

    // I added the code for the Observable. You can comment this out to use the async technique instead.
    ngOnInit(): void {
        // this.getCategories().catch(() => { });
        this.data.loadCategories().subscribe(
            (categories: Category[]) => this.categories = categories,
            (error: any) => this.errorMessage = <any>error
        );
    };

    async getCategories() {
        this.categories = await this.data.loadCategoriesAsync();
    }
}


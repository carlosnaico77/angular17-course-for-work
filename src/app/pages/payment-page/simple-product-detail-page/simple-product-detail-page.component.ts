import { DecimalPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { debounceTime } from 'rxjs';

interface ICartProduct {
	name: string;
	price: number;
	quantity: number;
	total: number;
}

const PRODUCTS: ICartProduct[] = [
	{ name: 'Mens Casual Slim Fit', price: 109.95, quantity: 2, total: 219.9 },
	{ name: "ohn Hardy Women's Legends Naga Gold & Silver Dragon", price: 695, quantity: 1, total: 695 },
	{ name: 'ierced Owl Rose Gold Plated Stainless Steel Double', price: 10.99, quantity: 1, total: 10.99 }
];

@Component({
	selector: 'app-simple-product-detail-page',
	standalone: true,
	imports: [
		MatTableModule,
		JsonPipe,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		NgIf,
		MatButtonModule,
		DecimalPipe
	],
	templateUrl: './simple-product-detail-page.component.html',
	styleUrl: './simple-product-detail-page.component.scss'
})
export class SimpleProductDetailPageComponent implements OnInit {
	displayedColumns: string[] = ['name', 'price', 'quantity', 'total'];
	private readonly formBuilder = inject(FormBuilder);

	form = this.formBuilder.group({
		total: PRODUCTS.reduce((prev, current) => prev + current.total, 0),
		products: this.formBuilder.array(PRODUCTS.map((item) => this._createFormGroup(item)))
	});

	dataSource = new MatTableDataSource(this.form.controls.products.controls);

	constructor() {}

	ngOnInit(): void {
		this._calculate_row_total();
		this._calculate_total();
	}

	private _createFormGroup(item: ICartProduct) {
		return this.formBuilder.nonNullable.group({
			name: item.name,
			price: item.price,
			quantity: item.quantity,
			total: item.total
		});
	}

	private _calculate_row_total() {
		this.productsFormArray.controls.forEach(({ controls: { quantity, price, total } }) => {
			quantity.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
				const priceValue = price.value;
				let totalValue = 0;
				if (value) {
					totalValue = priceValue * value;
				}
				total.setValue(totalValue);
			});
		});
	}

	private _calculate_total() {
		this.productsFormArray.valueChanges.pipe(debounceTime(210)).subscribe((control) => {
			const total = control.reduce((prev, current) => prev + current.total!, 0);
			this.form.controls.total.setValue(total);
		});
	}

	get productsFormArray() {
		return this.form.controls.products;
	}

	showValues(): void {
		console.log(this.form.value);
	}
}

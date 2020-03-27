import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PantryElDto } from 'src/app/dto';
import { PantryService } from 'src/app/service/pantry.service';
import { PantryListHelperService } from 'src/app/service/pantry-list-helper.service';
import { Subscription } from 'rxjs';
import { PantryStoreService } from 'src/app/service/pantry-store.service';

@Component({
  selector: 'app-pantry-element-new',
  templateUrl: './pantry-element-new.component.html',
  styleUrls: ['./pantry-element-new.component.scss']
})
export class PantryElementNewComponent implements OnInit {
  pantryElForm: FormGroup = this.fb.group({
    item: ['', Validators.required],
    kind: ['', Validators.required],
    weight: ['', Validators.required],
    expirationDate: ['', Validators.required],
  });

  listElSub = new Subscription();
  addFormVisible: boolean;

  constructor(
    private fb: FormBuilder,
    private pantryService: PantryService,
    private helper: PantryListHelperService,
    private pantryStoreService: PantryStoreService
    ) { }

  ngOnInit(): void {
    this.listElSub.add(this.helper.currentIsAddFormVisible.subscribe(data => this.addFormVisible = data));
  }

  onSubmit(): void {
    if (this.pantryElForm.valid) {
      this.pantryService.savePantryElement(this.pantryElForm.value).
        subscribe(
          res => {
            alert('item was added');
            this.pantryStoreService.getPantryList();
            this.helper.toggleAddForm(!this.addFormVisible);
          },
          err => console.error(err)
        );
    }

  }

}

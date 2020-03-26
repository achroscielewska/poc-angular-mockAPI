import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PantryElDto } from 'src/app/dto';
import { PantryService } from 'src/app/service/pantry.service';

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

  constructor(private fb: FormBuilder, private pantryService: PantryService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.pantryElForm.valid) {
      this.pantryService.savePantryElement(this.pantryElForm.value).
        subscribe(
          res => console.log(res),
          err => console.error(err)
        );
    }

  }

}

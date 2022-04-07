import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from 'src/app/auth/validators/my.validators';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [Validators.maxLength(255)]),
      imgLink: new FormControl('', [Validators.required, MyValidator.url]),
      videoLink: new FormControl('', [Validators.required, MyValidator.url]),
      date: new FormControl('', [Validators.required, MyValidator.date]),
    });
  }

  submit(): void {
    console.log(this.form);
  }
}

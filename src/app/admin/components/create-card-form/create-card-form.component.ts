import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MyValidator } from 'src/app/core/validators/my.validators';
import { AddCustomVideo } from 'src/app/redux/actions/custom-video.action';
import { YoutubeState } from 'src/app/redux/state.model';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private store: Store<YoutubeState>, private router: Router) {}

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
    if (this.form.valid) {
      this.store.dispatch(new AddCustomVideo(this.form.value));
      this.router.navigate(['search']);
    }
  }
}

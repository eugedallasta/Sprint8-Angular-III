import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form!: FormGroup;

  private readonly newProperty = localStorage.getItem('Users');

  constructor(private fb: FormBuilder, private router: Router) { }

  get emailField() {
    return this.form.get('email')
  }
  get passwordField() {
    return this.form.get('password')
  }
  get confirmPasswordField() {
    return this.form.get('confirmPassword')
  }
  ngOnInit(): void {
    this.buildForm();
  }


  private buildForm() {
    this.form = this.fb.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    }, { validators: this.passwordMatch });

    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe();
  }
  passwordMatch(form: FormGroup): Validators | null {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { notmatched: true };
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user: any = this.form.value;
      localStorage.setItem('User', JSON.stringify(user));
      alert('Te has registrado correctamente');
      this.router.navigate(['/signup/']);
      console.log(user);
    } else {
      this.form.markAllAsTouched();
    }
  }

}




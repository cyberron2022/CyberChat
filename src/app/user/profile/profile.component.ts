import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { GenericValidator } from "src/app/shared/generic-validator";

import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import * as UserActions from "../state/user.action";
import { getCurrentUser, RootState } from "../state/user.reducer";
import { User } from "../user";

@Component({
  selector: "pm-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  pageTitle = "User Profile";
  profile$: Observable<User | null>;
  selectedProfile$: Observable<User>;
  errorMessage$: Observable<string>;

  validationMessages: { [key: string]: { [key: string]: string } };
  profileForm: FormGroup;
  genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<RootState>
  ) {
    this.validationMessages = {
      firstname: {
        required: "First name is required.",
        minlength: "First name must be at least three characters.",
        maxlength: "First name cannot exceed 50 characters.",
      },
      lastname: {
        required: "Last name is required.",
        minlength: "Last name must be at least three characters.",
        maxlength: "Last name cannot exceed 50 characters.",
      },
      userType: {
        required: "User type is required.",
        minlength: "User type must be at least five characters.",
        maxlength: "User type cannot exceed 10 characters.",
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstname: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      lastname: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      userType: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
    });

    this.profile$ = this.store
      .select(getCurrentUser)
      .pipe(tap((currentUser) => this.displayProfile(currentUser)));

    // Watch for value changes for validation
    this.profileForm.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(
          this.profileForm
        ))
    );
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(
      this.profileForm
    );
  }
  saveProfile(originalProfile: User): void {
    if (this.profileForm.valid) {
      if (this.profileForm.dirty) {
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const resultProduct = { ...originalProfile, ...this.profileForm.value };

        if (resultProduct.id !== 0 && resultProduct.id !== null) {
          this.store.dispatch(
            UserActions.updateProfile({ users: resultProduct })
          );
          this.profileForm.reset();
          this.router.navigate(["/welcome"]);
        }
      }
    }
  }

  displayProfile(profile: User | null): void {
    // Set the local product property
    if (profile) {
      // Reset the form back to pristine
      this.profileForm.reset();
      // Display the appropriate page title
      if (profile.id === 0) {
        this.pageTitle = "Add Profile";
      } else {
        this.pageTitle = `Edit Profile: ${profile.firstname} ${profile.lastname}`;
      }
      // Update the data on the form
      this.profileForm.patchValue({
        firstname: profile.firstname,
        lastname: profile.lastname,
        userType: profile.userType,
      });
    }
  }
  cancelEdit(profile: User): void {
    // // Redisplay the currently selected product
    // // replacing any edits made
    //this.displayProduct(profile);
    this.router.navigate(["/welcome"]);
  }
}

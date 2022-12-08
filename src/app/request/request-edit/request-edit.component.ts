import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { GenericValidator } from "src/app/shared/generic-validator";

import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { IRequest } from "../request";
import { getCurrentRequest, RootState } from "../state";
import { RequestPageActions } from "../state/actions";

@Component({
  templateUrl: "./request-edit.component.html",
  styleUrls: ["./request-edit.component.scss"],
})
export class RequestEditComponent implements OnInit {
  requestId: number;
  pageTitle: string = "New Request";
  request$: Observable<IRequest | null>;
  selectedRequest$: Observable<IRequest>;
  errorMessage$: Observable<string>;

  validationMessages: { [key: string]: { [key: string]: string } };
  requestForm: FormGroup;
  genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<RootState>
  ) {
    this.validationMessages = {
      title: {
        required: "Title is required.",
        minlength: "Title must be at least three characters.",
        maxlength: "Title cannot exceed 100 characters.",
      },
      message: {
        required: "Message is required.",
        minlength: "Message must be at least three characters.",
        maxlength: "Message cannot exceed 5000 characters.",
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.requestId = Number(this.route.snapshot.paramMap.get("id"));
    this.requestForm = this.fb.group({
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      message: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5000),
        ],
      ],
    });

    this.request$ = this.store
      .select(getCurrentRequest)
      .pipe(tap((currentRequest) => this.displayProfile(currentRequest)));
    //.pipe(tap((currentRequest) => console.log(currentRequest)));

    // Watch for value changes for validation
    this.requestForm.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(
          this.requestForm
        ))
    );
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(
      this.requestForm
    );
  }
  saveRequest(originalRequest: IRequest): void {
    if (this.requestForm.valid) {
      if (this.requestForm.dirty) {
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const resultProduct = { ...originalRequest, ...this.requestForm.value };

        if (resultProduct.id !== 0 && resultProduct.id !== null) {
          this.store.dispatch(
            RequestPageActions.updateRequest({ request: resultProduct })
          );
        } else {
          this.store.dispatch(
            RequestPageActions.createRequest({ request: resultProduct })
          );
        }
        this.requestForm.reset();
        setTimeout(() => {
          this.router.navigate(["/request"]);
        }, 500);
      }
    }
  }

  displayProfile(request: IRequest | null): void {
    // Set the local product property

    if (request) {
      // Reset the form back to pristine
      this.requestForm.reset();
      // Display the appropriate page title
      if (request.id === 0) {
        this.pageTitle = "New Request";
      } else {
        this.pageTitle = `Edit Request:`;
      }
      // Update the data on the form

      this.requestForm.patchValue({
        title: request.title,
        message: request.message,
      });
    }
  }
  cancelEdit(): void {
    // // Redisplay the currently selected product
    // // replacing any edits made
    //this.displayProduct(profile);
    this.router.navigate(["/request"]);
  }
  change() {
    // this.store.dispatch(
    //   RequestPageActions.setDirty({ isDirty: this.requestForm.dirty })
    // );
  }
}

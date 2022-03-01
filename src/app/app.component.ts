import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationStart, Router } from "@angular/router";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
declare var jsPDF;
import * as jspdf from "jspdf";
import { NgxPrinterService } from "ngx-printer";
import { ToastrService } from "ngx-toastr"; 
declare var $: any;
declare function login();
declare function showConfirmPassword();
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("content") content: ElementRef;
  title = "resume";
  public hideH: boolean = true;
   
  @ViewChild("noteModal") closeModal: ElementRef;
  @ViewChild("loginRef", { static: true }) loginElement: ElementRef;
  userName;
  userId;
  showModal: boolean;
  public templateList: any = [];
  public user_id: number;
  public login_name = "";
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  public verifyEmailForm: FormGroup;
  public forgetPasswordForm: FormGroup;
  public submit_r: boolean = false;
  public submit_l: boolean = false;
  public submit_v: boolean = false;
  public submit_f: boolean = false;
  public loginTab: boolean = true;
  public signup: boolean = false;
  public forgetPass: boolean = false;
  public confirmEmail: boolean = false;
  public userInfo: any;
  public email_verified: boolean = false;
  public templateInfo: any;
  constructor( 
    private router: Router,
    private readonly cd: ChangeDetectorRef, 
    private  _NgbModal: NgbModal, 
    private toastr: ToastrService, 
    private fb: FormBuilder
  ) {  
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // console.log(event['url'].split('/'));
        if (((event['url']).split('/')[1] == 'admin')) {
          this.hideH = false; 
        } else {
          this.hideH = true; 
        }
      }
         
      
    }); 
  }
   
  ngOnInit(): void {
    // this.dialogService.register(this.appDialog);
   
    // this.storage.removeItem('user_id');
  }
 
  
}

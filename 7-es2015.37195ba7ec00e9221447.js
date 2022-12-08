(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Jit6:function(e,t,s){"use strict";s.r(t),s.d(t,"RequestModule",(function(){return ve}));var r={};s.r(r),s.d(r,"loadRequestSuccess",(function(){return f})),s.d(r,"loadRequestFailure",(function(){return m})),s.d(r,"loadPageRequestSuccess",(function(){return O})),s.d(r,"loadPageRequestFailure",(function(){return j})),s.d(r,"updateRequestSuccess",(function(){return v})),s.d(r,"updateRequestFailure",(function(){return M})),s.d(r,"createRequestSuccess",(function(){return L})),s.d(r,"createRequestFailure",(function(){return P})),s.d(r,"deleteRequestSuccess",(function(){return I})),s.d(r,"deleteRequestFailure",(function(){return E})),s.d(r,"acceptRequestSuccess",(function(){return y})),s.d(r,"acceptRequestFailure",(function(){return k}));var i={};s.r(i),s.d(i,"loadRequest",(function(){return S})),s.d(i,"loadPageRequest",(function(){return w})),s.d(i,"setCurrrentRequest",(function(){return x})),s.d(i,"clearCurrrentRequest",(function(){return C})),s.d(i,"initCurrentRequest",(function(){return z})),s.d(i,"setDirty",(function(){return F})),s.d(i,"updateRequest",(function(){return T})),s.d(i,"createRequest",(function(){return _})),s.d(i,"deleteRequest",(function(){return $})),s.d(i,"acceptRequest",(function(){return U}));var n=s("iInd"),c=s("Yml6"),u=s("DQLy"),a=s("PCNd"),o=s("s7LF"),b=s("QEVK"),l=s("vkgz");const d=Object(u.o)("requests"),g=Object(u.q)(d,e=>e.currentRequestId),p=Object(u.q)(d,g,(e,t)=>0===t?{id:0,client_id:0,title:"",message:"",created_date:(new Date).toString(),accept_support_id:"0"}:t?e.requests.find(e=>e.id===t):null),q=Object(u.q)(d,e=>e.requests),h=Object(u.q)(d,e=>e.totalRecords),R=Object(u.q)(d,e=>e.totalPage),f=(Object(u.q)(d,e=>e.error),Object(u.n)("[Request API] Load Request Success",Object(u.s)())),m=Object(u.n)("[Request API] Load Request Fail",Object(u.s)()),O=Object(u.n)("[Request API] Load Page Request Success",Object(u.s)()),j=Object(u.n)("[Request API] Load Page Request Fail",Object(u.s)()),v=Object(u.n)("[Request Edit API] Update Request Success",Object(u.s)()),M=Object(u.n)("[Request Edit API] Update Request Fail",Object(u.s)()),L=Object(u.n)("[Request New API] Create Request Success",Object(u.s)()),P=Object(u.n)("[Request New API] Create Request Fail",Object(u.s)()),I=Object(u.n)("[Request List API] Delete Request Success",Object(u.s)()),E=Object(u.n)("[Request List API] Delete Request Fail",Object(u.s)()),y=Object(u.n)("[Request List API] Accept Request Success",Object(u.s)()),k=Object(u.n)("[Request List API] Accept Request Fail",Object(u.s)()),S=Object(u.n)("[Request List Page] Load Request"),w=Object(u.n)("[Request List Page] Load Page Request",Object(u.s)()),x=Object(u.n)("[Request List Page] Set Current Request",Object(u.s)()),C=Object(u.n)("[Request Edit Page] Clear Current Request"),z=Object(u.n)("[Request List Page] Initialize Current Request"),F=Object(u.n)("[Product Edit Page] Set Product Dirty",Object(u.s)()),T=Object(u.n)("[Request Edit Page] Update Request",Object(u.s)()),_=Object(u.n)("[Request New Page] Create Request",Object(u.s)()),$=Object(u.n)("[Request List Page] Delete Request",Object(u.s)()),U=Object(u.n)("[Request List Page] Accept Request",Object(u.s)());var N=s("8Y7J"),W=s("SVse");function A(e,t){if(1&e&&(N.Mb(0,"span",17),N.kc(1),N.Lb()),2&e){const e=N.Wb(2);N.zb(1),N.mc(" ",e.displayMessage.title," ")}}function D(e,t){if(1&e&&(N.Mb(0,"span",17),N.kc(1),N.Lb()),2&e){const e=N.Wb(2);N.zb(1),N.mc(" ",e.displayMessage.message," ")}}const V=function(e){return{"is-invalid":e}};function J(e,t){if(1&e){const e=N.Nb();N.Mb(0,"div",2),N.Mb(1,"div",3),N.kc(2),N.Lb(),N.Mb(3,"div",4),N.Mb(4,"form",5),N.Ub("ngSubmit",(function(){N.fc(e);const s=t.ngIf;return N.Wb().saveRequest(s)})),N.Mb(5,"fieldset"),N.Mb(6,"div",6),N.Mb(7,"label",7),N.kc(8,"Title"),N.Lb(),N.Mb(9,"div",8),N.Mb(10,"input",9),N.Ub("blur",(function(){return N.fc(e),N.Wb().blur()})),N.Lb(),N.ic(11,A,2,1,"span",10),N.Lb(),N.Lb(),N.Mb(12,"div",6),N.Mb(13,"label",11),N.kc(14,"Message"),N.Lb(),N.Mb(15,"div",8),N.Mb(16,"textarea",12),N.Ub("change",(function(){return N.fc(e),N.Wb().change()})),N.kc(17,"              "),N.Lb(),N.ic(18,D,2,1,"span",10),N.Lb(),N.Lb(),N.Mb(19,"div",13),N.Mb(20,"div",14),N.Mb(21,"span"),N.Mb(22,"button",15),N.kc(23," Save "),N.Lb(),N.Lb(),N.Mb(24,"span"),N.Mb(25,"button",16),N.Ub("click",(function(){return N.fc(e),N.Wb().cancelEdit()})),N.kc(26," Cancel "),N.Lb(),N.Lb(),N.Lb(),N.Lb(),N.Lb(),N.Lb(),N.Lb(),N.Lb()}if(2&e){const e=N.Wb();N.zb(2),N.mc(" ",e.pageTitle," "),N.zb(2),N.ac("formGroup",e.requestForm),N.zb(6),N.ac("ngClass",N.bc(7,V,e.displayMessage.title)),N.zb(1),N.ac("ngIf",e.displayMessage.title),N.zb(5),N.ac("ngClass",N.bc(9,V,e.displayMessage.message)),N.zb(2),N.ac("ngIf",e.displayMessage.message),N.zb(4),N.ac("disabled",!e.requestForm.valid||!e.requestForm.dirty)}}function G(e,t){if(1&e&&(N.Mb(0,"div",18),N.kc(1),N.Lb()),2&e){const e=t.ngIf;N.zb(1),N.mc(" Error: ",e,"\n")}}let Y=(()=>{class e{constructor(e,t,s,r){this.route=e,this.router=t,this.fb=s,this.store=r,this.pageTitle="New Request",this.displayMessage={},this.validationMessages={title:{required:"Title is required.",minlength:"Title must be at least three characters.",maxlength:"Title cannot exceed 100 characters."},message:{required:"Message is required.",minlength:"Message must be at least three characters.",maxlength:"Message cannot exceed 5000 characters."}},this.genericValidator=new b.a(this.validationMessages)}ngOnInit(){this.requestId=Number(this.route.snapshot.paramMap.get("id")),this.requestForm=this.fb.group({title:["",[o.m.required,o.m.minLength(3),o.m.maxLength(100)]],message:["",[o.m.required,o.m.minLength(3),o.m.maxLength(5e3)]]}),this.request$=this.store.select(p).pipe(Object(l.a)(e=>this.displayProfile(e))),this.requestForm.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.requestForm))}blur(){this.displayMessage=this.genericValidator.processMessages(this.requestForm)}saveRequest(e){if(this.requestForm.valid&&this.requestForm.dirty){const t=Object.assign(Object.assign({},e),this.requestForm.value);this.store.dispatch(0!==t.id&&null!==t.id?i.updateRequest({request:t}):i.createRequest({request:t})),this.requestForm.reset(),setTimeout(()=>{this.router.navigate(["/request"])},500)}}displayProfile(e){e&&(this.requestForm.reset(),this.pageTitle=0===e.id?"New Request":"Edit Request:",this.requestForm.patchValue({title:e.title,message:e.message}))}cancelEdit(){this.router.navigate(["/request"])}change(){}}return e.\u0275fac=function(t){return new(t||e)(N.Jb(n.a),N.Jb(n.b),N.Jb(o.b),N.Jb(u.h))},e.\u0275cmp=N.Db({type:e,selectors:[["ng-component"]],decls:4,vars:6,consts:[["class","card",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"card"],[1,"card-header"],[1,"card-body"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","firstNameId",1,"col-md-3","col-form-label"],[1,"col-md-9"],["id","titleId","type","text","placeholder","Title (required)","formControlName","title",1,"form-control",3,"ngClass","blur"],["class","invalid-feedback",4,"ngIf"],["for","messageId",1,"col-md-3","col-form-label"],["id","messageId","placeholder","Message (required)","rows","3","formControlName","message",1,"form-control",3,"ngClass","change"],[1,"form-group"],[1,"col-md-10","col-md-offset-2"],["type","submit",1,"btn","btn-primary",2,"width","80px","margin-right","10px",3,"disabled"],["type","button",1,"btn","btn-light",2,"width","80px","margin-right","10px",3,"click"],[1,"invalid-feedback"],[1,"alert","alert-danger"]],template:function(e,t){1&e&&(N.ic(0,J,27,11,"div",0),N.Xb(1,"async"),N.ic(2,G,2,1,"div",1),N.Xb(3,"async")),2&e&&(N.ac("ngIf",N.Yb(1,2,t.request$)),N.zb(2),N.ac("ngIf",N.Yb(3,4,t.errorMessage$)))},directives:[W.l,o.n,o.h,o.e,o.a,o.g,o.c,W.j],pipes:[W.b],styles:[""]}),e})();var Q=s("lGQG"),X=s("Mb37"),B=s("z6cu"),K=s("JIr8"),Z=s("lJxs"),H=s("IheW");let ee=(()=>{class e{constructor(e,t){this.http=e,this.authService=t,this.requestUrl="https://cyberron.somee.com/api/request"}ngOnInit(){}getRequest(){return this.http.post(this.requestUrl,{token:this.authService.appToken,user_id:this.authService.currentUserId}).pipe(Object(K.a)(this.handleError))}getRequestPage(e){return this.http.post(this.requestUrl,{token:this.authService.appToken,user_id:this.authService.currentUserId}).pipe(Object(Z.a)(t=>{const s=e.pageSize,r=e.page,i=isNaN(r)?0:+r;let n=isNaN(s)?10:i+ +s;return n>t.length&&(n=i+(t.length-i)),{results:(t=t.filter(t=>t.title.toLowerCase().includes(e.filteredValue.toLowerCase())||t.message.toLowerCase().includes(e.filteredValue.toLowerCase()))).slice(i,n),pageSize:e.pageSize,totalRecords:t.length}}),Object(K.a)(this.handleError))}updateRequest(e){return this.http.post(this.requestUrl+"/update",{id:e.id,token:this.authService.appToken,client_id:this.authService.currentUserId,title:e.title,message:e.message}).pipe(Object(K.a)(this.handleError))}createRequest(e){return this.http.post(this.requestUrl+"/create",{token:this.authService.appToken,client_id:this.authService.currentUserId,title:e.title,message:e.message}).pipe(Object(K.a)(this.handleError))}deleteRequest(e){return this.http.post(this.requestUrl+"/delete",{id:e.id,token:this.authService.appToken}).pipe(Object(K.a)(this.handleError))}acceptRequest(e){return console.log(e),this.http.post(this.requestUrl+"/accept",{request_id:e,user_id:this.authService.currentUserId,token:this.authService.appToken}).pipe(Object(K.a)(this.handleError))}handleError(e){let t;return t=e.error instanceof ErrorEvent?"An error occurred: "+e.error.message:`Backend returned code ${e.status}: ${e.body.error}`,console.error(e),Object(B.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(N.Qb(H.a),N.Qb(Q.a))},e.\u0275prov=N.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function te(e,t){if(1&e){const e=N.Nb();N.Mb(0,"a",6),N.Ub("click",(function(){N.fc(e);const t=N.Wb().$implicit;return N.Wb().onGoTo(t)}))("keyup.enter",(function(){N.fc(e);const t=N.Wb().$implicit;return N.Wb().onGoTo(t)})),N.kc(1),N.Lb()}if(2&e){const e=N.Wb().$implicit,t=N.Wb();N.Bb("current",e===t.current),N.Ab("aria-current",e===t.current?"page":null)("aria-label",e===t.current?"Current Page, Page "+e:"Go to Page "+e),N.zb(1),N.lc(e)}}function se(e,t){1&e&&(N.Mb(0,"a",7),N.kc(1," ... "),N.Lb())}function re(e,t){if(1&e&&(N.Mb(0,"li"),N.ic(1,te,2,5,"a",4),N.ic(2,se,2,0,"ng-template",null,5,N.jc),N.Lb()),2&e){const e=t.$implicit,s=N.ec(3);N.zb(1),N.ac("ngIf",-1!==e)("ngIfElse",s)}}let ie=(()=>{class e{constructor(){this.current=0,this.total=0,this.goTo=new N.n,this.next=new N.n,this.previous=new N.n,this.pages=[]}ngOnChanges(e){(e.current&&e.current.currentValue||e.total&&e.total.currentValue)&&(this.pages=this.getPages(this.current,this.total))}onGoTo(e){this.goTo.emit(e)}onNext(){this.next.emit(this.current)}onPrevious(){this.previous.next(this.current)}getPages(e,t){return t<=7?[...Array(t).keys()].map(e=>++e):e>5?e>=t-4?[1,-1,t-4,t-3,t-2,t-1,t]:[1,-1,e-1,e,e+1,-1,t]:[1,2,3,4,5,-1,t]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=N.Db({type:e,selectors:[["app-pagination"]],inputs:{current:"current",total:"total"},outputs:{goTo:"goTo",next:"next",previous:"previous"},features:[N.xb],decls:9,vars:5,consts:[["aria-label","Pagination"],["aria-label","Go To Previous Page",3,"disabled","click"],[4,"ngFor","ngForOf"],["aria-label","Go To Next Page",3,"disabled","click"],["class","internal","tabindex","0",3,"current","click","keyup.enter",4,"ngIf","ngIfElse"],["more",""],["tabindex","0",1,"internal",3,"click","keyup.enter"],[1,"more"]],template:function(e,t){1&e&&(N.Mb(0,"nav",0),N.Mb(1,"ul"),N.Mb(2,"li"),N.Mb(3,"button",1),N.Ub("click",(function(){return t.onPrevious()})),N.kc(4," Previous "),N.Lb(),N.Lb(),N.ic(5,re,4,2,"li",2),N.Mb(6,"li"),N.Mb(7,"button",3),N.Ub("click",(function(){return t.onNext()})),N.kc(8," Next "),N.Lb(),N.Lb(),N.Lb(),N.Lb()),2&e&&(N.zb(3),N.ac("disabled",1===t.current),N.Ab("aria-disabled",1===t.current),N.zb(2),N.ac("ngForOf",t.pages),N.zb(2),N.ac("disabled",t.current===t.total),N.Ab("aria-disabled",t.current===t.total))},directives:[W.k,W.l],styles:["nav[_ngcontent-%COMP%]{align-items:center}nav[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{display:flex}ul[_ngcontent-%COMP%]{justify-content:flex-end;list-style:none;margin:0;padding:0}li[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 4px}a[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{align-items:center}a[_ngcontent-%COMP%]{display:grid;justify-items:center;width:100%;cursor:pointer;width:38px;line-height:38px;border-radius:4px;text-align:center;font-size:18px}a.current[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:not(.more):hover{background-color:#007acc;color:#fff;font-weight:700}a.current[_ngcontent-%COMP%], a.more[_ngcontent-%COMP%]:hover{cursor:default;text-decoration:none}button[_ngcontent-%COMP%]{background-color:#e9ecef;border:none;cursor:pointer;display:grid;place-items:center;font-size:18px;border-radius:4px;color:#007acc;padding:8px 16px}button[disabled][_ngcontent-%COMP%]{cursor:default;color:#212529}button[_ngcontent-%COMP%]:not([disabled]):hover{background-color:#007acc;color:#fff;cursor:pointer;outline:none}"]}),e})();const ne=["find"];function ce(e,t){if(1&e){const e=N.Nb();N.Mb(0,"div",12),N.Mb(1,"button",13),N.Ub("click",(function(){return N.fc(e),N.Wb().newRequest(0)})),N.kc(2,"Add Request"),N.Lb(),N.Lb()}}function ue(e,t){if(1&e){const e=N.Nb();N.Mb(0,"td"),N.Mb(1,"div"),N.Mb(2,"button",13),N.Ub("click",(function(){N.fc(e);const t=N.Wb().$implicit;return N.Wb(2).storeCurrentRequest(null==t?null:t.id)})),N.kc(3,"Edit"),N.Lb(),N.Lb(),N.Lb()}}function ae(e,t){if(1&e){const e=N.Nb();N.Mb(0,"td"),N.Mb(1,"div"),N.Mb(2,"button",13),N.Ub("click",(function(){N.fc(e);const t=N.Wb().$implicit;return N.Wb(2).deleteRequest(t)})),N.kc(3,"Delete"),N.Lb(),N.Lb(),N.Lb()}}function oe(e,t){if(1&e){const e=N.Nb();N.Mb(0,"td",22),N.Mb(1,"div"),N.Mb(2,"button",13),N.Ub("click",(function(){N.fc(e);const t=N.Wb().$implicit;return N.Wb(2).acceptRequest(null==t?null:t.id)})),N.kc(3,"Accept"),N.Lb(),N.Lb(),N.Lb()}}function be(e,t){if(1&e&&(N.Mb(0,"tr"),N.Mb(1,"td",25),N.kc(2),N.Lb(),N.Mb(3,"td"),N.kc(4),N.Lb(),N.Mb(5,"td"),N.kc(6),N.Lb(),N.Mb(7,"td"),N.kc(8),N.Xb(9,"date"),N.Lb(),N.Mb(10,"td"),N.kc(11),N.Lb(),N.ic(12,ue,4,0,"td",26),N.ic(13,ae,4,0,"td",26),N.ic(14,oe,4,0,"td",27),N.Lb()),2&e){const e=t.$implicit,s=N.Wb(2);N.zb(2),N.lc(null==e?null:e.id),N.zb(2),N.lc(null==e?null:e.title),N.zb(2),N.lc(null==e?null:e.message),N.zb(2),N.lc(N.Zb(9,8,null==e?null:e.created_date,"short")),N.zb(3),N.lc(null==e?null:e.accept_support_id),N.zb(1),N.ac("ngIf","client"===s.userType&&""===(null==e?null:e.accept_support_id)),N.zb(1),N.ac("ngIf","client"===s.userType&&""===(null==e?null:e.accept_support_id)),N.zb(1),N.ac("ngIf","support"===s.userType&&""===(null==e?null:e.accept_support_id))}}function le(e,t){1&e&&(N.Mb(0,"div",28),N.Mb(1,"span"),N.kc(2," No records found..."),N.Lb(),N.Lb())}function de(e,t){if(1&e){const e=N.Nb();N.Mb(0,"div",14),N.Mb(1,"div",2),N.Mb(2,"div",15),N.Mb(3,"div",16),N.Mb(4,"span",17),N.kc(5,"Find:"),N.Lb(),N.Mb(6,"input",18,19),N.Ub("input",(function(t){return N.fc(e),N.Wb().changeInput(t.target)})),N.Lb(),N.Lb(),N.Lb(),N.Mb(8,"div",7),N.Mb(9,"table",20),N.Mb(10,"thead"),N.Mb(11,"tr"),N.Mb(12,"th",21),N.kc(13,"Id"),N.Lb(),N.Mb(14,"th",21),N.kc(15,"Title"),N.Lb(),N.Mb(16,"th",21),N.kc(17,"Message"),N.Lb(),N.Mb(18,"th",21),N.kc(19,"DateTime"),N.Lb(),N.Mb(20,"th",21),N.kc(21,"Accept By"),N.Lb(),N.Mb(22,"th",22),N.kc(23,"Action"),N.Lb(),N.Lb(),N.Lb(),N.Mb(24,"tbody"),N.ic(25,be,15,11,"tr",23),N.Lb(),N.Lb(),N.ic(26,le,3,0,"div",24),N.Lb(),N.Lb(),N.Lb()}if(2&e){const e=N.Wb();N.zb(25),N.ac("ngForOf",e.requests),N.zb(1),N.ac("ngIf",0===e.requests.length)}}function ge(e,t){if(1&e&&(N.Mb(0,"div",29),N.kc(1),N.Lb()),2&e){const e=N.Wb();N.zb(1),N.mc("\nError: ",e.errorMessage,"\n")}}let pe=(()=>{class e{constructor(){this.deleteRequestEmit=new N.n,this.storeRequestEmit=new N.n,this.newRequestEmit=new N.n,this.acceptRequestEmit=new N.n,this.getRequestPageEmit=new N.n,this.pageChangedEmit=new N.n,this.goToEmit=new N.n,this.nextEmit=new N.n,this.previousEmit=new N.n,this.changeInputEmit=new N.n}ngOnInit(){}deleteRequest(e){this.deleteRequestEmit.emit(e)}storeCurrentRequest(e){this.storeRequestEmit.emit(e)}newRequest(e){this.newRequestEmit.emit(e)}acceptRequest(e){this.acceptRequestEmit.emit(e)}pageChanged(e){this.pageChangedEmit.emit(e)}getRequestPage(e){this.getRequestPageEmit.emit(e)}goTo(e){this.goToEmit.emit(e)}next(){this.nextEmit.emit()}previous(){this.previousEmit.emit()}changeInput(e){this.changeInputEmit.emit(e.value)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=N.Db({type:e,selectors:[["cc-request-list"]],viewQuery:function(e,t){var s;1&e&&N.nc(ne,!0),2&e&&N.dc(s=N.Vb())&&(t.find=s.first)},inputs:{requests:"requests",userType:"userType",errorMessage:"errorMessage",selectedRequest:"selectedRequest",current:"current",totalRecords:"totalRecords",totalPage:"totalPage",pageSize:"pageSize"},outputs:{deleteRequestEmit:"deleteRequestEmit",storeRequestEmit:"storeRequestEmit",newRequestEmit:"newRequestEmit",acceptRequestEmit:"acceptRequestEmit",getRequestPageEmit:"getRequestPageEmit",pageChangedEmit:"pageChangedEmit",goToEmit:"goToEmit",nextEmit:"nextEmit",previousEmit:"previousEmit",changeInputEmit:"changeInputEmit"},decls:15,vars:5,consts:[[1,"card"],[1,"card-header"],[1,"row"],[1,"col-md-6"],["class","col-md-6 d-flex flex-row-reverse",4,"ngIf"],["class","card-body",4,"ngIf"],[1,"card-footer"],[1,"col-md-12"],[3,"current","total","goTo","next","previous"],[1,"form-check","col-md-7"],[1,"col-md-4","text-right"],["class","alert alert-danger",4,"ngIf"],[1,"col-md-6","d-flex","flex-row-reverse"],[1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"col-md-4"],[1,"input-group","mb-3"],["id","inputGroup-sizing-default",1,"input-group-text"],["type","text","aria-label","Find","aria-describedby","inputGroup-sizing-default",1,"form-control",3,"input"],["find",""],[1,"table","table-striped","table-hover"],["scope","col"],["colspan","2"],[4,"ngFor","ngForOf"],["class","text-center no-records",4,"ngIf"],["scope","row"],[4,"ngIf"],["colspan","2",4,"ngIf"],[1,"text-center","no-records"],[1,"alert","alert-danger"]],template:function(e,t){1&e&&(N.Mb(0,"div",0),N.Mb(1,"div",1),N.Mb(2,"div",2),N.Mb(3,"div",3),N.Mb(4,"h4"),N.kc(5,"Request List"),N.Lb(),N.Lb(),N.ic(6,ce,3,0,"div",4),N.Lb(),N.Lb(),N.ic(7,de,27,2,"div",5),N.Mb(8,"div",6),N.Mb(9,"div",2),N.Mb(10,"div",7),N.Mb(11,"app-pagination",8),N.Ub("goTo",(function(e){return t.goTo(e)}))("next",(function(){return t.next()}))("previous",(function(){return t.previous()})),N.Lb(),N.Lb(),N.Kb(12,"div",9),N.Kb(13,"div",10),N.Lb(),N.Lb(),N.Lb(),N.ic(14,ge,2,1,"div",11)),2&e&&(N.zb(6),N.ac("ngIf","client"===t.userType),N.zb(1),N.ac("ngIf",t.requests),N.zb(4),N.ac("current",t.current)("total",t.totalPage),N.zb(3),N.ac("ngIf",t.errorMessage))},directives:[W.l,ie,W.k],pipes:[W.e],styles:[".no-records[_ngcontent-%COMP%]{font-weight:400;font-size:18px}"]}),e})(),qe=(()=>{class e{constructor(e,t,s,r,i){this.store=e,this.router=t,this.auth=s,this.logger=r,this.requestService=i,this.pageSize=10,this.current=1,this.filteredValue=""}ngOnInit(){this.userType=this.auth.userType,this.store.dispatch(i.loadRequest()),this.getRequestPage(1),this.totalRecords$=this.store.select(h),this.totalPage$=this.store.select(R),this.requests$=this.store.select(q)}deleteRequestBtn(e){this.store.dispatch(i.deleteRequest({request:e})),this.goTo(this.current)}saveCurrentRequest(e){this.store.dispatch(i.setCurrrentRequest({currentRequestId:e})),this.goTo(this.current),this.router.navigate(["/request/"+e])}newRequest(e){this.router.navigate(["/request/"+e])}acceptRequest(e){this.store.dispatch(i.acceptRequest({id:e}))}pageChanged(e){this.getRequestPage(e)}getRequestPage(e){this.store.dispatch(i.loadPageRequest({page:(e-1)*this.pageSize,pageSize:this.pageSize,filteredValue:this.filteredValue}))}goTo(e){this.current=e,this.getRequestPage(e)}next(){this.current++,this.getRequestPage(this.current)}previous(){this.current--,this.getRequestPage(this.current)}changeInput(e){this.filteredValue=e,this.getRequestPage(1)}}return e.\u0275fac=function(t){return new(t||e)(N.Jb(u.h),N.Jb(n.b),N.Jb(Q.a),N.Jb(X.a),N.Jb(ee))},e.\u0275cmp=N.Db({type:e,selectors:[["ng-component"]],decls:8,vars:18,consts:[[1,"row"],[1,"col-md-12"],[3,"requests","userType","selectedRequest","errorMessage","current","totalRecords","totalPage","pageSize","deleteRequestEmit","storeRequestEmit","newRequestEmit","acceptRequestEmit","getRequestPageEmit","pageChangedEmit","goToEmit","nextEmit","previousEmit","changeInputEmit"]],template:function(e,t){1&e&&(N.Mb(0,"div",0),N.Mb(1,"div",1),N.Mb(2,"cc-request-list",2),N.Ub("deleteRequestEmit",(function(e){return t.deleteRequestBtn(e)}))("storeRequestEmit",(function(e){return t.saveCurrentRequest(e)}))("newRequestEmit",(function(e){return t.newRequest(e)}))("acceptRequestEmit",(function(e){return t.acceptRequest(e)}))("getRequestPageEmit",(function(e){return t.getRequestPage(e)}))("pageChangedEmit",(function(e){return t.pageChanged(e)}))("goToEmit",(function(e){return t.goTo(e)}))("nextEmit",(function(){return t.next()}))("previousEmit",(function(){return t.previous()}))("changeInputEmit",(function(e){return t.changeInput(e)})),N.Xb(3,"async"),N.Xb(4,"async"),N.Xb(5,"async"),N.Xb(6,"async"),N.Xb(7,"async"),N.Lb(),N.Lb(),N.Lb()),2&e&&(N.zb(2),N.ac("requests",N.Yb(3,8,t.requests$))("userType",t.userType)("selectedRequest",N.Yb(4,10,t.selectedRequest$))("errorMessage",N.Yb(5,12,t.errorMessage$))("current",t.current)("totalRecords",N.Yb(6,14,t.totalRecords$))("totalPage",N.Yb(7,16,t.totalPage$))("pageSize",t.pageSize))},directives:[pe],pipes:[W.b],encapsulation:2}),e})();var he=s("LRne"),Re=s("5+tZ"),fe=s("bOdf");let me=(()=>{class e{constructor(e,t){this.actions$=e,this.requestService=t,this.loadRequest$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(i.loadRequest),Object(Re.a)(()=>this.requestService.getRequest().pipe(Object(Z.a)(e=>r.loadRequestSuccess({requests:e})),Object(K.a)(e=>Object(he.a)(r.loadRequestFailure({error:e}))))))),this.loadPageRequest$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(i.loadPageRequest),Object(Re.a)(e=>this.requestService.getRequestPage({page:e.page,pageSize:e.pageSize,filteredValue:e.filteredValue}).pipe(Object(Z.a)(e=>r.loadPageRequestSuccess({data:e})),Object(K.a)(e=>Object(he.a)(r.loadPageRequestFailure({error:e}))))))),this.updateRequest$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(i.updateRequest),Object(fe.a)(e=>this.requestService.updateRequest(e.request).pipe(Object(Z.a)(e=>r.updateRequestSuccess({request:e})),Object(K.a)(e=>Object(he.a)(r.updateRequestFailure({error:e}))))))),this.createRequest$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(i.createRequest),Object(fe.a)(e=>this.requestService.createRequest(e.request).pipe(Object(Z.a)(e=>r.createRequestSuccess({request:e})),Object(K.a)(e=>Object(he.a)(r.createRequestFailure({error:e}))))))),this.deleteRequest$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(i.deleteRequest),Object(fe.a)(e=>this.requestService.deleteRequest(e.request).pipe(Object(Z.a)(e=>"failed"===e[0].status?r.deleteRequestFailure({error:e[0].message}):r.deleteRequestSuccess({request:e})),Object(K.a)(e=>Object(he.a)(r.deleteRequestFailure({error:e}))))))),this.acceptRequest$=Object(c.c)(()=>this.actions$.pipe(Object(c.d)(i.acceptRequest),Object(fe.a)(e=>this.requestService.acceptRequest(e.id).pipe(Object(Z.a)(e=>r.acceptRequestSuccess({request:e})),Object(K.a)(e=>Object(he.a)(r.acceptRequestFailure({error:e})))))))}}return e.\u0275fac=function(t){return new(t||e)(N.Qb(c.a),N.Qb(ee))},e.\u0275prov=N.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oe=Object(u.p)({currentRequestId:null,isDirty:!1,totalRecords:0,totalPage:0,error:"",requests:[]},Object(u.r)(r.loadPageRequestSuccess,(e,t)=>Object.assign(Object.assign({},e),{error:"",currentRequestId:0,totalRecords:t.data.totalRecords,totalPage:Math.ceil(t.data.totalRecords/t.data.pageSize),requests:t.data.results})),Object(u.r)(r.loadPageRequestFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error,currentRequestId:0})),Object(u.r)(i.setCurrrentRequest,(e,t)=>Object.assign(Object.assign({},e),{currentRequestId:t.currentRequestId,error:"",isDirty:!1})),Object(u.r)(i.clearCurrrentRequest,e=>Object.assign(Object.assign({},e),{currentRequestId:null,error:"",isDirty:!1})),Object(u.r)(i.initCurrentRequest,e=>Object.assign(Object.assign({},e),{currentRequestId:0,error:"",isDirty:!1})),Object(u.r)(r.loadRequestSuccess,(e,t)=>Object.assign(Object.assign({},e),{error:"",currentRequestId:0,requests:t.requests})),Object(u.r)(r.loadRequestFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error,currentRequestId:0})),Object(u.r)(i.setCurrrentRequest,(e,t)=>Object.assign(Object.assign({},e),{currentRequestId:t.currentRequestId})),Object(u.r)(r.updateRequestSuccess,(e,t)=>{let s=e.requests.map(e=>e.id===t.request.id?t.request:e);return Object.assign(Object.assign({},e),{error:"",currentRequestId:0,requests:s})}),Object(u.r)(r.updateRequestFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error,currentRequestId:0})),Object(u.r)(r.createRequestSuccess,(e,t)=>{let s=Object.assign([],e.requests);return s.unshift(t.request[0]),Object.assign(Object.assign({},e),{error:"",currentRequestId:0,requests:s})}),Object(u.r)(r.createRequestFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error,currentRequestId:0})),Object(u.r)(r.deleteRequestSuccess,(e,t)=>{let s=e.requests.filter(e=>e.id!==t.request[0].id);return Object.assign(Object.assign({},e),{error:"",currentRequestId:0,requests:s})}),Object(u.r)(r.deleteRequestFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error,currentRequestId:0})),Object(u.r)(r.acceptRequestSuccess,(e,t)=>{let s=e.requests.map(e=>e.id===t.request[0].id?t.request[0]:e);return Object.assign(Object.assign({},e),{error:"",currentRequestId:0,requests:s})}),Object(u.r)(r.acceptRequestFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error,currentRequestId:0})),Object(u.r)(i.setDirty,(e,t)=>Object.assign(Object.assign({},e),{isDirty:t.isDirty}))),je=[{path:"",component:qe},{path:":id",component:Y}];let ve=(()=>{class e{}return e.\u0275mod=N.Hb({type:e}),e.\u0275inj=N.Gb({factory:function(t){return new(t||e)},imports:[[a.a,n.e.forChild(je),u.j.forFeature("requests",Oe),c.b.forFeature([me])]]}),e})()}}]);
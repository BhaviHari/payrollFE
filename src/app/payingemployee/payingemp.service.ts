import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Idle } from '@ng-idle/core';
import { Observable } from "rxjs";
import { HttpParams, HttpHeaders } from "@angular/common/http";
import { DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { map } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { query } from '@angular/animations';

const payroll_url = environment.apiURL
@Injectable({
  providedIn: 'root'
})
export class PayingempService {

  constructor(private http: HttpClient, private idle: Idle) { }
  idleState = 'Not started.';
  timedOut = false;
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }


  public get_districtValue(stateId : any, districtkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any = localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (districtkeyvalue === null) {
      districtkeyvalue = "";
    }
    let urlvalue = payroll_url + 'mstserv/district_search?state_id=' + stateId + '&query=' + districtkeyvalue + '&page=' + pageno;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }
  public districtdropdown(stateId : any, query : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    let params: any = new HttpParams();

    return this.http.get<any>(payroll_url + "mstserv/district_search?state_id=" + stateId + "&query=" + query, { headers, params })
  }
  public get_cityValue(stateId : any, citykeyvalue : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (citykeyvalue === null) {
      citykeyvalue = "";
    }
    let urlvalue = payroll_url + 'mstserv/new_city_search?state_id=' + stateId + '&query=' + citykeyvalue;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }



  public get_state(statekeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (statekeyvalue === null) {
      statekeyvalue = "";
    }
    let urlvalue = payroll_url + 'mstserv/state_search?query=' + statekeyvalue + '&page=' + pageno;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }
  public get_district(districtkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (districtkeyvalue === null) {
      districtkeyvalue = "";
    }
    let urlvalue = payroll_url + 'mstserv/district_search?query=' + districtkeyvalue + '&page=' + pageno;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }

  public getDistrictSearch(districtkeyvalue : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/district_search?query=' + districtkeyvalue, { 'headers': headers, })
  }
  public getStateSearch(statekeyvalue : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/state_search?query=' + statekeyvalue, { 'headers': headers })
  }




  public getPinCodeSearch(pincodekeyvalue : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/pincode_search?query=' + pincodekeyvalue, { 'headers': headers })
  }
  public get_pinCode(pincodekeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (pincodekeyvalue === null) {
      pincodekeyvalue = "";
    }
    let urlvalue = payroll_url + 'mstserv/pincodesearch?query=' + pincodekeyvalue + '&page=' + pageno;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }
  public PostPayrollApi(emp_id : any,value : any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/emp_payroll_status_update/' + emp_id +'/'+value, { 'headers': headers })
  }
  public ProceedCodeApi(emp_id : any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/emp_status_update/' + emp_id +'?status=3', { 'headers': headers })
  }

  public get_city(citykeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (citykeyvalue === null) {
      citykeyvalue = "";
    }
    let urlvalue = payroll_url + 'mstserv/new_city_search?query=' + citykeyvalue + '&page=' + pageno;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }

  public getCitySearch(citykeyvalue : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/new_city_search?query=' + citykeyvalue, { 'headers': headers })
  }

  public getOrgType(orgkeyvalue : any, pageno :any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/department?query=' + orgkeyvalue + '&page=' + pageno, { 'headers': headers })
  }


  // PF_amount
  public getPF_amount(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/pf_structure', { 'headers': headers })
  }

  // status list api
  public getStatusListApi(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/employee_status_type', { 'headers': headers })
  }



  public get_designation(dsgkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (dsgkeyvalue === null) {
      dsgkeyvalue = "";
    }
    let urlvalue = payroll_url + 'mstserv/designation_search?query=' + dsgkeyvalue + '&page=' + pageno;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }
  public getDesignationSearch(desgkeyvalue : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/designation?name=' + desgkeyvalue, { 'headers': headers })
  }
  // get grade
  public getGradeApi(gstkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/drop_down_grade?name=' + gstkeyvalue + '&page=' + pageno, { 'headers': headers })
  }
  
  public getFunctionalHead(gstkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/searchemployee?query=' + gstkeyvalue   +  '&page=' + pageno, { 'headers': headers })
  }

  public getBSApi(gstkeyvalue : any, pageno: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/businesssegment?query=' + gstkeyvalue + '&page=' + pageno, { 'headers': headers })
  }
  public getCCApi(gstkeyvalue : any, bs_id : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/searchbs_cc?query=' + gstkeyvalue + '&bs_id=' + bs_id + '&page=' + pageno, { 'headers': headers })
  }
  public getEmpBranchApi(gstkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/employeebranch?name=' + gstkeyvalue + '&page=' + pageno, { 'headers': headers })
  }
  public getWorkModeApi(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'hrmsserv/hrms_drop_down?action=work_mode', { 'headers': headers })
  }

  // candidate
  public getCandidateApi(gstkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'recrserv/cand_dd?query=' + gstkeyvalue + '&page=' + pageno, { 'headers': headers })
  }

  // emp detail creation
  public empdetailCreateForm(vendor: any, address: any, bankinfo: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    let addressandbankinfojson = {
      "address": address,
      "employeebankinfo": bankinfo
    }
    let json = Object.assign({}, vendor, addressandbankinfojson)
    const body = JSON.stringify(json)
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + "usrserv/employee_entry", body, { 'headers': headers })
  }

  // emp detail summary
public empSummary(obj : any, pageno : any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/employee_entry?page=' + pageno + '&query=' + obj.code + '&head=' + obj.functional_head + '&status=' + obj.status, { 'headers': headers })
  }
  // usrserv/employee_entry


  // employee Detail view-particular getapi
  public getEmployeeView(emp_id : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "usrserv/emp_info/" + emp_id, { 'headers': headers })
  }

  // generate email Api
  public getgenerateEmail(emp_id : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "usrserv/offer_mail/" + emp_id, { 'headers': headers })
  }

  // create user Api
  public getCreateUserApi(emp_id : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "usrserv/code_gen/" + emp_id, { 'headers': headers })
  }

  // submit to checker
  public getsubmit_tochecker(emp_id : any, status : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "usrserv/emp_status_update/" + emp_id + "?status=" + status, { 'headers': headers })
  }


  // preview pay structure
  public getpreview_paystructure(emp_id : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "usrserv/pay_structure/" + emp_id, { 'headers': headers })
  }

  // candidate bio
  public getCandidate_bio(candidate_id : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "recrserv/cand_info/" + candidate_id, { 'headers': headers })
  }


  // department api
  public getdepartment(orgkeyvalue : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/org_details?query=' + orgkeyvalue + '&page=' + pageno, { 'headers': headers })
  }
  // Paycomponentget

  public getpaycomponents( query_search : any, pageno: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payroll_component?name=' + query_search + '&page=' + pageno, { 'headers': headers })
  }

  public getpaycomponenttype(name : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payroll_component?name=' + name , { 'headers': headers })
  }

  public getpaycomponenttypeApi(name : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payroll_component?name=' + name + '&page=' + pageno  , { 'headers': headers })
  }
  public deductiontype(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payrolldeduction_type_dropdown' , { 'headers': headers })
  }

  public bonusdeductiontype(name: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payrolldeduction_type_dropdown?name=' + name , { 'headers': headers })
  }
  public deductiontypeApi(name : any,pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payrolldeduction_type_dropdown?name=' + name + '&page=' + pageno, { 'headers': headers })
  }
  public emp_levelpf(emp_id : any,action : any): Observable<any> {
    this.reset();
    const httpOptions = {
      responseType:( 'blob' as 'json')
    };
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    if(action===1){
      return this.http.get<any>(payroll_url + 'payrollserv/employee_level_detection?employee_id=' + emp_id + '&action=' + action, { 'headers': headers ,responseType: 'blob' as 'json'})
    }
    else{
      return this.http.get<any>(payroll_url + 'payrollserv/employee_level_detection?employee_id=' + emp_id + '&action=' + action, { 'headers': headers})
    }
    
  }
  // public emp_levelpf(emp_id): Observable<any> {
  //   this.reset();
  //   const getToken : any= localStorage.getItem("sessionData")
  //   let tokenValue = JSON.parse(getToken);
  //   let token = tokenValue.token
  //   const headers = { 'Authorization': 'Token ' + token }
  //   return this.http.get<any>(payroll_url + 'payrollserv/employee_level_detection?employee_id=' + emp_id, { 'headers': headers })
  // }
  public getpftype(query_search : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/pf_structure?query=' + query_search + '&page=' + pageno, { 'headers': headers })
  }
  public payrollsummaryget(query_search : any, pageno : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/employeemonthlypay_summary?action=0&month=5&year=2023' + '&page=' + pageno, { 'headers': headers })
  }
  public employee_monthlypayslip(emp_id :any,search: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    // employeemonthpay_fetch?employee_id=2&month=5&year=2023
    // return this.http.get<any>(payroll_url + 'payrollserv/employeemonthlypay_summary?month=5&year=2023&employee_id=' + emp_id, { 'headers': headers })
    return this.http.get<any>(payroll_url + 'payrollserv/employeemonthpay_fetch?employee_id=' + emp_id + search, { 'headers': headers })
  }

  public paystructuresubmit(json : any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/create_emp_pay", json, { 'headers': headers })
  }
  public deductionsubmit(json: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/create_employeepay_structdeduct", json, { 'headers': headers })
  }

  public get_bank(pincodekeyvalue: any, pageno: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/bank_info_get?name=' + pincodekeyvalue + '&page=' + pageno, { 'headers': headers })
  }
  public get_bankbranch(pincodekeyvalue: any, pageno: any, bank_Id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/bank_fetch/' + bank_Id + '?branch_name=' + pincodekeyvalue + '&page=' + pageno, { 'headers': headers })
  }

  // payroll summary
  public payrollSummary_master(pageno: any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payroll_component?page=' + pageno, { 'headers': headers })
  }

  // allowance type
  public getAllowances(): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/create_componenttype?name=', { 'headers': headers })
  }
  public getAllowance(name:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/create_componenttype?name=' + name, { 'headers': headers })
  }
  public getAllowanceapi(name:any, pageno:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/create_componenttype?name=' + name + '&page=' + pageno, { 'headers': headers })
  }

  // payroll Submit
  public payrollForm(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/payroll_component', json, { 'headers': headers })
  }
  // payroll Submit
  public pfForm(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/pf_structure', json, { 'headers': headers })
  }

  // payroll delete
  public deletepayroll(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/payroll_component/' + id, { 'headers': headers })
  }

  // PF summary
  public pFSummary_master(pageno:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/pf_structure?page=' + pageno, { 'headers': headers })
  }

  // pf delete
  public deletepf(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/employee_pf/' + id, { 'headers': headers })
  }

  // PF particular get
  public getPF_ParticularGet(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/employee_pf/' + id, { 'headers': headers })
  }

  public downloadPayroll(searchValue:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeemonthlypay_summary?action=1&" + searchValue, { 'headers': headers, responseType: 'blob' as 'json' })


  }
  public searchPayroll(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeemonthlypay_summary?action=0&page=" + page + value, { 'headers': headers })

  }

  // payroll delete
  public deletepayrollstruct(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/employee_paystrct_inactive/' + id + "?action=1", { 'headers': headers })
  }

  //pfcomponent summary
  public getComponentType(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_componenttype?page=" + page, { 'headers': headers })

  }
  public getDropDownApi(): Observable<any>{
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/category_dropdown', { 'headers': headers })
  }
  //company contribution summary

  public getCompanyContribution(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/company_contribution?page=" + page, { 'headers': headers })

  }

  //delete PayComponent Type
  public deletepaycomponenttype(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/fetch_componenttype/' + id, { 'headers': headers })
  }
  //edit PayComponent Type
  public getcurrentComptype(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_componenttype', json, { 'headers': headers })
  }

  // add new Paycomponent Type addnewcomptype
  public addnewcomptype(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_componenttype', json, { 'headers': headers })
  }

  //search payComponent Type 
  public searchpaycomponent(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_componenttype?page=" + page + value, { 'headers': headers })

  }

  //search payComponent  
  public searchpaycomp(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/payroll_component?page=" + page + value, { 'headers': headers })

  }
  //delete Company Contribution Type
  public delcompanycontn(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/company_contribution/' + id, { 'headers': headers })
  }
  //search Company Contribution Type
  public searchcompcontrib(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/company_contribution?page=" + page + value, { 'headers': headers })

  }
  //search pf category  
  public searchpfcategory(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/pf_structure?page=" + page + value, { 'headers': headers })

  }


  //add new company contribution
  public addnewcompcontribution(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/company_contribution', json, { 'headers': headers })
  }

  //company contribution get
  public getcompanycontributions(query_search:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/company_contribution?name=' + query_search + '&page=' + pageno, { 'headers': headers })
  }

  //company contribution post
  public compcontributionsubmit(json:any, id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/create_emp_pay?action=1&id="+id, json, { 'headers': headers })
  }

  public getpaycomponent(query_search:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payroll_component?is_deduction=true' + '&page=' + pageno, { 'headers': headers })
  }
  public getCompany_ParticularGet(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/company_contribution/' + id, { 'headers': headers })
  }

  //get employee advance summary
  public getEmpAdvances(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeeadvancedetails_create?page=" + page, { 'headers': headers })

  }
  //add new advance
  public addNewAdvanceEmp(json:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/employeeadvancedetails_create", json, { 'headers': headers })
  }
  //delete Advance
  public deleteempadvance(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/employeeadvance_get/' + id, { 'headers': headers })
  }
  //get particular advance
  public getAdvanceParticularGet(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/employeeadvance_get/' + id, { 'headers': headers })
  }

  //get yearly pay 
  public getYearlyPay(empid:any, yr:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employee_monthlydetails_year?employee_id="+empid+"&year="+yr+"&action=0", { 'headers': headers })

  }
  public DatePicker(month:any,year:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/payapproved_ccbs_payrollget?month="+month+"&year="+year, { 'headers': headers })
  }

  public uploadDocument(upload: any): Observable<any> {
    this.reset();
    let token = '';
    const getToken : any= localStorage.getItem("sessionData");
    if (getToken) {
      let tokenValue = JSON.parse(getToken);
      token = tokenValue.token
    }
    let formData = new FormData();
    formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/paystruct_details_excel_upload1', formData, { 'headers': headers })

  }
  public getUploadSummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/deduction_summary?page=" + page, { 'headers': headers })

  }

  //delete paystructure
  public deletepaystructure(id:any, emp:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/employee_paystrct_inactive/' + id + '?action=1', { 'headers': headers })
  }

  //delete deduction pay
  public deletedeductstructure(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/fetch_emppaystrcut_deduct/' + id, { 'headers': headers })
  }

  //delete company contribution
  public deletecompanycont(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/employee_paystrct_inactive/' + id + '?action=1', { 'headers': headers })
  }
  public getdeductpaycomponents(query_search:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/deduction_payrollcomponent?is_deduction=1&page='+pageno , { 'headers': headers })
  }
  public uploadPayStructure(upload: any): Observable<any> {
    this.reset();
    let token = '';
    const getToken : any= localStorage.getItem("sessionData");
    if (getToken) {
      let tokenValue = JSON.parse(getToken);
      token = tokenValue.token
    }
    let formData = new FormData();
    formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/paystruct_details_excel_upload1', formData, { 'headers': headers })

  }

  public getdeductpaycomponent(query_search:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/pf_structure?page='+pageno , { 'headers': headers })
  }
  public getCalcValue(empid:any,id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/employee_deduction_calculation?employee_id='+empid +"&paycomponent_id="+id , { 'headers': headers })
  }
  public getBloodGroup(id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'hrmsserv/employeedetails/1', { 'headers': headers })
  }
  public getPaystmtSummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/salary_statement_summary?page=" + page, { 'headers': headers })

  }

  public downloadPaySummary(page:any, value:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/salary_statement_summary?excel=0&page="+page +value, { 'headers': headers, responseType: 'blob' as 'json' })


  }
  public getGrade(name:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/drop_down_grade?name=' + name, { 'headers': headers})
  }

  public getpayrollApi(name:any, pageno:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/drop_down_grade?name=' + name + '&page=' + pageno ,{ 'headers': headers})
  }

  public getmapApi(name:any, pageno:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/drop_down_grade?name=' + name + '&page=' + pageno, { 'headers': headers})
  }
  public getCalcValCC(empid:any,id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/company_contribution_calculation?employee_id='+empid+"paycomponent_id="+id, { 'headers': headers })
  }
  public deletepfCategory(id:any, mapid:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + "payrollserv/inactive_paycomponentflagmaster/"+id+"?map_id="+mapid, { 'headers': headers })
    // return this.http.delete<any>(payroll_url + 'mstserv/payroll_component/' + id, { 'headers': headers })
  }

  public deletetemplate(id:any, mapid:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + "payrollserv/inactive_paycomponentflagmaster/"+id+"?map_id="+mapid, { 'headers': headers })
  }
  public getReviewSummary(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/payroll_review?page="+page + value , { 'headers': headers })

  }

  public getYearlySummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/salary_statement_summary?page=" + page, { 'headers': headers })

  }
  public getpaychanges(empid:any, fD:any, tD:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    empid = empid ?? '';
    fD = fD ?? '';
    tD = tD ?? '';
    return this.http.get<any>(payroll_url + "payrollserv/payrollprocesschange_create?employee_id="+empid+"&from_date="+fD+"&to_date="+tD, { 'headers': headers })

  }
  public getStatus(): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/paystatus_dropdown', { 'headers': headers })
  }
  public addNewPayChange(json:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/payrollprocesschange_create", json, { 'headers': headers })
  }

  public deletepays(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/payrollprocesschange_get/' + id, { 'headers': headers })
  }
  public getPay_ParticularGet(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payrollprocesschange_get/' + id, { 'headers': headers })
  }
  public downloadYearlyData(emp:any, yr:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employee_monthlydetails_year?action=1&employee_id="+emp+"&year="+yr , { 'headers': headers, responseType: 'blob' as 'json' })


  }

  public getNewAllowances(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeeadditional_allowance_create?page="+page+"&custom_deduct=False", { 'headers': headers })

  }
  public addNewAllowance(json:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/employeeadditional_allowance_create", json, { 'headers': headers })
  }
  public deleteallowances(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/employeeadditional_allowance_get/'+ id, { 'headers': headers })
  }
  public getAllowance_ParticularGet(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/employeeadditional_allowance_get/' + id, { 'headers': headers })
  }

  public getpaydata(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/payrollprocesschange_create?page="+page, { 'headers': headers })

  }

  public getallowancechanges(empid:any, fD:any, tD:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    empid = empid ?? '';
    fD = fD ?? '';
    tD = tD ?? '';
    return this.http.get<any>(payroll_url + "payrollserv/employeeadditional_allowance_create?employee_id="+empid+"&active_date="+fD+"&end_date="+tD+"&custom_deduct=True", { 'headers': headers })

  }
  public getallowancechangesEarnings(empid:any, fD:any, tD:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    empid = empid ?? '';
    fD = fD ?? '';
    tD = tD ?? '';
    return this.http.get<any>(payroll_url + "payrollserv/employeeadditional_allowance_create?employee_id="+empid+"&active_date="+fD+"&end_date="+tD+"&custom_deduct=False", { 'headers': headers })

  }

  public getAdvanceHistory(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/tran_history_data/' + id, { 'headers': headers })
  }
  //new api for advance creation
  public addNewAdvanceEmployee(json:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("advpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/create_employeeadvance_payrolltran", json, { 'headers': headers })
  }
  public searchGradeLevel(grade:any,name:any,page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/grade_paycomponent/"+grade+"?name="+name+"&page=" + page , { 'headers': headers })

  }

  public changePayStatus(json:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/monthlyinfo_update_getids", json, { 'headers': headers })
  }
  public downloadPayReview(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/payroll_review?excel=1&page="+ page + value, { 'headers': headers, responseType: 'blob' as 'json' })


  }
  public getemployeesdetails(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/emp_details_get", { 'headers': headers })
  }

  public getUsageCode(empkeyvalue:any, pageno: any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    if (empkeyvalue === null) {
      empkeyvalue = ""; 

    }
    let urlvalue = payroll_url + 'usrserv/search_employeebranch?query=' + empkeyvalue + '&page=' + pageno;
    return this.http.get(urlvalue, {
      headers: new HttpHeaders()
        .set('Authorization', 'Token ' + token)
    }
    )
  }

  public getFunctionalHeadByName(name:any,status:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url +'payrollserv/employee_payroll_admin?find_role_id=employee advance&find_role='+ status + '&employeename='+ name ,  { 'headers': headers })
  }

  public getFunctionHeadBychecker(name:any,status:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization' : 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/employee_payroll_admin?find_role_id=employee advance&find_role='+ status + '&employeename='+ name , {'headers': headers } )

  
  }

  public getfunctioncheckerbychecker(name:any,status:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization' : 'Token ' + token} 
    return  this.http.get<any>(payroll_url + 'payrollserv/employee_payroll_admin?find_role_id=employee advance&find_role=' + status + '&employeename='+ name, {'headers': headers} )
  }
  public getEmpAdvancesAdm(page:any, id:any ): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeeadvancedetails_create?&page=" + page + "&admin=True"+ "&adavance_status=" + id, { 'headers': headers })

  }
  public advanceMovetoNext(id:any, empid:any, remark:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url +  "payrollserv/advance_approving_level_data?advance_id="+id+ "&remarks=" + remark +"&advance_status=10&to_employee_id="+empid, { 'headers': headers })

  }


  public advanceMovetoChecker(id:any, empid:any, reason:any):  Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return  this.http.get<any>(payroll_url +  "payrollserv/advance_approving_level_data?advance_id="+id+ "&remarks=" + reason + "&tran_status=9&to_employee_id=" + empid, { 'headers': headers})
  }
  public advanceFinalApproval(id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/advance_approving_level_data?advance_id="+id+ "&tran_status=1", { 'headers': headers })
  }

  public advanceFinalApproved(id:any, values:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/advance_approving_level_data?advance_id="+id+ "&remarks=" + values  + "&tran_status=1", { 'headers': headers })
  }
  // public advancechekertoChecker(id, empid, reason):  Observable<any> {
  //   this.reset();
  //   const getToken : any= localStorage.getItem("sessionData")
  //   let tokenValue = JSON.parse(getToken);
  //   let token = tokenValue.token
  //   const headers = { 'Authorization': 'Token ' + token }
  //   return  this.http.get<any>(payroll_url +  "payrollserv/advance_approving_level_data?advance_id="+id+ "&remarks=" + reason + "&tran_status=9&to_employee_id=" + empid, { 'headers': headers})
  // }
  public advanceReject(id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/advance_approving_level_data?advance_id="+id+"&tran_status=3", { 'headers': headers })

  }
  public searchSegments(name:any,page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_segmentmaster?name="+name+"&page=" + page , { 'headers': headers  })

  }

  public searchsegmentmapping(name:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_paycompseg_mapping?name=" + name , { 'headers': headers }) 
  }

  public searchtemplate(name:any,page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_payrolltemplate?name="+name+"&page=" + page , { 'headers': headers })
  }
  public segmentSummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_segmentmaster?page=" + page , { 'headers': headers })

  }
  public deleteSegments(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/segment_get/' + id, { 'headers': headers })
  }

  public getComponentTypeDropdown(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_componenttype" , { 'headers': headers })

  }

  public getsegmentpageApi(name:any, pageno:any): Observable<any> {
    this.reset();
    const getToken :any = localStorage.getItem('sessionData');
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token;
    const headers = { Authorization: 'Token ' + token };
    return this.http.get<any>(payroll_url + "payrollserv/create_componenttype?name=" + name + '&page=' + pageno, {
      headers,
    });
  }

  public getsegmentpage(name:any): Observable<any> {
    this.reset();
    const getToken :any= localStorage.getItem('sessionData');
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token;
    const headers = { Authorization: 'Token ' + token };
    return this.http.get<any>(payroll_url + "mstserv/create_componenttype?name=" + name , {
      headers,
    });
  }
  public getcomponentFilter (value:any, pageno:any): Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "mstserv/create_componenttype?" + value +  'page=' + pageno , { 'headers': headers })
  }
  public addnewSegment(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_segmentmaster', json, { 'headers': headers })
  }

  public updateSegment(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_segmentmaster', json, { 'headers': headers })
  }

  public getSegmentDropdown(value:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_segmentmaster?name="+ value,  { 'headers': headers })

  }

  public getSegmentDropdownAPI(gstkeyvalue:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_segmentmaster?name="+ gstkeyvalue + '&page=' + pageno,  { 'headers': headers })

  }
  public addnewMapping(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_paycompseg_mapping', json, { 'headers': headers })
  }

  public mappingSummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_paycompseg_mapping?page=" + page , { 'headers': headers })

  }

  public deleteSegmentMapping(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/get_paysegment_data/' + id, { 'headers': headers })
  }

  public updateMappingSegment(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_paycompseg_mapping', json, { 'headers': headers })
  }

  public addnewTemplate(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_payrolltemplate', json, { 'headers': headers })
  }
  public templateSummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_payrolltemplate?page=" + page , { 'headers': headers })

  }
  public deleteTemplates(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/get_payrolltemplate_data/' + id, { 'headers': headers })
  }

  public deletegrade(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'mstserv/grade/' + id, { 'headers': headers })
  }

  public getTemplateParticular(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/get_payrollflagmaster_data/' + id, { 'headers': headers })
  }

  public getgradeParticular(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/grade/' + id, { 'headers': headers })
  }
  public updateTemplate(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/create_payrolltemplate', json, { 'headers': headers })
  }

  public updategrade(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'mstserv/grade', json, { 'headers': headers })
  }
  
  public getPaystmtSummarySearch(page:any, value:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/salary_statement_summary?page=" + page + value,  { 'headers': headers })

  }
  public getPaystmtSummarys(page:any, value:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/salary_statement_summary?page=" + page + value, { 'headers': headers })

  }
  public payrollMapping(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_payrollmastermapping?page=" + page , { 'headers': headers })

  }
  public manualRuns(month:any, year:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/payroll_manual_run?month="+month+"&year="+year, { 'headers': headers })

  }

  public employee_monthlypayslips(emp_id:any,id:any, search:any,action:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    // employeemonthpay_fetch?employee_id=2&month=5&year=2023
    // return this.http.get<any>(payroll_url + 'payrollserv/employeemonthlypay_summary?month=5&year=2023&employee_id=' + emp_id, { 'headers': headers })
    if(action==1){
      return this.http.get<any>(payroll_url + 'payrollserv/employeemonthpay_fetch?employee_id=' + emp_id + search +"&info_id="+id +"&action="+action, { 'headers': headers,responseType:'blob' as 'json'})
    }
    else{
      return this.http.get<any>(payroll_url + 'payrollserv/employeemonthpay_fetch?employee_id=' + emp_id + search +"&info_id="+id +"&action="+action, { 'headers': headers })
    }
    
  }

  public getEmpAdvanceUsers(page:any, id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeeadvancedetails_create?&page=" + page + "&admin=False" + "&advance_status="+ id , { 'headers': headers })

  }

  public getDrafts(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/monthlyinfo_update_getids?page="+page+ value , { 'headers': headers })

  }
  public addNewDeduction(json:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    console.log("docpost", json)
    return this.http.post<any>(payroll_url + "payrollserv/employeeadditional_allowance_create", json, { 'headers': headers })
  }
  public getDeductionSummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeeadditional_allowance_create?page="+page+"&custom_deduct=True", { 'headers': headers })

  }
  public searchGrades(name:any,page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "mstserv/grade?page=" + page , { 'headers': headers, params: { query: name } })
  }
  public gradeSummary(page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "mstserv/grade?page=" + page , { 'headers': headers })

  }

  public get_dropdownsummary_advance(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token =  tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/paystatus_dropdown" , {'headers': headers})
  }
  public addnewGrade(json:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'mstserv/grade', json, { 'headers': headers })
  }

  
  public getAdvancePayHistory(id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/employeeadvance_payment_history?advance_id=' + id, { 'headers': headers })
  }
  public downloadTemplate(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    let json={}
    return this.http.post<any>(payroll_url + 'payrollserv/paystructure_excel_template1', json, { 'headers': headers, responseType: 'blob' as 'json'  })

  }
  public paystructurecreation(formdata:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    let json={}
    return this.http.post<any>(payroll_url + 'payrollserv/create_emp_pay1', formdata, { 'headers': headers})


  }




  public getEmpAdvanceSearch(name:any, status:any, id:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employeeadvancedetails_create?employee=" + name + "&admin="+ status  + "&advance_status=" + id, { 'headers': headers })

  }
  public getdropdownSegments(): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/dropdown_bs', { 'headers': headers })
  }
  public getdropdownCC(): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/dropdown_cc', { 'headers': headers })
  }
  public downloadYearlyDataPdf(emp:any, yr:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/employee_monthlydetails_year?action=2&employee_id="+emp+"&year="+yr , { 'headers': headers, responseType: 'blob' as 'json' })
    
    // existing api "payrollserv/employee_monthlydetails_year?action=2&employee_id="+emp+"&year="+yr
    // http://192.168.1.19:8000/payrollserv/employee_monthlydetails_year?employee_id=232&year=2023&action=2

  }
  public getGradeComponents(grade:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'mstserv/grade_based_segment_data1?grade='+grade, { 'headers': headers })
  }
  public getemployeegradeinfo(grade:any,employee:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/emp_details_segment_data?employee_id='+employee+'&grade='+grade, { 'headers': headers })
  }
  public reportSubmit(json:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    // let json={}
    return this.http.post<any>(payroll_url + 'payrollserv/create_report_column', json, { 'headers': headers})
  }
  public reportSummary(name:any,page:any):Observable<any>{
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    if(name){
      return this.http.get<any>(payroll_url + 'payrollserv/create_report_column?name='+name+'&page='+page, { 'headers': headers })
    }
    else{
      return this.http.get<any>(payroll_url + 'payrollserv/create_report_column?name=&page='+page, { 'headers': headers })
    }
    
  }
  public reportEditSummary(id:any):Observable<any>{
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/get_reportcolumn/'+id, { 'headers': headers })
  }
  public reportDeleteSummary(id:any):Observable<any>{
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + 'payrollserv/get_reportcolumn/'+id, { 'headers': headers })
  }
  public reportDropdown():Observable<any>{
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/report_dropdown', { 'headers': headers })
  }

  public getSegmentDropdowns(value:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_segmentmaster?&page="+value,  { 'headers': headers })

  }

  public getReviewSummarySpl(value:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/addictional_allowance_data?page="+page + value , { 'headers': headers })

  }
  public BankDropdown(name:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "mstserv/dropdown_temp_report?page=1&name="+name, { 'headers': headers })
  }
  public BankSubmit(json:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + "payrollserv/create_report_template",json, { 'headers': headers })
  }
  public BankSummary(name:any,page:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    if(name){
      return this.http.get<any>(payroll_url + "payrollserv/create_report_template?bank_id="+name+'&page='+page, { 'headers': headers })
    }
    else{
      return this.http.get<any>(payroll_url + "payrollserv/create_report_template?bank_id="+''+'&page='+page, { 'headers': headers })
    }
   
  }
  public EditBank(id:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/get_report_template/"+id, { 'headers': headers })
  }
  public DeleteBank(id:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.delete<any>(payroll_url + "payrollserv/get_report_template/"+id, { 'headers': headers })
  }
  public MasterUpload(action:any,upload:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    // let json = {}
    let formData = new FormData();
    formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + "payrollserv/payrollmaster_upload?action="+action, formData, { 'headers': headers })
  }
  public MasterUploadDownload(action:any,sheet:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
     let json = {}
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + "payrollserv/payrollmaster_template_upload?action="+action+'&sheet='+sheet,json, { 'headers': headers,responseType: 'blob' as 'json'  })
  }
  public BankDowload(id:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/report_banktemplate/"+id, { 'headers': headers,responseType:'blob' as 'json' })
  }
  public EmployeeAttendanceUpload(upload:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    let formData = new FormData();
    formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + "payrollserv/payroll_test_upload", formData, { 'headers': headers })
  }
  public EmployeeAttendanceDownload():Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
     let json = {}
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + "payrollserv/payroll_test_template",json, { 'headers': headers,responseType: 'blob' as 'json'  })
  }
  public AttendanceSummary(data:any,page:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/payroll_test_upload?"+data+"&page="+page, { 'headers': headers})
  }
  public BulkUploadDeductionUpload(upload:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    let formData = new FormData();
    formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + "payrollserv/custom_bulkupload",formData, { 'headers': headers })
  }
  public BulkUploadDeductionTemplate():Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
     let json = {}
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/custom_bulkupload", { 'headers': headers,responseType: 'blob' as 'json'  })
  }

  public gettemplates(id:any, page:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/create_payrolltemplate?name=&page="+page +'&grade='+id, { 'headers': headers })
  }

  public getemployeegradeinfodetails(grade:any,employee:any, id:any): Observable<any> {
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/emp_details_segment_data?employee_id='+employee+'&grade='+grade+'&template_id='+id, { 'headers': headers })
  }

  /**
 * Retrieves the list of business segments from the user service.
 *
 * @param gstkeyvalue The search query.
 * @param pageno The page number.
 * @returns The list of business segments.
 */
  public getBSApiUserService(gstkeyvalue:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/searchbusinesssegment?query=' + gstkeyvalue + '&page=' + pageno, { 'headers': headers })
  }


  /**
 * Retrieves the list of cost centers from the user service.
 *
 * @param gstkeyvalue The search query.
 * @param bs_id The business segment ID.
 * @param pageno The page number.
 * @returns The list of cost centers.
 */
  public getCCApiUserService(gstkeyvalue:any, bs_id:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/searchcostcentre?query=' + gstkeyvalue + '&bs_id=' + bs_id + '&page=' + pageno, { 'headers': headers })
  }

  public getEmploymentType(): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'usrserv/emp_type_drop_down', { 'headers': headers })
  }
  public getpaycomponentEarning(query_search:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payroll_component?name=' + query_search + '&action=5', { 'headers': headers })
  }
  public getpaycomponentDeduct(query_search:any, pageno:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/payroll_component?name=' + query_search + '&action=6', { 'headers': headers })
  }
  public reportDropdowntype():Observable<any>{
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/reportcolumns_dropdown', { 'headers': headers })
  }

  //getLinkColumns
  public getLinkColumns(id:any):Observable<any>{
    this.reset();
    const getToken: any = localStorage.getItem('sessionData')
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + 'payrollserv/get_linkcolumns?linkcolumns='+id, { 'headers': headers })
  }
  public downloadBankTemplate(searchValue:any, month:any, year:any): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/bank_linkcolumns_exceldownload/" + searchValue + "?month=" + month + "&year="+ year, { 'headers': headers, responseType: 'blob' as 'json' })


  }

  
  public getDetailAdminAdvances( id:any, page:any ): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/advancesummary?employee=&advance_status&page="+page, { 'headers': headers })

  }

  //getDetailAdminAdvanceSearch
  public getDetailAdminAdvanceSearch( id:any, stats:any ): Observable<any> {
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/advancesummary?employee="+id+"&advance_status="+stats, { 'headers': headers })

  }

  public uploadAdvanceData(upload: any): Observable<any> {
    this.reset();
    let token = '';
    const getToken : any= localStorage.getItem("sessionData");
    if (getToken) {
      let tokenValue = JSON.parse(getToken);
      token = tokenValue.token
    }
    let formData = new FormData();
    formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/update_advavancepaid?action=excel', formData, { 'headers': headers })

  }

  public PaidAdvanceUpdate(data: any): Observable<any> {
    this.reset();
    let token = '';
    const getToken : any= localStorage.getItem("sessionData");
    if (getToken) {
      let tokenValue = JSON.parse(getToken);
      token = tokenValue.token
    }
    // let formData = new FormData();
    // formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/update_advavancepaid', data, { 'headers': headers })

  }
  public forceAdvanceClose(data: any): Observable<any> {
    this.reset();
    let token = '';
    const getToken : any= localStorage.getItem("sessionData");
    if (getToken) {
      let tokenValue = JSON.parse(getToken);
      token = tokenValue.token
    }
    // let formData = new FormData();
    // formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/advancesummary', data, { 'headers': headers })

  }
  public uploadBankTemplate(upload: any, id:any, mon:any, yeear:any): Observable<any> {
    this.reset();
    let token = '';
    const getToken : any= localStorage.getItem("sessionData");
    if (getToken) {
      let tokenValue = JSON.parse(getToken);
      token = tokenValue.token
    }
    let formData = new FormData();
    formData.append('file', upload);
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.post<any>(payroll_url + 'payrollserv/excelupdate_payrollpaystatus?month='+mon+"&year="+yeear, formData, { 'headers': headers })

  }
  public bankSampleTemplate(mon:any,year:any):Observable<any>{
    this.reset();
    const getToken : any= localStorage.getItem("sessionData")
    let tokenValue = JSON.parse(getToken);
    let token = tokenValue.token
     let json = {}
    const headers = { 'Authorization': 'Token ' + token }
    return this.http.get<any>(payroll_url + "payrollserv/excelupdate_payrollpaystatus?month="+mon+"&year="+year , { 'headers': headers,responseType: 'blob' as 'json'  })
  }

}

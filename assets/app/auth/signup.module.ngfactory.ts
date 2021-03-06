/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './signup.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from './auth.service';
import * as import10 from '../shared/prevent-unsaved-changes-guard.service';
import * as import11 from '@angular/core/src/di/injector';
import * as import12 from './signup-form.component.ngfactory';
import * as import13 from '@angular/core/src/i18n/tokens';
import * as import14 from './signup-form.component';
import * as import15 from '@angular/http/src/http';
import * as import16 from '@angular/router/src/router_config_loader';
class SignupModuleInjector extends import0.NgModuleInjector<import1.SignupModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _ReactiveFormsModule_3:import4.ReactiveFormsModule;
  _RouterModule_4:import5.RouterModule;
  _SignupModule_5:import1.SignupModule;
  __NgLocalization_6:import6.NgLocaleLocalization;
  __RadioControlRegistry_7:import7.RadioControlRegistry;
  __FormBuilder_8:import8.FormBuilder;
  __ROUTES_9:any[];
  __AuthService_10:import9.AuthService;
  __PreventUnsavedChangesGuard_11:import10.PreventUnsavedChangesGuard;
  constructor(parent:import11.Injector) {
    super(parent,[import12.SignUpFormComponentNgFactory],[]);
  }
  get _NgLocalization_6():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_6 == (null as any))) { (this.__NgLocalization_6 = new import6.NgLocaleLocalization(this.parent.get(import13.LOCALE_ID))); }
    return this.__NgLocalization_6;
  }
  get _RadioControlRegistry_7():import7.RadioControlRegistry {
    if ((this.__RadioControlRegistry_7 == (null as any))) { (this.__RadioControlRegistry_7 = new import7.RadioControlRegistry()); }
    return this.__RadioControlRegistry_7;
  }
  get _FormBuilder_8():import8.FormBuilder {
    if ((this.__FormBuilder_8 == (null as any))) { (this.__FormBuilder_8 = new import8.FormBuilder()); }
    return this.__FormBuilder_8;
  }
  get _ROUTES_9():any[] {
        if ((this.__ROUTES_9 == (null as any))) { (this.__ROUTES_9 = [[{
          path: '',
          component: import14.SignUpFormComponent,
          canDeactivate: [import10.PreventUnsavedChangesGuard]
        }
    ]]); }
    return this.__ROUTES_9;
  }
  get _AuthService_10():import9.AuthService {
    if ((this.__AuthService_10 == (null as any))) { (this.__AuthService_10 = new import9.AuthService(this.parent.get(import15.Http))); }
    return this.__AuthService_10;
  }
  get _PreventUnsavedChangesGuard_11():import10.PreventUnsavedChangesGuard {
    if ((this.__PreventUnsavedChangesGuard_11 == (null as any))) { (this.__PreventUnsavedChangesGuard_11 = new import10.PreventUnsavedChangesGuard()); }
    return this.__PreventUnsavedChangesGuard_11;
  }
  createInternal():import1.SignupModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._ReactiveFormsModule_3 = new import4.ReactiveFormsModule();
    this._RouterModule_4 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._SignupModule_5 = new import1.SignupModule();
    return this._SignupModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import4.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import1.SignupModule)) { return this._SignupModule_5; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_6; }
    if ((token === import7.RadioControlRegistry)) { return this._RadioControlRegistry_7; }
    if ((token === import8.FormBuilder)) { return this._FormBuilder_8; }
    if ((token === import16.ROUTES)) { return this._ROUTES_9; }
    if ((token === import9.AuthService)) { return this._AuthService_10; }
    if ((token === import10.PreventUnsavedChangesGuard)) { return this._PreventUnsavedChangesGuard_11; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SignupModuleNgFactory:import0.NgModuleFactory<import1.SignupModule> = new import0.NgModuleFactory(SignupModuleInjector,import1.SignupModule);
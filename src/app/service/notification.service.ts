import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastService: ToastrService) { }

  showSuccess(message: string | any) {
    this.toastService.success(message)
  }

  showError(message: string | any) {
    this.toastService.error(message)
  }

  showInfo(message: string | any) {
    this.toastService.info(message)
  }

  showWarning(message: string | any) {
    this.toastService.warning(message)
  }
}

import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from "@angular/core";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgClass, NgStyle} from "@angular/common";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {StatusReportComponent} from "./status-report/status-report.component";
import Status from "../../models/Status";
import {MatIcon} from "@angular/material/icon";
import {BREAKPOINTS} from "../../../data/Breakpoints";

@Component({
  standalone: true,
  selector: 'link-button',
  imports: [
    MatButton,
    NgStyle,
    NgClass,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent implements AfterViewInit{

  @ViewChild('statusReportButton') statusReportButton?: MatIconButton

  protected currentBreakpoint: string = 'desktop'
  protected showOnboarding: boolean = false
  protected readonly hideOnboarding = () => this.showOnboarding = false

  @Input({required: true}) text!: string
  @Input({required: true}) color!: string
  @Input() textColor: string = 'white'
  @Input() iconName?: string
  @Input({required: true}) link!: string
  @Input() disabled: boolean = false
  @Input() status?: Status

  readonly _iconSourceBase: string = 'assets/'

  dialogRef?: MatDialogRef<StatusReportComponent>

  constructor(private dialog: MatDialog, private changeDetector: ChangeDetectorRef) {
    this.currentBreakpoint = window.getComputedStyle(
        document.getElementsByTagName('body')[0]
      )!.getPropertyValue('--current-breakpoint')
    if (!this.status) return
  }

  ngAfterViewInit(): void {
    if (!this.status) return
    const thisButton = this.statusReportButton?._elementRef.nativeElement
    const firstButton = document.querySelector('button.status-report-button')
    if (thisButton !== firstButton) return
    this.showOnboarding = true
    this.dialog.afterOpened.subscribe(() => this.showOnboarding = false)
    this.changeDetector.detectChanges()
  }

  openStatusReport() {
    this.dialogRef = this.dialog?.open(StatusReportComponent, {
      width: '90dvw',
      maxWidth: '600px',
      autoFocus: false,
    })
    const componentInstance = this.dialogRef?.componentInstance
    if (!!componentInstance) {
      componentInstance.onClickClose.subscribe(() => this.dialogRef?.close())
      componentInstance.onClickOpen.subscribe(() => this.goTo())
      if (!!this.status) componentInstance.status = this.status
    }
  }

  goTo() {
    let a = document.createElement('a')
    a.href = `https://${this.link}`
    a.target = '_blank'
    a.click()
  }

  protected readonly BREAKPOINTS = BREAKPOINTS;
}

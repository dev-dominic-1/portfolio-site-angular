import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatDialogContent} from "@angular/material/dialog";
import Status, {CurrentProgress} from "../../../models/Status";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {MatCardActions} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'status-report',
  imports: [
    MatDialogContent,
    MatIcon,
    NgClass,
    MatTooltip,
    MatCardActions,
    MatButton
  ],
  templateUrl: 'status-report.component.html',
  styleUrl: 'status-report.component.scss',
})
export class StatusReportComponent {
  @Input({required: true}) status!: Status

  @Output() onClickClose: EventEmitter<any> = new EventEmitter<any>()
  @Output() onClickOpen: EventEmitter<any> = new EventEmitter<any>()

  ICON_NAME_INDEX = 0
  CLASS_NAME_INDEX = 1
  TOOLTIP_TEXT_INDEX = 2

  getIconData(progress: CurrentProgress): [string, string, string] {
    switch (progress) {
      case CurrentProgress.NOT_STARTED:
        return ['close', 'not-started', 'Not Started']
      case CurrentProgress.REVISIONS:
        return ['restart_alt', 'work-in-progress', 'Undergoing Revisions']
      case CurrentProgress.WORK_IN_PROGRESS:
        return ['construction', 'work-in-progress', 'Work In Progress']
      case CurrentProgress.COMPLETED:
        return ['check', 'completed', 'Completed']
      default:
        return ['question_outline', 'warning', 'ERROR']
    }
  }
}

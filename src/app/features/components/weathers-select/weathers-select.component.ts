import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  output,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-weathers-select',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './weathers-select.component.html',
  styleUrl: './weathers-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeathersSelectComponent {
  @Input() cities: string[] = [];
  @Input() selectedCity: string | null = null;
  @Output() notifyCityChange = new EventEmitter<string>();
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Paragraph } from '../../../../shared/models/paragraph.model';

@Component({
  selector: 'app-paragraph',
  standalone: false,
  templateUrl: './paragraph.component.html',
})
export class ParagraphComponent {
  @Input({ required: true }) paragraph!: Paragraph;
  @Output() addToParagraphEvent = new EventEmitter<number>();
  addText(id: number): void {
    this.addToParagraphEvent.emit(id); // padod signalu ar id
  }
}

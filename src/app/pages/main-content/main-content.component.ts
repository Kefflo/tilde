import { Component } from '@angular/core';
import { Paragraph } from '../../shared/models/paragraph.model';
import { TextService } from '../../shared/models/services/text.service';

@Component({
  selector: 'main-content',
  standalone: false,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],

})
export class MainContentComponent {
  paragraphOne: string =
    'Aenean vel nisi suscipit, vulputate dui eget, lacinia leo. In tristique massa lectus, in gravida ante tempor a. Fusce cursus orci at bibendum fringilla. Sed ac vehicula nisi. Nullam a pellentesque diam.';
  paragraphTwo: string =
    'Curabitur sit amet molestie sapien, a ornare libero. Pellentesque eget dui vel velit eleifend sollicitudin lacinia non tortor. Nulla tempor, arcu ut faucibus maximus, justo purus fringilla nunc, ornare congue dui tellus vitae arcu.';

  paragraphs: Paragraph[] = [
    { id: 1, paragraph: this.paragraphOne },
    { id: 2, paragraph: this.paragraphTwo },
  ];

  constructor(private readonly textService: TextService) {
    //raksta kko, ja inicializējas komponenti
  }

  addToParagraph(paragraphNumber: number): void {
    const randomSentence = this.textService.getRandomSentence();
    const paragraph = this.paragraphs.find((p) => p.id === paragraphNumber);
    if (paragraph) {
      paragraph.paragraph += ' ' + randomSentence;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'main-content',
  standalone: false,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  
  paragraphOne: string = 'Aenean vel nisi suscipit, vulputate dui eget, lacinia leo. In tristique massa lectus, in gravida ante tempor a. Fusce cursus orci at bibendum fringilla. Sed ac vehicula nisi. Nullam a pellentesque diam.';
  paragraphTwo: string = 'Curabitur sit amet molestie sapien, a ornare libero. Pellentesque eget dui vel velit eleifend sollicitudin lacinia non tortor. Nulla tempor, arcu ut faucibus maximus, justo purus fringilla nunc, ornare congue dui tellus vitae arcu.';

  sentences: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Ut pellentesque mi id tellus cursus, eget viverra lacus interdum.',
    'Phasellus vitae mattis justo, eu pellentesque sapien.',
    'Pellentesque dolor turpis, hendrerit quis felis vitae, rutrum convallis tortor.',
    'Phasellus blandit vehicula nisl, et eleifend metus interdum et.',
    'Curabitur pharetra semper mi, vel ultricies elit vulputate ut.',
    'Vestibulum convallis justo eu tempor rhoncus.',
    'Pellentesque non mauris in risus aliquet feugiat suscipit eu ipsum.',
    'Integer consectetur diam elementum, gravida nisi ac, luctus lacus.',
    'Phasellus sollicitudin hendrerit blandit.',
    'Suspendisse risus libero, malesuada at ultrices dictum, interdum sit amet sem.',
    'Nullam posuere est quis pellentesque pharetra.',
    'Praesent tellus ipsum, faucibus a lorem id, faucibus accumsan nulla.'
  ];

  addToParagraph(paragraphNumber: number): void {
    const randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
    if (paragraphNumber === 1) {
      this.paragraphOne += ' ' + randomSentence;
    } else if (paragraphNumber === 2) {
      this.paragraphTwo += ' ' + randomSentence;
    }
  }
}

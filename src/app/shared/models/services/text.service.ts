import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private readonly sentences: string[] = [
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

  getRandomSentence(): string {
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }
}

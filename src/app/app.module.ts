import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { ParagraphComponent } from './pages/main-content/components/paragraph/paragraph.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    // Pielinkotās lietas pie modules
    AppComponent,
    MainContentComponent,
    ParagraphComponent,
    HeaderComponent,
  ],
  imports: [
    // Importēt funkcionalitāti moduļiem, raksta to, kas ir citā vietā
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

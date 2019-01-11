import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { DonateSectionComponent } from './donate-section/donate-section.component';
import { TestimonyComponent } from './shared/testimony/testimony.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CelebratedGalleriesComponent } from './celebrated-galleries/celebrated-galleries.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { LastestSectionComponent } from './lastest-section/lastest-section.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    DonateSectionComponent,
    TestimonyComponent,
    TestimonialComponent,
    ContactFormComponent,
    CelebratedGalleriesComponent,
    AchievementsComponent,
    LastestSectionComponent,
    NewsletterComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

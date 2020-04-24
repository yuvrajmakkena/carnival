import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule,MatCardModule,MatButtonModule, MatExpansionModule, MatToolbarModule,MatMenuModule} from '@angular/material';
import { PostCreaterComponent } from './components/posts/post-creater/post-creater.component';
import {PostListComponent} from './components/posts/post-list/post-list.component';
import {HeaderComponent} from './components/header/header.component'
import { PostsService } from './components/posts/post.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostCreaterComponent,
    PostListComponent,
    HeaderComponent
  ],
    imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule
    
    ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

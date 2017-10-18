import { Component, OnInit, ViewChild } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  @ViewChild(FBVideoComponent) video: FBVideoComponent;
  
    constructor(private fb: FacebookService) {
  
      console.log('Initializing Facebook');
  
      fb.init({
        appId: '342500242829284',
        version: 'v2.10'
      });
  
    }
       ngOnInit(): void {
      }
      login() {
        this.fb.login()
          .then((res: LoginResponse) => {
            console.log('Logged in', res);
          })
          .catch(this.handleError);
      }
    facebooklogin (){
      this.login();
    }
      /**
       * Login with additional permissions/options
       */
      onSignIn(googleUser) {
       var profile = googleUser.getBasicProfile();
       console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
       console.log('Name: ' + profile.getName());
       console.log('Image URL: ' + profile.getImageUrl());
       console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
      
      loginWithOptions() {
    
        const loginOptions: LoginOptions = {
          enable_profile_selector: true,
          return_scopes: true,
          scope: 'public_profile,user_friends,email,pages_show_list'
        };
    
        this.fb.login(loginOptions)
          .then((res: LoginResponse) => {
            console.log('Logged in', res);
          })
          .catch(this.handleError);
    
      }
    
      getLoginStatus() {
        this.fb.getLoginStatus()
          .then(console.log.bind(console))
          .catch(console.error.bind(console));
      }
    
    
      /**
       * Get the user's profile
       */
      getProfile() {
        this.fb.api('/me')
          .then((res: any) => {
            console.log('Got the users profile', res);
          })
          .catch(this.handleError);
      }
    

  /**
   * Get the users friends
   */
  getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }


  /**
   * Show the share dialog
   */
  share() {

    const options: UIParams = {
      method: 'share',
      href: 'https://github.com/zyramedia/ng2-facebook-sdk'
    };

    this.fb.ui(options)
      .then((res: UIResponse) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);

  }


  playVideo() {
    this.video.play();
  }

  onVideoEvent(ev) {
    console.log('Video event fired: ' + ev);
  }

  pauseVideo() {
    this.video.pause();
  }



  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }

}
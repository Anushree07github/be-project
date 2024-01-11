import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import TwitterLogin from 'react-twitter-login';

const Login_Buttons = () => {
 const responseGoogle = (response) => {
    console.log(response);
 };

 const responseFacebook = (response) => {
    console.log(response);
 };

 const responseTwitter = (response) => {
    console.log(response);
 };

 return (

    <div className='m-4'>
        <div class="flex justify-center">
          <GoogleLogin
            clientId="989084985080-no1m5mcd22v4mq5mehfju4r61kafs7tb.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <br />

        <div class="flex justify-center">
          <FacebookLogin
            appId="your-facebook-app-id"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            textButton='Login with Facebook'
            size='small'
            icon="fa-facebook"
          />
        </div>

    </div>
 );
};

export default Login_Buttons;
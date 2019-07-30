import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserManager, User} from 'Oidc-client';
import { Constants } from 'src/assets/constants';

@Injectable({providedIn: 'root'})
export class AuthService {
    private _userManager: UserManager;

    constructor(private httpClient: HttpClient) { 
        var config = { 
        authority: 'https://securingangularappscourse-sts.azurewebsites.net',
        client_id: 'spa-client',
        redirect_uri: `${Constants.clientRoot}assets/oidc-login-redirect.html`,
        scope: 'openid projects-api profile',
        response_logout_redirect_uri: `${Constants.clientRoot}`
    }
    this._userManager = new UserManager(config);
};
login(): Promise<any>{
    return this._userManager.signoutRedirect();
}
    
}
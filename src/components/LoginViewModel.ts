import { BaseViewModel } from '@core/BaseViewModel';
import page from 'page';

export class LoginViewModel extends BaseViewModel {
    public performLogin = (): void => {
        localStorage.setItem('auth_token', 'demo');
        localStorage.setItem('user_role', 'admin');
        page.redirect('/dashboard');
    };

    constructor(context: PageJS.Context | undefined) {
        super(context);
        this.setTemplate(`
            <div class="login">
                <h1>Login</h1>
                <button data-bind="click: performLogin">Login</button>
            </div>
        `);
    }
}

import page from 'page';

export function logPathMiddleware(
    context: { path: string },
    next: () => void
): void {
    console.log(
        `%c${context.path}`,
        'color: white; background-color: blue; padding: 4px; border-radius: 4px;'
    );
    next();
}

export function authGuard(_context: PageJS.Context, next: () => void): void {
    const token = localStorage.getItem('auth_token');
    if (token) {
        next();
    } else {
        console.warn('Authentication required. Redirecting to login page.');
        page.redirect('/login');
    }
}

export function roleGuard(requiredRole: string) {
    return (_context: PageJS.Context, next: () => void): void => {
        const userRole = localStorage.getItem('user_role');
        if (userRole === requiredRole) {
            next();
        } else {
            console.warn(`Access denied. Role ${requiredRole} required.`);
            page.redirect('/access-denied');
        }
    };
}

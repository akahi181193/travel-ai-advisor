// Simple front-end auth (NOT for production)
// Uses localStorage: users stored as array of {id,email,passwordHash,createdAt}
// Passwords hashed with a trivial hash (not secure). For demo only.

const USERS_KEY = 'ta_users';
const CURRENT_KEY = 'ta_current_user';

function hashPassword(pw){
    // Very naive hash (demo only)
    let h = 0; for (let i=0;i<pw.length;i++){h = (h<<5)-h + pw.charCodeAt(i); h|=0;} return 'h'+h;
}

function loadUsers(){
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch(e){ return []; }
}
function saveUsers(users){ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }

function findUser(email){ return loadUsers().find(u => u.email.toLowerCase() === email.toLowerCase()); }

function registerUser(email,password){
    if(findUser(email)) return {ok:false,message:'このメールアドレスは既に登録されています'};
    const users = loadUsers();
    const user = { id:'u_'+Date.now(), email, passwordHash: hashPassword(password), createdAt: new Date().toISOString() };
    users.push(user); saveUsers(users); localStorage.setItem(CURRENT_KEY, user.id); return {ok:true,user};
}

function loginUser(email,password){
    const user = findUser(email); if(!user) return {ok:false,message:'メールアドレスが見つかりません'};
    if(user.passwordHash !== hashPassword(password)) return {ok:false,message:'パスワードが正しくありません'};
    localStorage.setItem(CURRENT_KEY, user.id); return {ok:true,user};
}

function logoutUser(){ localStorage.removeItem(CURRENT_KEY); }

function getCurrentUser(){
    const id = localStorage.getItem(CURRENT_KEY); if(!id) return null;
    return loadUsers().find(u=>u.id===id)||null;
}

function getUserBookings(userId){
    try { return JSON.parse(localStorage.getItem('bookings_'+userId)) || []; } catch(e){ return []; }
}
function saveUserBooking(userId, booking){
    const list = getUserBookings(userId); list.push(booking); localStorage.setItem('bookings_'+userId, JSON.stringify(list));
}

function renderAuthUI(){
    const container = document.querySelector('.auth-area'); if(!container) return;
    const user = getCurrentUser();
    if(user){
        container.innerHTML = `
            <div class="auth-logged">
                <span class="auth-email"><i class="fas fa-user"></i> ${user.email}</span>
                <a href="user.html" class="auth-link">アカウント</a>
                <button class="auth-logout" id="logoutBtn">ログアウト</button>
            </div>`;
        const btn = container.querySelector('#logoutBtn');
        btn.addEventListener('click', ()=>{ logoutUser(); renderAuthUI(); });
    } else {
    container.innerHTML = `<div class="auth-guest"><a class="auth-login-btn" href="login.html"><i class='fas fa-sign-in-alt'></i> ログイン</a></div>`;
    }
}

document.addEventListener('DOMContentLoaded', renderAuthUI);

// Export to global for simplicity
window.authAPI = { registerUser, loginUser, logoutUser, getCurrentUser, getUserBookings };

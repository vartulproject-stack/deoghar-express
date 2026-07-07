function joinWaitlist() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    
    if (!email) {
        message.innerHTML = 'Bhai email to daal pehle 😂';
        message.style.color = '#FF0000';
        return;
    }
    
    if (!email.includes('@')) {
        message.innerHTML = 'Sahi email daal bhai';
        message.style.color = '#FF0000';
        return;
    }
    
    message.innerHTML = 'Waitlist mein add ho gaya bhai! 🎉 Dubai mein milte hain 🇦🇪';
    message.style.color = '#00FF00';
    document.getElementById('email').value = '';
    
    // Yahan tu baad mein Google Sheets ya API connect kar sakta hai
    console.log('New waitlist:', email);
}

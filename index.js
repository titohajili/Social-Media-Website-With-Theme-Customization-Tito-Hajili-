    //SIDEBAR
    const menuItems = document.querySelectorAll('.menu-item');
//MESAGES
    const messagesNotification = document.querySelector('#messages-notifications');
    const messages = document.querySelector('.messages');
    const message = messages.querySelectorAll('.message');
    const messageSearch = document.querySelector('#message-search');


//===================SIDEBAR ==

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popur').style.display = 'none';
        } else{
            document.querySelector('.notification-popur').style.display ='block'
            document.querySelector('#notifications .notification-count').style.display = 'none';

        }
    })
})
//MESSAGES========

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';

        } else{
            chat.style.display = 'none';
        }
    })
}

    messageSearch.addEventListener('keyup', searchMessage);






//higghtlight messages card whenmessages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem  var(--primary)';
    messagesNotification.querySelector('.notifacation-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    },2000)
})